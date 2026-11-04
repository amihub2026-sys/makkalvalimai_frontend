
import { CommonModule } from '@angular/common';

import {
  Component,
  EventEmitter,
  Input,
  Output,
  OnDestroy,
  ViewChild,
  ElementRef
} from '@angular/core';

import { NewsApiService } from '../../services/news-api.service';

import { ClientMp3EncoderService } from '../../services/client-mp3-encoder.service';

type AudioMode = 'record' | 'upload';

@Component({
  selector: 'app-audio-recorder',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './audio-recorder.component.html',
  styleUrls: [
    './audio-recorder.component.css',
    './audio-recorder.component.responsive.css'
  ]
})
export class AudioRecorderComponent implements OnDestroy {

  // ========================================
  // INPUTS
  // ========================================

  @Input() language: 'ta' | 'en' = 'ta';

  @Input() disabled = false;

  @Input() maxSizeMb = 20;

  // ========================================
  // OUTPUTS
  // ========================================

  @Output() uploaded = new EventEmitter<string>();

  @Output() workingChange = new EventEmitter<boolean>();

  // ========================================
  // FILE INPUT
  // ========================================

  @ViewChild('fileInput')
  fileInput?: ElementRef<HTMLInputElement>;

  // ========================================
  // COMPONENT STATE
  // ========================================

  mode: AudioMode = 'record';

  recording = false;
  uploading = false;
  converting = false;
  dragging = false;

  previewUrl = '';

  selectedFile: File | null = null;

  error = '';
  status = '';

  // ========================================
  // PRIVATE RECORDING STATE
  // ========================================

  private recorder?: MediaRecorder;
  private stream?: MediaStream;

  private recordingBlob?: Blob;

  private destroyed = false;

  private working = false;

  private stoppedBySwitch = false;

  // ========================================
  // CONSTRUCTOR
  // ========================================

  constructor(
    private api: NewsApiService,
    private mp3: ClientMp3EncoderService
  ) {}

  // ========================================
  // LABEL
  // ========================================

  get label(): string {
    return this.language === 'ta' ? 'Tamil' : 'English';
  }

  get busy(): boolean {
    return (
      this.disabled ||
      this.uploading ||
      this.converting
    );
  }

  // ========================================
  // SWITCH AUDIO MODE
  // ========================================

  setMode(next: AudioMode): void {

    if (
      next === this.mode ||
      this.busy ||
      this.recording
    ) {
      return;
    }

    this.mode = next;

    this.stoppedBySwitch = true;

    this.discard();

    this.dragging = false;

    this.error = '';
    this.status = '';

    if (this.fileInput?.nativeElement) {
      this.fileInput.nativeElement.value = '';
    }

  }

  // ========================================
  // START MICROPHONE RECORDING
  // ========================================

  async start(): Promise<void> {

    if (
      this.mode !== 'record' ||
      this.recording ||
      this.busy
    ) {
      return;
    }

    this.error = '';
    this.status = '';

    this.discard();

    this.stoppedBySwitch = false;

    if (
      typeof navigator === 'undefined' ||
      !navigator.mediaDevices?.getUserMedia ||
      typeof MediaRecorder === 'undefined'
    ) {

      this.error =
        'Microphone recording requires a supported browser and HTTPS or localhost.';

      return;
    }

    try {

      this.stream =
        await navigator.mediaDevices.getUserMedia({
          audio: true,
          video: false
        });

      if (
        this.destroyed ||
        this.mode !== 'record'
      ) {

        this.releaseMicrophone();
        return;

      }

      const formats = [
        'audio/mpeg',
        'audio/ogg;codecs=opus',
        'audio/webm;codecs=opus',
        'audio/webm'
      ];

      const supportedType =
        formats.find(type =>
          MediaRecorder.isTypeSupported(type)
        );

      const recorder = new MediaRecorder(
        this.stream,
        supportedType
          ? { mimeType: supportedType }
          : undefined
      );

      this.recorder = recorder;

      const parts: BlobPart[] = [];

      recorder.ondataavailable = event => {

        if (event.data.size > 0) {
          parts.push(event.data);
        }

      };

      recorder.onerror = () => {

        this.recording = false;

        this.setWorking(false);

        this.error =
          'Recording failed. Please try again.';

        this.releaseMicrophone();

      };

      recorder.onstop = () => {

        this.recording = false;

        this.setWorking(false);

        this.releaseMicrophone();

        if (
          this.destroyed ||
          this.stoppedBySwitch ||
          this.mode !== 'record'
        ) {
          return;
        }

        const blob = new Blob(parts, {
          type:
            recorder.mimeType ||
            supportedType ||
            'audio/webm'
        });

        if (!blob.size) {

          this.error =
            'No voice was captured. Please record again.';

          return;
        }

        this.recordingBlob = blob;

        this.previewUrl =
          URL.createObjectURL(blob);

        this.status =
          'Recording ready. Listen to the preview, then click Save Recording.';

      };

      recorder.start(300);

      this.recording = true;

      this.setWorking(true);

    } catch (error) {

      this.error =
        error instanceof Error
          ? error.message
          : 'Could not access the microphone.';

      this.recording = false;

      this.setWorking(false);

      this.releaseMicrophone();

    }

  }

  // ========================================
  // STOP RECORDING
  // ========================================

  stop(): void {

    if (
      this.recorder?.state === 'recording'
    ) {
      this.recorder.stop();
    }

  }

  // ========================================
  // OPEN FILE CHOOSER
  // ========================================

  browse(): void {

    if (
      this.busy ||
      this.mode !== 'upload'
    ) {
      return;
    }

    this.fileInput?.nativeElement.click();

  }

  // ========================================
  // FILE SELECTION
  // ========================================

  onFileInput(event: Event): void {

    const input =
      event.target as HTMLInputElement;

    const file = input.files?.[0];

    if (file) {
      this.selectFile(file);
    }

    input.value = '';

  }

  // ========================================
  // DRAG AND DROP
  // ========================================

  onDragOver(event: DragEvent): void {

    if (
      this.mode !== 'upload' ||
      this.busy
    ) {
      return;
    }

    event.preventDefault();

    if (event.dataTransfer) {
      event.dataTransfer.dropEffect = 'copy';
    }

    this.dragging = true;

  }

  onDragLeave(event: DragEvent): void {

    event.preventDefault();

    this.dragging = false;

  }

  onDrop(event: DragEvent): void {

    event.preventDefault();

    this.dragging = false;

    if (
      this.mode !== 'upload' ||
      this.busy
    ) {
      return;
    }

    const file =
      event.dataTransfer?.files?.[0];

    if (file) {
      this.selectFile(file);
    }

  }

  // ========================================
  // VALIDATE SELECTED AUDIO
  // ========================================

  private selectFile(file: File): void {

    this.error = '';
    this.status = '';

    const extension =
      file.name.split('.').pop()?.toLowerCase() || '';

    const allowed = [
      'mp3',
      'ogg',
      'oga',
      'opus'
    ];

    if (!allowed.includes(extension)) {

      this.error =
        'Please choose an MP3, OGG or Opus audio file.';

      return;
    }

    if (
      !file.size ||
      file.size > this.maxSizeMb * 1024 * 1024
    ) {

      this.error =
        `Audio must not exceed ${this.maxSizeMb} MB.`;

      return;
    }

    this.discard();

    this.selectedFile = file;

    this.previewUrl =
      URL.createObjectURL(file);

    this.status =
      `${file.name} selected. Preview it, then click Upload Audio.`;

  }

  // ========================================
  // SAVE AUDIO
  //
  // 1. Convert recording to MP3 if needed.
  // 2. Upload to existing /admin/media API.
  // 3. Emit uploaded URL to parent component.
  // ========================================

  async save(): Promise<void> {

    if (
      this.busy ||
      this.recording
    ) {
      return;
    }

    if (
      this.mode === 'record' &&
      !this.recordingBlob
    ) {

      this.error =
        'Please record and stop before saving.';

      return;
    }

    if (
      this.mode === 'upload' &&
      !this.selectedFile
    ) {

      this.error =
        'Please select an audio file first.';

      return;
    }

    this.error = '';
    this.status = '';

    this.setWorking(true);

    try {

      let file: File;

      // ====================================
      // RECORDING MODE
      // ====================================

      if (this.mode === 'record') {

        const blob = this.recordingBlob!;

        if (
          blob.type === 'audio/mpeg' ||
          blob.type === 'audio/mp3'
        ) {

          file = new File(
            [blob],
            `makkal-valimai-${this.language}-${Date.now()}.mp3`,
            { type: 'audio/mpeg' }
          );

        } else {

          this.converting = true;

          this.status =
            'Converting recording to MP3...';

          file = await this.mp3.convertToMp3(
            blob,
            this.language
          );

        }

      } else {

        // ==================================
        // EXISTING AUDIO FILE MODE
        // ==================================

        const chosen = this.selectedFile!;

        if (
          /\.(ogg|oga|opus)$/i.test(
            chosen.name
          )
        ) {

          this.converting = true;

          this.status =
            'Converting OGG audio to MP3...';

          file = await this.mp3.convertToMp3(
            chosen,
            this.language
          );

        } else {

          file = new File(
            [chosen],
            chosen.name,
            { type: 'audio/mpeg' }
          );

        }

      }

      // ====================================
      // VERIFY CONVERTED FILE SIZE
      // ====================================

      if (
        file.size > this.maxSizeMb * 1024 * 1024
      ) {

        throw new Error(
          `Audio exceeds ${this.maxSizeMb} MB.`
        );

      }

      if (this.destroyed) return;

      // ====================================
      // UPLOAD USING EXISTING API
      // ====================================

      this.converting = false;

      this.uploading = true;

      this.status = 'Uploading audio...';

      const response =
        await this.api.uploadMedia(file);

      if (
        response.kind !== 'audio' ||
        !response.url?.trim()
      ) {

        throw new Error(
          'The server did not return a valid audio URL.'
        );

      }

      if (this.destroyed) return;

      // ====================================
      // NOTIFY PARENT
      // ====================================

      this.setWorking(false);

      this.uploaded.emit(response.url);

      this.status =
        `${this.label} audio uploaded. Save the article if applicable.`;

      this.discard();

    } catch (error) {

      this.error =
        error instanceof Error
          ? error.message
          : 'Audio upload failed.';

      this.status = '';

    } finally {

      this.converting = false;

      this.uploading = false;

      this.setWorking(false);

    }

  }

  // ========================================
  // REMOVE AUDIO PREVIEW
  // ========================================

  discard(): void {

    if (this.previewUrl) {

      URL.revokeObjectURL(
        this.previewUrl
      );

    }

    this.previewUrl = '';

    this.recordingBlob = undefined;

    this.selectedFile = null;

  }

  // ========================================
  // WORKING STATUS
  // ========================================

  private setWorking(value: boolean): void {

    if (this.working === value) {
      return;
    }

    this.working = value;

    this.workingChange.emit(value);

  }

  // ========================================
  // RELEASE MICROPHONE
  // ========================================

  private releaseMicrophone(): void {

    this.stream?.getTracks().forEach(
      track => track.stop()
    );

    this.stream = undefined;

  }

  // ========================================
  // DESTROY COMPONENT
  // ========================================

  ngOnDestroy(): void {

    this.destroyed = true;

    this.stoppedBySwitch = true;

    if (
      this.recorder?.state === 'recording'
    ) {
      this.recorder.stop();
    }

    this.releaseMicrophone();

    this.discard();

    this.setWorking(false);

  }

}
