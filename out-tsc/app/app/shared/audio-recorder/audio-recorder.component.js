import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "../../services/news-api.service";
import * as i2 from "../../services/client-mp3-encoder.service";
import * as i3 from "@angular/common";
const _c0 = ["fileInput"];
function AudioRecorderComponent_section_10_div_9_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 22);
    i0.ɵɵelement(1, "span", 23);
    i0.ɵɵelementStart(2, "span");
    i0.ɵɵtext(3, " Recording in progress... ");
    i0.ɵɵelementEnd()();
} }
function AudioRecorderComponent_section_10_button_11_Template(rf, ctx) { if (rf & 1) {
    const _r1 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 24);
    i0.ɵɵlistener("click", function AudioRecorderComponent_section_10_button_11_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r1); const ctx_r1 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r1.start()); });
    i0.ɵɵelement(1, "i", 25);
    i0.ɵɵtext(2, " Start Recording ");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("disabled", ctx_r1.busy);
} }
function AudioRecorderComponent_section_10_button_12_Template(rf, ctx) { if (rf & 1) {
    const _r3 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 26);
    i0.ɵɵlistener("click", function AudioRecorderComponent_section_10_button_12_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r3); const ctx_r1 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r1.stop()); });
    i0.ɵɵelement(1, "i", 27);
    i0.ɵɵtext(2, " Stop Recording ");
    i0.ɵɵelementEnd();
} }
function AudioRecorderComponent_section_10_div_13_Template(rf, ctx) { if (rf & 1) {
    const _r4 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 28)(1, "div", 29);
    i0.ɵɵelement(2, "i", 30);
    i0.ɵɵelementStart(3, "h4");
    i0.ɵɵtext(4, "Recording Preview");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(5, "p", 15);
    i0.ɵɵtext(6, " Listen to your recording before saving. ");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(7, "audio", 31);
    i0.ɵɵtext(8, " Your browser does not support audio playback. ");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(9, "div", 32)(10, "button", 33);
    i0.ɵɵlistener("click", function AudioRecorderComponent_section_10_div_13_Template_button_click_10_listener() { i0.ɵɵrestoreView(_r4); const ctx_r1 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r1.save()); });
    i0.ɵɵelement(11, "i", 34);
    i0.ɵɵtext(12);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(13, "button", 35);
    i0.ɵɵlistener("click", function AudioRecorderComponent_section_10_div_13_Template_button_click_13_listener() { i0.ɵɵrestoreView(_r4); const ctx_r1 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r1.discard()); });
    i0.ɵɵelement(14, "i", 36);
    i0.ɵɵtext(15, " Discard ");
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(7);
    i0.ɵɵproperty("src", ctx_r1.previewUrl);
    i0.ɵɵattribute("aria-label", ctx_r1.label + " recording preview");
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("disabled", ctx_r1.busy);
    i0.ɵɵadvance();
    i0.ɵɵclassProp("fa-spinner", ctx_r1.converting || ctx_r1.uploading)("fa-spin", ctx_r1.converting || ctx_r1.uploading)("fa-floppy-disk", !ctx_r1.converting && !ctx_r1.uploading);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", ctx_r1.converting ? "Converting to MP3..." : ctx_r1.uploading ? "Uploading..." : "Save Recording", " ");
    i0.ɵɵadvance();
    i0.ɵɵproperty("disabled", ctx_r1.busy);
} }
function AudioRecorderComponent_section_10_p_14_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p", 37);
    i0.ɵɵelement(1, "i", 38);
    i0.ɵɵtext(2, " Click Start Recording, speak into your microphone, then Stop and Preview. ");
    i0.ɵɵelementEnd();
} }
function AudioRecorderComponent_section_10_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "section", 11)(1, "div", 12)(2, "div", 13);
    i0.ɵɵelement(3, "i", 14);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "div")(5, "h4");
    i0.ɵɵtext(6);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(7, "p", 15);
    i0.ɵɵtext(8, " Record directly using your microphone. ");
    i0.ɵɵelementEnd()()();
    i0.ɵɵtemplate(9, AudioRecorderComponent_section_10_div_9_Template, 4, 0, "div", 16);
    i0.ɵɵelementStart(10, "div", 17);
    i0.ɵɵtemplate(11, AudioRecorderComponent_section_10_button_11_Template, 3, 1, "button", 18)(12, AudioRecorderComponent_section_10_button_12_Template, 3, 0, "button", 19);
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(13, AudioRecorderComponent_section_10_div_13_Template, 16, 11, "div", 20)(14, AudioRecorderComponent_section_10_p_14_Template, 3, 0, "p", 21);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance(6);
    i0.ɵɵtextInterpolate1("Record ", ctx_r1.label, " Voice");
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("ngIf", ctx_r1.recording);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", !ctx_r1.recording);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.recording);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.previewUrl && !ctx_r1.recording);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", !ctx_r1.recording && !ctx_r1.previewUrl);
} }
function AudioRecorderComponent_section_11_div_25_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 49)(1, "div", 50);
    i0.ɵɵelement(2, "i", 40);
    i0.ɵɵelementStart(3, "div", 51)(4, "strong");
    i0.ɵɵtext(5);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(6, "span");
    i0.ɵɵtext(7);
    i0.ɵɵpipe(8, "number");
    i0.ɵɵelementEnd()()()();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(5);
    i0.ɵɵtextInterpolate1(" ", ctx_r1.selectedFile.name, " ");
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind2(8, 2, ctx_r1.selectedFile.size / 1024 / 1024, "1.2-2"), " MB ");
} }
function AudioRecorderComponent_section_11_div_26_Template(rf, ctx) { if (rf & 1) {
    const _r6 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 28)(1, "div", 29);
    i0.ɵɵelement(2, "i", 52);
    i0.ɵɵelementStart(3, "h4");
    i0.ɵɵtext(4, "Audio Preview");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(5, "p", 15);
    i0.ɵɵtext(6, " Check the selected voice before uploading. ");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(7, "audio", 31);
    i0.ɵɵtext(8, " Your browser does not support audio playback. ");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(9, "div", 32)(10, "button", 33);
    i0.ɵɵlistener("click", function AudioRecorderComponent_section_11_div_26_Template_button_click_10_listener() { i0.ɵɵrestoreView(_r6); const ctx_r1 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r1.save()); });
    i0.ɵɵelement(11, "i", 34);
    i0.ɵɵtext(12);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(13, "button", 35);
    i0.ɵɵlistener("click", function AudioRecorderComponent_section_11_div_26_Template_button_click_13_listener() { i0.ɵɵrestoreView(_r6); const ctx_r1 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r1.discard()); });
    i0.ɵɵelement(14, "i", 53);
    i0.ɵɵtext(15, " Remove File ");
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(7);
    i0.ɵɵproperty("src", ctx_r1.previewUrl);
    i0.ɵɵattribute("aria-label", ctx_r1.label + " selected audio preview");
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("disabled", ctx_r1.busy);
    i0.ɵɵadvance();
    i0.ɵɵclassProp("fa-spinner", ctx_r1.converting || ctx_r1.uploading)("fa-spin", ctx_r1.converting || ctx_r1.uploading)("fa-cloud-arrow-up", !ctx_r1.converting && !ctx_r1.uploading);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", ctx_r1.converting ? "Converting to MP3..." : ctx_r1.uploading ? "Uploading..." : "Upload Audio", " ");
    i0.ɵɵadvance();
    i0.ɵɵproperty("disabled", ctx_r1.busy);
} }
function AudioRecorderComponent_section_11_Template(rf, ctx) { if (rf & 1) {
    const _r5 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "section", 39)(1, "div", 12)(2, "div", 13);
    i0.ɵɵelement(3, "i", 40);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "div")(5, "h4");
    i0.ɵɵtext(6);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(7, "p", 15);
    i0.ɵɵtext(8, " Select a saved audio file or drag and drop. ");
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(9, "div", 41);
    i0.ɵɵlistener("dragover", function AudioRecorderComponent_section_11_Template_div_dragover_9_listener($event) { i0.ɵɵrestoreView(_r5); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.onDragOver($event)); })("dragleave", function AudioRecorderComponent_section_11_Template_div_dragleave_9_listener($event) { i0.ɵɵrestoreView(_r5); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.onDragLeave($event)); })("drop", function AudioRecorderComponent_section_11_Template_div_drop_9_listener($event) { i0.ɵɵrestoreView(_r5); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.onDrop($event)); });
    i0.ɵɵelementStart(10, "div", 42);
    i0.ɵɵelement(11, "i", 5);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(12, "h4");
    i0.ɵɵtext(13, "Drag & Drop Audio Here");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(14, "p", 15);
    i0.ɵɵtext(15, " Or browse your device to select a file. ");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(16, "p", 43);
    i0.ɵɵtext(17, " MP3 / OGG / OGA / Opus ");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(18, "button", 44);
    i0.ɵɵlistener("click", function AudioRecorderComponent_section_11_Template_button_click_18_listener() { i0.ɵɵrestoreView(_r5); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.browse()); });
    i0.ɵɵelement(19, "i", 45);
    i0.ɵɵtext(20, " Browse Audio File ");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(21, "input", 46, 0);
    i0.ɵɵlistener("change", function AudioRecorderComponent_section_11_Template_input_change_21_listener($event) { i0.ɵɵrestoreView(_r5); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.onFileInput($event)); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(23, "p", 47);
    i0.ɵɵtext(24);
    i0.ɵɵelementEnd()();
    i0.ɵɵtemplate(25, AudioRecorderComponent_section_11_div_25_Template, 9, 5, "div", 48)(26, AudioRecorderComponent_section_11_div_26_Template, 16, 11, "div", 20);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance(6);
    i0.ɵɵtextInterpolate1("Upload ", ctx_r1.label, " Audio");
    i0.ɵɵadvance(3);
    i0.ɵɵclassProp("drag-active", ctx_r1.dragging)("has-file", ctx_r1.selectedFile)("is-disabled", ctx_r1.busy);
    i0.ɵɵadvance(9);
    i0.ɵɵproperty("disabled", ctx_r1.busy);
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("disabled", ctx_r1.busy);
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate1(" Maximum file size: ", ctx_r1.maxSizeMb, " MB ");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.selectedFile);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.previewUrl && ctx_r1.selectedFile);
} }
function AudioRecorderComponent_div_12_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 54);
    i0.ɵɵelement(1, "i", 55);
    i0.ɵɵelementStart(2, "span");
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate1(" ", ctx_r1.converting ? "Processing audio to MP3..." : "Uploading audio to the server...", " ");
} }
function AudioRecorderComponent_p_13_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p", 56);
    i0.ɵɵelement(1, "i", 57);
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1(" ", ctx_r1.status, " ");
} }
function AudioRecorderComponent_p_14_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p", 58);
    i0.ɵɵelement(1, "i", 59);
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1(" ", ctx_r1.error, " ");
} }
export class AudioRecorderComponent {
    api;
    mp3;
    // ========================================
    // INPUTS
    // ========================================
    language = 'ta';
    disabled = false;
    maxSizeMb = 20;
    // ========================================
    // OUTPUTS
    // ========================================
    uploaded = new EventEmitter();
    workingChange = new EventEmitter();
    // ========================================
    // FILE INPUT
    // ========================================
    fileInput;
    // ========================================
    // COMPONENT STATE
    // ========================================
    mode = 'record';
    recording = false;
    uploading = false;
    converting = false;
    dragging = false;
    previewUrl = '';
    selectedFile = null;
    error = '';
    status = '';
    // ========================================
    // PRIVATE RECORDING STATE
    // ========================================
    recorder;
    stream;
    recordingBlob;
    destroyed = false;
    working = false;
    stoppedBySwitch = false;
    // ========================================
    // CONSTRUCTOR
    // ========================================
    constructor(api, mp3) {
        this.api = api;
        this.mp3 = mp3;
    }
    // ========================================
    // LABEL
    // ========================================
    get label() {
        return this.language === 'ta' ? 'Tamil' : 'English';
    }
    get busy() {
        return (this.disabled ||
            this.uploading ||
            this.converting);
    }
    // ========================================
    // SWITCH AUDIO MODE
    // ========================================
    setMode(next) {
        if (next === this.mode ||
            this.busy ||
            this.recording) {
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
    async start() {
        if (this.mode !== 'record' ||
            this.recording ||
            this.busy) {
            return;
        }
        this.error = '';
        this.status = '';
        this.discard();
        this.stoppedBySwitch = false;
        if (typeof navigator === 'undefined' ||
            !navigator.mediaDevices?.getUserMedia ||
            typeof MediaRecorder === 'undefined') {
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
            if (this.destroyed ||
                this.mode !== 'record') {
                this.releaseMicrophone();
                return;
            }
            const formats = [
                'audio/mpeg',
                'audio/ogg;codecs=opus',
                'audio/webm;codecs=opus',
                'audio/webm'
            ];
            const supportedType = formats.find(type => MediaRecorder.isTypeSupported(type));
            const recorder = new MediaRecorder(this.stream, supportedType
                ? { mimeType: supportedType }
                : undefined);
            this.recorder = recorder;
            const parts = [];
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
                if (this.destroyed ||
                    this.stoppedBySwitch ||
                    this.mode !== 'record') {
                    return;
                }
                const blob = new Blob(parts, {
                    type: recorder.mimeType ||
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
        }
        catch (error) {
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
    stop() {
        if (this.recorder?.state === 'recording') {
            this.recorder.stop();
        }
    }
    // ========================================
    // OPEN FILE CHOOSER
    // ========================================
    browse() {
        if (this.busy ||
            this.mode !== 'upload') {
            return;
        }
        this.fileInput?.nativeElement.click();
    }
    // ========================================
    // FILE SELECTION
    // ========================================
    onFileInput(event) {
        const input = event.target;
        const file = input.files?.[0];
        if (file) {
            this.selectFile(file);
        }
        input.value = '';
    }
    // ========================================
    // DRAG AND DROP
    // ========================================
    onDragOver(event) {
        if (this.mode !== 'upload' ||
            this.busy) {
            return;
        }
        event.preventDefault();
        if (event.dataTransfer) {
            event.dataTransfer.dropEffect = 'copy';
        }
        this.dragging = true;
    }
    onDragLeave(event) {
        event.preventDefault();
        this.dragging = false;
    }
    onDrop(event) {
        event.preventDefault();
        this.dragging = false;
        if (this.mode !== 'upload' ||
            this.busy) {
            return;
        }
        const file = event.dataTransfer?.files?.[0];
        if (file) {
            this.selectFile(file);
        }
    }
    // ========================================
    // VALIDATE SELECTED AUDIO
    // ========================================
    selectFile(file) {
        this.error = '';
        this.status = '';
        const extension = file.name.split('.').pop()?.toLowerCase() || '';
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
        if (!file.size ||
            file.size > this.maxSizeMb * 1024 * 1024) {
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
    async save() {
        if (this.busy ||
            this.recording) {
            return;
        }
        if (this.mode === 'record' &&
            !this.recordingBlob) {
            this.error =
                'Please record and stop before saving.';
            return;
        }
        if (this.mode === 'upload' &&
            !this.selectedFile) {
            this.error =
                'Please select an audio file first.';
            return;
        }
        this.error = '';
        this.status = '';
        this.setWorking(true);
        try {
            let file;
            // ====================================
            // RECORDING MODE
            // ====================================
            if (this.mode === 'record') {
                const blob = this.recordingBlob;
                if (blob.type === 'audio/mpeg' ||
                    blob.type === 'audio/mp3') {
                    file = new File([blob], `makkal-valimai-${this.language}-${Date.now()}.mp3`, { type: 'audio/mpeg' });
                }
                else {
                    this.converting = true;
                    this.status =
                        'Converting recording to MP3...';
                    file = await this.mp3.convertToMp3(blob, this.language);
                }
            }
            else {
                // ==================================
                // EXISTING AUDIO FILE MODE
                // ==================================
                const chosen = this.selectedFile;
                if (/\.(ogg|oga|opus)$/i.test(chosen.name)) {
                    this.converting = true;
                    this.status =
                        'Converting OGG audio to MP3...';
                    file = await this.mp3.convertToMp3(chosen, this.language);
                }
                else {
                    file = new File([chosen], chosen.name, { type: 'audio/mpeg' });
                }
            }
            // ====================================
            // VERIFY CONVERTED FILE SIZE
            // ====================================
            if (file.size > this.maxSizeMb * 1024 * 1024) {
                throw new Error(`Audio exceeds ${this.maxSizeMb} MB.`);
            }
            if (this.destroyed)
                return;
            // ====================================
            // UPLOAD USING EXISTING API
            // ====================================
            this.converting = false;
            this.uploading = true;
            this.status = 'Uploading audio...';
            const response = await this.api.uploadMedia(file);
            if (response.kind !== 'audio' ||
                !response.url?.trim()) {
                throw new Error('The server did not return a valid audio URL.');
            }
            if (this.destroyed)
                return;
            // ====================================
            // NOTIFY PARENT
            // ====================================
            this.setWorking(false);
            this.uploaded.emit(response.url);
            this.status =
                `${this.label} audio uploaded. Save the article if applicable.`;
            this.discard();
        }
        catch (error) {
            this.error =
                error instanceof Error
                    ? error.message
                    : 'Audio upload failed.';
            this.status = '';
        }
        finally {
            this.converting = false;
            this.uploading = false;
            this.setWorking(false);
        }
    }
    // ========================================
    // REMOVE AUDIO PREVIEW
    // ========================================
    discard() {
        if (this.previewUrl) {
            URL.revokeObjectURL(this.previewUrl);
        }
        this.previewUrl = '';
        this.recordingBlob = undefined;
        this.selectedFile = null;
    }
    // ========================================
    // WORKING STATUS
    // ========================================
    setWorking(value) {
        if (this.working === value) {
            return;
        }
        this.working = value;
        this.workingChange.emit(value);
    }
    // ========================================
    // RELEASE MICROPHONE
    // ========================================
    releaseMicrophone() {
        this.stream?.getTracks().forEach(track => track.stop());
        this.stream = undefined;
    }
    // ========================================
    // DESTROY COMPONENT
    // ========================================
    ngOnDestroy() {
        this.destroyed = true;
        this.stoppedBySwitch = true;
        if (this.recorder?.state === 'recording') {
            this.recorder.stop();
        }
        this.releaseMicrophone();
        this.discard();
        this.setWorking(false);
    }
    static ɵfac = function AudioRecorderComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || AudioRecorderComponent)(i0.ɵɵdirectiveInject(i1.NewsApiService), i0.ɵɵdirectiveInject(i2.ClientMp3EncoderService)); };
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: AudioRecorderComponent, selectors: [["app-audio-recorder"]], viewQuery: function AudioRecorderComponent_Query(rf, ctx) { if (rf & 1) {
            i0.ɵɵviewQuery(_c0, 5);
        } if (rf & 2) {
            let _t;
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.fileInput = _t.first);
        } }, inputs: { language: "language", disabled: "disabled", maxSizeMb: "maxSizeMb" }, outputs: { uploaded: "uploaded", workingChange: "workingChange" }, decls: 15, vars: 14, consts: [["fileInput", ""], [1, "mv-audio-recorder"], ["role", "group", 1, "audio-mode-switch"], ["type", "button", 1, "audio-mode-btn", 3, "click", "disabled"], [1, "fa-solid", "fa-microphone"], [1, "fa-solid", "fa-cloud-arrow-up"], ["class", "audio-record-panel", 4, "ngIf"], ["class", "audio-file-panel", 4, "ngIf"], ["class", "audio-processing-status", "role", "status", 4, "ngIf"], ["class", "audio-status-message", "role", "status", 4, "ngIf"], ["class", "audio-error-message", "role", "alert", 4, "ngIf"], [1, "audio-record-panel"], [1, "audio-panel-heading"], [1, "audio-panel-icon"], [1, "fa-solid", "fa-microphone-lines"], [1, "muted"], ["class", "recording-indicator", "role", "status", 4, "ngIf"], [1, "audio-record-actions"], ["type", "button", "class", "audio-action-btn record-btn", 3, "disabled", "click", 4, "ngIf"], ["type", "button", "class", "audio-action-btn stop-btn", 3, "click", 4, "ngIf"], ["class", "audio-selected-preview", 4, "ngIf"], ["class", "audio-help-text", 4, "ngIf"], ["role", "status", 1, "recording-indicator"], [1, "recording-dot"], ["type", "button", 1, "audio-action-btn", "record-btn", 3, "click", "disabled"], [1, "fa-solid", "fa-circle"], ["type", "button", 1, "audio-action-btn", "stop-btn", 3, "click"], [1, "fa-solid", "fa-stop"], [1, "audio-selected-preview"], [1, "audio-preview-heading"], [1, "fa-solid", "fa-circle-play"], ["controls", "", "preload", "metadata", 3, "src"], [1, "audio-preview-actions"], ["type", "button", 1, "audio-action-btn", "save-btn", 3, "click", "disabled"], [1, "fa-solid"], ["type", "button", 1, "audio-action-btn", "discard-btn", 3, "click", "disabled"], [1, "fa-solid", "fa-trash"], [1, "audio-help-text"], [1, "fa-solid", "fa-circle-info"], [1, "audio-file-panel"], [1, "fa-solid", "fa-file-audio"], [1, "audio-drop-zone", 3, "dragover", "dragleave", "drop"], [1, "drop-zone-icon"], [1, "audio-supported-formats"], ["type", "button", 1, "audio-action-btn", "browse-btn", 3, "click", "disabled"], [1, "fa-solid", "fa-folder-open"], ["type", "file", "hidden", "", "accept", ".mp3,.ogg,.oga,.opus,audio/mpeg,audio/ogg,audio/opus", 3, "change", "disabled"], [1, "audio-file-limit"], ["class", "audio-selected-file", 4, "ngIf"], [1, "audio-selected-file"], [1, "selected-file-heading"], [1, "selected-file-info"], [1, "fa-solid", "fa-headphones"], [1, "fa-solid", "fa-xmark"], ["role", "status", 1, "audio-processing-status"], [1, "fa-solid", "fa-spinner", "fa-spin"], ["role", "status", 1, "audio-status-message"], [1, "fa-solid", "fa-circle-check"], ["role", "alert", 1, "audio-error-message"], [1, "fa-solid", "fa-circle-exclamation"]], template: function AudioRecorderComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "div", 1)(1, "div", 2)(2, "button", 3);
            i0.ɵɵlistener("click", function AudioRecorderComponent_Template_button_click_2_listener() { return ctx.setMode("record"); });
            i0.ɵɵelement(3, "i", 4);
            i0.ɵɵelementStart(4, "span");
            i0.ɵɵtext(5, "Record New Audio");
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(6, "button", 3);
            i0.ɵɵlistener("click", function AudioRecorderComponent_Template_button_click_6_listener() { return ctx.setMode("upload"); });
            i0.ɵɵelement(7, "i", 5);
            i0.ɵɵelementStart(8, "span");
            i0.ɵɵtext(9, "Select Audio File");
            i0.ɵɵelementEnd()()();
            i0.ɵɵtemplate(10, AudioRecorderComponent_section_10_Template, 15, 6, "section", 6)(11, AudioRecorderComponent_section_11_Template, 27, 12, "section", 7)(12, AudioRecorderComponent_div_12_Template, 4, 1, "div", 8)(13, AudioRecorderComponent_p_13_Template, 3, 1, "p", 9)(14, AudioRecorderComponent_p_14_Template, 3, 1, "p", 10);
            i0.ɵɵelementEnd();
        } if (rf & 2) {
            i0.ɵɵadvance();
            i0.ɵɵattribute("aria-label", ctx.label + " audio input mode");
            i0.ɵɵadvance();
            i0.ɵɵclassProp("active", ctx.mode === "record");
            i0.ɵɵproperty("disabled", ctx.busy || ctx.recording);
            i0.ɵɵattribute("aria-pressed", ctx.mode === "record");
            i0.ɵɵadvance(4);
            i0.ɵɵclassProp("active", ctx.mode === "upload");
            i0.ɵɵproperty("disabled", ctx.busy || ctx.recording);
            i0.ɵɵattribute("aria-pressed", ctx.mode === "upload");
            i0.ɵɵadvance(4);
            i0.ɵɵproperty("ngIf", ctx.mode === "record");
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", ctx.mode === "upload");
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", ctx.converting || ctx.uploading);
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", ctx.status && !ctx.error);
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", ctx.error);
        } }, dependencies: [CommonModule, i3.NgIf, i3.DecimalPipe], styles: ["\n\n\n\n\n\n\n[_nghost-%COMP%] {\n  display: block;\n  width: 100%;\n  min-width: 0;\n}\n\n.mv-audio-recorder[_ngcontent-%COMP%] {\n  --audio-blue: #124d83;\n  --audio-dark-blue: #0c355c;\n  --audio-light-blue: #eaf3fb;\n  --audio-red: #df2442;\n  --audio-border: #cbdceb;\n  --audio-text: #18344f;\n  --audio-muted: #65788c;\n\n  width: 100%;\n  min-width: 0;\n  color: var(--audio-text);\n  font-family: inherit;\n}\n\n.mv-audio-recorder[_ngcontent-%COMP%]   *[_ngcontent-%COMP%], \n.mv-audio-recorder[_ngcontent-%COMP%]   *[_ngcontent-%COMP%]::before, \n.mv-audio-recorder[_ngcontent-%COMP%]   *[_ngcontent-%COMP%]::after {\n  box-sizing: border-box;\n}\n\n\n\n\n\n\n.audio-mode-switch[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(2, minmax(0, 1fr));\n  gap: 6px;\n\n  padding: 6px;\n  margin-bottom: 22px;\n\n  background: #e9f1f9;\n  border: 1px solid var(--audio-border);\n  border-radius: 14px;\n}\n\n.audio-mode-btn[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n\n  gap: 10px;\n  min-width: 0;\n  min-height: 48px;\n  padding: 12px 14px;\n\n  border: 1px solid transparent;\n  border-radius: 10px;\n\n  background: transparent;\n  color: var(--audio-blue);\n\n  font: inherit;\n  font-size: 13px;\n  font-weight: 700;\n\n  cursor: pointer;\n  transition:\n    background 0.2s ease,\n    color 0.2s ease,\n    border-color 0.2s ease,\n    box-shadow 0.2s ease;\n}\n\n.audio-mode-btn[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 15px;\n  flex-shrink: 0;\n}\n\n.audio-mode-btn[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: #d6e7f6;\n}\n\n.audio-mode-btn.active[_ngcontent-%COMP%] {\n  background: var(--audio-blue);\n  border-color: var(--audio-blue);\n  color: #fff;\n  box-shadow: 0 4px 12px rgba(12, 53, 92, 0.16);\n}\n\n.audio-mode-btn[_ngcontent-%COMP%]:disabled {\n  cursor: not-allowed;\n  opacity: 0.55;\n}\n\n.audio-mode-btn[_ngcontent-%COMP%]:focus-visible, \n.audio-action-btn[_ngcontent-%COMP%]:focus-visible {\n  outline: 3px solid #f1a8b4;\n  outline-offset: 3px;\n}\n\n\n\n\n\n\n.audio-record-panel[_ngcontent-%COMP%], \n.audio-file-panel[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 22px;\n\n  background: linear-gradient(\n    145deg,\n    #ffffff 0%,\n    #f0f6fc 100%\n  );\n\n  border: 1px solid var(--audio-border);\n  border-radius: 16px;\n}\n\n\n\n\n\n\n.audio-panel-heading[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 13px;\n\n  margin-bottom: 22px;\n}\n\n.audio-panel-icon[_ngcontent-%COMP%] {\n  width: 46px;\n  height: 46px;\n  flex-shrink: 0;\n\n  display: flex;\n  align-items: center;\n  justify-content: center;\n\n  background: var(--audio-light-blue);\n  border: 1px solid #c9deef;\n  border-radius: 12px;\n\n  color: var(--audio-blue);\n  font-size: 19px;\n}\n\n.audio-panel-heading[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  margin: 0 0 5px;\n\n  color: var(--audio-dark-blue);\n  font-size: 16px;\n  font-weight: 800;\n  line-height: 1.4;\n}\n\n.audio-panel-heading[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n\n  color: var(--audio-muted);\n  font-size: 12px;\n  line-height: 1.5;\n}\n\n\n\n\n\n\n.recording-indicator[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 10px;\n\n  margin-bottom: 18px;\n  padding: 10px 15px;\n\n  background: #fff0f2;\n  border: 1px solid #ffd0d8;\n  border-radius: 30px;\n\n  color: #b91834;\n  font-size: 13px;\n  font-weight: 700;\n}\n\n.recording-dot[_ngcontent-%COMP%] {\n  display: block;\n  width: 10px;\n  height: 10px;\n  flex-shrink: 0;\n\n  background: var(--audio-red);\n  border-radius: 50%;\n\n  animation: _ngcontent-%COMP%_mv-recording-pulse 1.3s ease-in-out infinite;\n}\n\n@keyframes _ngcontent-%COMP%_mv-recording-pulse {\n  0%, 100% {\n    opacity: 1;\n    box-shadow: 0 0 0 0 rgba(223, 36, 66, 0.3);\n  }\n\n  50% {\n    opacity: 0.6;\n    box-shadow: 0 0 0 7px rgba(223, 36, 66, 0);\n  }\n}\n\n\n\n\n\n\n.audio-record-actions[_ngcontent-%COMP%], \n.audio-preview-actions[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  align-items: center;\n  gap: 12px;\n}\n\n.audio-action-btn[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  gap: 9px;\n\n  min-height: 45px;\n  padding: 12px 18px;\n\n  border: 1px solid transparent;\n  border-radius: 10px;\n\n  font: inherit;\n  font-size: 13px;\n  font-weight: 700;\n  line-height: 1.3;\n  text-align: center;\n\n  cursor: pointer;\n  transition:\n    background 0.2s ease,\n    border-color 0.2s ease,\n    transform 0.2s ease,\n    box-shadow 0.2s ease;\n}\n\n.audio-action-btn[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 14px;\n}\n\n.audio-action-btn[_ngcontent-%COMP%]:hover:not(:disabled) {\n  transform: translateY(-1px);\n}\n\n.audio-action-btn[_ngcontent-%COMP%]:disabled {\n  opacity: 0.55;\n  cursor: not-allowed;\n  transform: none;\n}\n\n\n\n\n.record-btn[_ngcontent-%COMP%] {\n  background: var(--audio-red);\n  color: #fff;\n  box-shadow: 0 5px 14px rgba(223, 36, 66, 0.18);\n}\n\n.record-btn[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: #bf1935;\n}\n\n\n\n\n.stop-btn[_ngcontent-%COMP%] {\n  background: #a71932;\n  color: #fff;\n}\n\n.stop-btn[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: #87132a;\n}\n\n\n\n\n.save-btn[_ngcontent-%COMP%] {\n  background: var(--audio-blue);\n  color: #fff;\n}\n\n.save-btn[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: var(--audio-dark-blue);\n}\n\n\n\n\n.discard-btn[_ngcontent-%COMP%] {\n  background: #fff;\n  color: #b4233d;\n  border-color: #e9b5c0;\n}\n\n.discard-btn[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: #fff0f3;\n}\n\n\n\n\n.browse-btn[_ngcontent-%COMP%] {\n  background: var(--audio-blue);\n  color: #fff;\n}\n\n.browse-btn[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: var(--audio-dark-blue);\n}\n\n\n\n\n\n\n.audio-help-text[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  gap: 9px;\n\n  margin: 18px 0 0;\n\n  color: var(--audio-muted);\n  font-size: 12px;\n  line-height: 1.7;\n}\n\n.audio-help-text[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  margin-top: 3px;\n  color: var(--audio-blue);\n}\n\n\n\n\n\n\n.audio-drop-zone[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n\n  gap: 11px;\n  min-height: 260px;\n  padding: 28px 20px;\n\n  background: #f5faff;\n  border: 2px dashed #99b9d5;\n  border-radius: 15px;\n\n  text-align: center;\n\n  transition:\n    background 0.2s ease,\n    border-color 0.2s ease,\n    box-shadow 0.2s ease;\n}\n\n.audio-drop-zone.drag-active[_ngcontent-%COMP%] {\n  background: #dcecfb;\n  border-color: var(--audio-blue);\n  box-shadow: inset 0 0 0 2px rgba(18, 77, 131, 0.09);\n}\n\n.audio-drop-zone.has-file[_ngcontent-%COMP%] {\n  background: #edf7f4;\n  border-color: #5aa68f;\n}\n\n.audio-drop-zone.is-disabled[_ngcontent-%COMP%] {\n  opacity: 0.65;\n  cursor: not-allowed;\n}\n\n.drop-zone-icon[_ngcontent-%COMP%] {\n  width: 62px;\n  height: 62px;\n\n  display: flex;\n  align-items: center;\n  justify-content: center;\n\n  background: #e2eef8;\n  border-radius: 17px;\n\n  color: var(--audio-blue);\n  font-size: 27px;\n}\n\n.audio-drop-zone[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  margin: 0;\n\n  color: var(--audio-dark-blue);\n  font-size: 16px;\n  font-weight: 800;\n}\n\n.audio-drop-zone[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 12px;\n  line-height: 1.6;\n}\n\n.audio-supported-formats[_ngcontent-%COMP%] {\n  padding: 6px 12px;\n\n  background: #e4eff9;\n  border-radius: 30px;\n\n  color: var(--audio-blue);\n  font-size: 11px !important;\n  font-weight: 700;\n}\n\n.audio-file-limit[_ngcontent-%COMP%] {\n  color: var(--audio-muted);\n  font-size: 11px !important;\n}\n\n\n\n\n\n\n.audio-selected-file[_ngcontent-%COMP%] {\n  margin-top: 18px;\n  padding: 14px;\n\n  background: #edf4fb;\n  border: 1px solid var(--audio-border);\n  border-radius: 12px;\n}\n\n.selected-file-heading[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n}\n\n.selected-file-heading[_ngcontent-%COMP%]    > i[_ngcontent-%COMP%] {\n  color: var(--audio-blue);\n  font-size: 23px;\n}\n\n.selected-file-info[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n\n  min-width: 0;\n}\n\n.selected-file-info[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  color: var(--audio-dark-blue);\n  font-size: 13px;\n  overflow-wrap: anywhere;\n}\n\n.selected-file-info[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: var(--audio-muted);\n  font-size: 12px;\n}\n\n\n\n\n\n\n.audio-selected-preview[_ngcontent-%COMP%] {\n  margin-top: 20px;\n  padding: 18px;\n\n  background: #fff;\n  border: 1px solid var(--audio-border);\n  border-radius: 13px;\n}\n\n.audio-preview-heading[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n}\n\n.audio-preview-heading[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: var(--audio-blue);\n  font-size: 18px;\n}\n\n.audio-preview-heading[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  margin: 0;\n\n  color: var(--audio-dark-blue);\n  font-size: 14px;\n  font-weight: 800;\n}\n\n.audio-selected-preview[_ngcontent-%COMP%]    > p[_ngcontent-%COMP%] {\n  margin: 10px 0 15px;\n\n  color: var(--audio-muted);\n  font-size: 12px;\n}\n\n.audio-selected-preview[_ngcontent-%COMP%]   audio[_ngcontent-%COMP%] {\n  display: block;\n  width: 100%;\n  max-width: 100%;\n  height: 45px;\n  margin-bottom: 17px;\n}\n\n\n\n\n\n\n.audio-processing-status[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n\n  margin-top: 15px;\n  padding: 13px 15px;\n\n  background: #e7f2ff;\n  border: 1px solid #b8d8f5;\n  border-radius: 11px;\n\n  color: var(--audio-dark-blue);\n  font-size: 12px;\n  font-weight: 700;\n}\n\n\n\n\n\n\n.audio-status-message[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  gap: 9px;\n\n  margin: 15px 0 0;\n  padding: 13px 15px;\n\n  background: #edf8f2;\n  border: 1px solid #b6ddc7;\n  border-radius: 11px;\n\n  color: #176341;\n  font-size: 12px;\n  line-height: 1.6;\n}\n\n.audio-status-message[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  margin-top: 2px;\n  flex-shrink: 0;\n}\n\n\n\n\n\n\n.audio-error-message[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  gap: 9px;\n\n  margin: 15px 0 0;\n  padding: 13px 15px;\n\n  background: #fff0f2;\n  border: 1px solid #f0b6c0;\n  border-radius: 11px;\n\n  color: #ab1933;\n  font-size: 12px;\n  line-height: 1.6;\n}\n\n.audio-error-message[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  margin-top: 2px;\n  flex-shrink: 0;\n}\n\n\n\n\n\n\n@media (prefers-reduced-motion: reduce) {\n  .mv-audio-recorder[_ngcontent-%COMP%]   *[_ngcontent-%COMP%], \n   .mv-audio-recorder[_ngcontent-%COMP%]   *[_ngcontent-%COMP%]::before, \n   .mv-audio-recorder[_ngcontent-%COMP%]   *[_ngcontent-%COMP%]::after {\n    animation-duration: 0.01ms !important;\n    transition-duration: 0.01ms !important;\n  }\n}", "\n\n\n\n\n\n\n\n\n\n\n\n@media (max-width: 1024px) {\n\n  .mv-audio-recorder[_ngcontent-%COMP%] {\n    width: 100%;\n    min-width: 0;\n  }\n\n  .audio-record-panel[_ngcontent-%COMP%], \n   .audio-file-panel[_ngcontent-%COMP%] {\n    padding: 18px;\n  }\n\n  .audio-mode-btn[_ngcontent-%COMP%] {\n    font-size: 12px;\n    padding: 12px 10px;\n    gap: 7px;\n  }\n\n  .audio-drop-zone[_ngcontent-%COMP%] {\n    min-height: 230px;\n    padding: 24px 18px;\n  }\n\n  .audio-selected-preview[_ngcontent-%COMP%] {\n    padding: 16px;\n  }\n\n}\n\n\n\n\n\n\n@media (max-width: 768px) {\n\n  [_nghost-%COMP%] {\n    display: block;\n    width: 100%;\n    min-width: 0;\n  }\n\n  .mv-audio-recorder[_ngcontent-%COMP%] {\n    width: 100%;\n    max-width: 100%;\n    min-width: 0;\n    overflow-wrap: anywhere;\n  }\n\n  \n\n\n  .audio-mode-switch[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(2, minmax(0, 1fr));\n    gap: 5px;\n    padding: 5px;\n    margin-bottom: 16px;\n    border-radius: 12px;\n  }\n\n  .audio-mode-btn[_ngcontent-%COMP%] {\n    min-height: 50px;\n    padding: 10px 7px;\n    gap: 6px;\n    font-size: 11px;\n    line-height: 1.3;\n    border-radius: 9px;\n  }\n\n  .audio-mode-btn[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n    font-size: 14px;\n  }\n\n  .audio-mode-btn[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n    min-width: 0;\n    overflow-wrap: anywhere;\n  }\n\n  \n\n\n  .audio-record-panel[_ngcontent-%COMP%], \n   .audio-file-panel[_ngcontent-%COMP%] {\n    width: 100%;\n    padding: 15px;\n    border-radius: 12px;\n  }\n\n  \n\n\n  .audio-panel-heading[_ngcontent-%COMP%] {\n    gap: 10px;\n    margin-bottom: 17px;\n  }\n\n  .audio-panel-icon[_ngcontent-%COMP%] {\n    width: 40px;\n    height: 40px;\n    border-radius: 10px;\n    font-size: 16px;\n  }\n\n  .audio-panel-heading[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n    font-size: 14px;\n    margin-bottom: 4px;\n  }\n\n  .audio-panel-heading[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    font-size: 11px;\n  }\n\n  \n\n\n  .recording-indicator[_ngcontent-%COMP%] {\n    width: 100%;\n    justify-content: center;\n    padding: 10px;\n    font-size: 12px;\n    margin-bottom: 15px;\n  }\n\n  \n\n\n  .audio-record-actions[_ngcontent-%COMP%], \n   .audio-preview-actions[_ngcontent-%COMP%] {\n    display: flex;\n    flex-direction: column;\n    align-items: stretch;\n    width: 100%;\n    gap: 10px;\n  }\n\n  .audio-action-btn[_ngcontent-%COMP%] {\n    width: 100%;\n    min-height: 48px;\n    padding: 12px;\n    font-size: 12px;\n  }\n\n  \n\n\n  .audio-drop-zone[_ngcontent-%COMP%] {\n    width: 100%;\n    min-height: 220px;\n    padding: 22px 12px;\n    gap: 9px;\n    border-radius: 12px;\n  }\n\n  .drop-zone-icon[_ngcontent-%COMP%] {\n    width: 54px;\n    height: 54px;\n    border-radius: 14px;\n    font-size: 23px;\n  }\n\n  .audio-drop-zone[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n    font-size: 14px;\n  }\n\n  .audio-drop-zone[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    font-size: 11px;\n  }\n\n  .audio-supported-formats[_ngcontent-%COMP%] {\n    font-size: 10px !important;\n  }\n\n  .audio-file-limit[_ngcontent-%COMP%] {\n    font-size: 10px !important;\n  }\n\n  \n\n\n  .audio-selected-file[_ngcontent-%COMP%] {\n    margin-top: 15px;\n    padding: 12px;\n  }\n\n  .selected-file-heading[_ngcontent-%COMP%] {\n    gap: 10px;\n  }\n\n  .selected-file-heading[_ngcontent-%COMP%]    > i[_ngcontent-%COMP%] {\n    font-size: 20px;\n  }\n\n  .selected-file-info[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n    font-size: 12px;\n  }\n\n  .selected-file-info[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n    font-size: 11px;\n  }\n\n  \n\n\n  .audio-selected-preview[_ngcontent-%COMP%] {\n    margin-top: 16px;\n    padding: 13px;\n    border-radius: 11px;\n  }\n\n  .audio-preview-heading[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n    font-size: 13px;\n  }\n\n  .audio-selected-preview[_ngcontent-%COMP%]    > p[_ngcontent-%COMP%] {\n    font-size: 11px;\n  }\n\n  .audio-selected-preview[_ngcontent-%COMP%]   audio[_ngcontent-%COMP%] {\n    width: 100%;\n    min-width: 0;\n    height: 44px;\n  }\n\n  \n\n\n  .audio-processing-status[_ngcontent-%COMP%], \n   .audio-status-message[_ngcontent-%COMP%], \n   .audio-error-message[_ngcontent-%COMP%] {\n    width: 100%;\n    padding: 12px;\n    font-size: 11px;\n    border-radius: 10px;\n  }\n\n  .audio-help-text[_ngcontent-%COMP%] {\n    font-size: 11px;\n    line-height: 1.6;\n  }\n\n}\n\n\n\n\n\n\n@media (max-width: 480px) {\n\n  .audio-mode-switch[_ngcontent-%COMP%] {\n    gap: 4px;\n    padding: 4px;\n  }\n\n  .audio-mode-btn[_ngcontent-%COMP%] {\n    min-height: 52px;\n    padding: 9px 5px;\n    font-size: 10px;\n    gap: 5px;\n  }\n\n  .audio-mode-btn[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n    font-size: 13px;\n  }\n\n  .audio-record-panel[_ngcontent-%COMP%], \n   .audio-file-panel[_ngcontent-%COMP%] {\n    padding: 12px;\n  }\n\n  .audio-panel-heading[_ngcontent-%COMP%] {\n    align-items: flex-start;\n  }\n\n  .audio-panel-icon[_ngcontent-%COMP%] {\n    width: 36px;\n    height: 36px;\n    font-size: 15px;\n  }\n\n  .audio-panel-heading[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n    font-size: 13px;\n  }\n\n  .audio-drop-zone[_ngcontent-%COMP%] {\n    min-height: 205px;\n    padding: 18px 10px;\n  }\n\n  .audio-action-btn[_ngcontent-%COMP%] {\n    min-height: 48px;\n    font-size: 11px;\n  }\n\n}\n\n\n\n\n\n\n@media (max-width: 360px) {\n\n  .audio-mode-btn[_ngcontent-%COMP%] {\n    flex-direction: column;\n    gap: 4px;\n    min-height: 58px;\n    font-size: 10px;\n    text-align: center;\n  }\n\n  .audio-mode-btn[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n    font-size: 15px;\n  }\n\n  .audio-record-panel[_ngcontent-%COMP%], \n   .audio-file-panel[_ngcontent-%COMP%] {\n    padding: 10px;\n  }\n\n  .audio-drop-zone[_ngcontent-%COMP%] {\n    padding: 16px 8px;\n  }\n\n  .audio-drop-zone[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n    font-size: 12px;\n  }\n\n}\n\n\n\n\n\n\n@media (hover: none) and (pointer: coarse) {\n\n  .audio-mode-btn[_ngcontent-%COMP%], \n   .audio-action-btn[_ngcontent-%COMP%] {\n    min-height: 48px;\n  }\n\n  .audio-action-btn[_ngcontent-%COMP%]:hover:not(:disabled) {\n    transform: none;\n  }\n\n}\n\n\n\n\n\n\n@media (max-width: 900px) and (orientation: landscape) {\n\n  .audio-drop-zone[_ngcontent-%COMP%] {\n    min-height: 170px;\n  }\n\n  .audio-record-panel[_ngcontent-%COMP%], \n   .audio-file-panel[_ngcontent-%COMP%] {\n    padding: 14px;\n  }\n\n}"] });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(AudioRecorderComponent, [{
        type: Component,
        args: [{ selector: 'app-audio-recorder', standalone: true, imports: [CommonModule], template: "\n<!-- ==========================================\n     MAKKAL VALIMAI\n     REUSABLE AUDIO RECORDER\n     TAMIL + ENGLISH\n     RECORD / DRAG & DROP / UPLOAD\n========================================== -->\n\n<div class=\"mv-audio-recorder\">\n\n  <!-- =====================================\n       MODE SELECTION\n  ====================================== -->\n\n  <div\n    class=\"audio-mode-switch\"\n    role=\"group\"\n    [attr.aria-label]=\"label + ' audio input mode'\"\n  >\n\n    <!-- RECORD MODE -->\n\n    <button\n      type=\"button\"\n      class=\"audio-mode-btn\"\n      [class.active]=\"mode === 'record'\"\n      [attr.aria-pressed]=\"mode === 'record'\"\n      [disabled]=\"busy || recording\"\n      (click)=\"setMode('record')\"\n    >\n      <i class=\"fa-solid fa-microphone\"></i>\n      <span>Record New Audio</span>\n    </button>\n\n    <!-- FILE UPLOAD MODE -->\n\n    <button\n      type=\"button\"\n      class=\"audio-mode-btn\"\n      [class.active]=\"mode === 'upload'\"\n      [attr.aria-pressed]=\"mode === 'upload'\"\n      [disabled]=\"busy || recording\"\n      (click)=\"setMode('upload')\"\n    >\n      <i class=\"fa-solid fa-cloud-arrow-up\"></i>\n      <span>Select Audio File</span>\n    </button>\n\n  </div>\n\n\n  <!-- =====================================\n       RECORD NEW AUDIO\n  ====================================== -->\n\n  <section\n    *ngIf=\"mode === 'record'\"\n    class=\"audio-record-panel\"\n  >\n\n    <div class=\"audio-panel-heading\">\n\n      <div class=\"audio-panel-icon\">\n        <i class=\"fa-solid fa-microphone-lines\"></i>\n      </div>\n\n      <div>\n        <h4>Record {{ label }} Voice</h4>\n\n        <p class=\"muted\">\n          Record directly using your microphone.\n        </p>\n      </div>\n\n    </div>\n\n\n    <!-- RECORDING INDICATOR -->\n\n    <div\n      *ngIf=\"recording\"\n      class=\"recording-indicator\"\n      role=\"status\"\n    >\n      <span class=\"recording-dot\"></span>\n\n      <span>\n        Recording in progress...\n      </span>\n    </div>\n\n\n    <!-- RECORDING BUTTONS -->\n\n    <div class=\"audio-record-actions\">\n\n      <!-- START -->\n\n      <button\n        *ngIf=\"!recording\"\n        type=\"button\"\n        class=\"audio-action-btn record-btn\"\n        [disabled]=\"busy\"\n        (click)=\"start()\"\n      >\n        <i class=\"fa-solid fa-circle\"></i>\n        Start Recording\n      </button>\n\n\n      <!-- STOP -->\n\n      <button\n        *ngIf=\"recording\"\n        type=\"button\"\n        class=\"audio-action-btn stop-btn\"\n        (click)=\"stop()\"\n      >\n        <i class=\"fa-solid fa-stop\"></i>\n        Stop Recording\n      </button>\n\n    </div>\n\n\n    <!-- RECORDING PREVIEW -->\n\n    <div\n      *ngIf=\"previewUrl && !recording\"\n      class=\"audio-selected-preview\"\n    >\n\n      <div class=\"audio-preview-heading\">\n\n        <i class=\"fa-solid fa-circle-play\"></i>\n\n        <h4>Recording Preview</h4>\n\n      </div>\n\n      <p class=\"muted\">\n        Listen to your recording before saving.\n      </p>\n\n      <audio\n        controls\n        preload=\"metadata\"\n        [src]=\"previewUrl\"\n        [attr.aria-label]=\"label + ' recording preview'\"\n      >\n        Your browser does not support audio playback.\n      </audio>\n\n\n      <!-- SAVE / DISCARD -->\n\n      <div class=\"audio-preview-actions\">\n\n        <button\n          type=\"button\"\n          class=\"audio-action-btn save-btn\"\n          [disabled]=\"busy\"\n          (click)=\"save()\"\n        >\n          <i\n            class=\"fa-solid\"\n            [class.fa-spinner]=\"converting || uploading\"\n            [class.fa-spin]=\"converting || uploading\"\n            [class.fa-floppy-disk]=\"!converting && !uploading\"\n          ></i>\n\n          {{\n            converting\n              ? 'Converting to MP3...'\n              : uploading\n                ? 'Uploading...'\n                : 'Save Recording'\n          }}\n        </button>\n\n        <button\n          type=\"button\"\n          class=\"audio-action-btn discard-btn\"\n          [disabled]=\"busy\"\n          (click)=\"discard()\"\n        >\n          <i class=\"fa-solid fa-trash\"></i>\n          Discard\n        </button>\n\n      </div>\n\n    </div>\n\n\n    <!-- RECORDING INSTRUCTIONS -->\n\n    <p\n      *ngIf=\"!recording && !previewUrl\"\n      class=\"audio-help-text\"\n    >\n      <i class=\"fa-solid fa-circle-info\"></i>\n      Click Start Recording, speak into your\n      microphone, then Stop and Preview.\n    </p>\n\n  </section>\n\n\n  <!-- =====================================\n       SELECT EXISTING AUDIO FILE\n  ====================================== -->\n\n  <section\n    *ngIf=\"mode === 'upload'\"\n    class=\"audio-file-panel\"\n  >\n\n    <div class=\"audio-panel-heading\">\n\n      <div class=\"audio-panel-icon\">\n        <i class=\"fa-solid fa-file-audio\"></i>\n      </div>\n\n      <div>\n\n        <h4>Upload {{ label }} Audio</h4>\n\n        <p class=\"muted\">\n          Select a saved audio file or drag and drop.\n        </p>\n\n      </div>\n\n    </div>\n\n\n    <!-- DRAG AND DROP AREA -->\n\n    <div\n      class=\"audio-drop-zone\"\n      [class.drag-active]=\"dragging\"\n      [class.has-file]=\"selectedFile\"\n      [class.is-disabled]=\"busy\"\n      (dragover)=\"onDragOver($event)\"\n      (dragleave)=\"onDragLeave($event)\"\n      (drop)=\"onDrop($event)\"\n    >\n\n      <div class=\"drop-zone-icon\">\n        <i class=\"fa-solid fa-cloud-arrow-up\"></i>\n      </div>\n\n      <h4>Drag & Drop Audio Here</h4>\n\n      <p class=\"muted\">\n        Or browse your device to select a file.\n      </p>\n\n      <p class=\"audio-supported-formats\">\n        MP3 / OGG / OGA / Opus\n      </p>\n\n\n      <!-- FILE BROWSE BUTTON -->\n\n      <button\n        type=\"button\"\n        class=\"audio-action-btn browse-btn\"\n        [disabled]=\"busy\"\n        (click)=\"browse()\"\n      >\n        <i class=\"fa-solid fa-folder-open\"></i>\n        Browse Audio File\n      </button>\n\n\n      <!-- HIDDEN FILE INPUT -->\n\n      <input\n        #fileInput\n        type=\"file\"\n        hidden\n        accept=\".mp3,.ogg,.oga,.opus,audio/mpeg,audio/ogg,audio/opus\"\n        [disabled]=\"busy\"\n        (change)=\"onFileInput($event)\"\n      />\n\n      <p class=\"audio-file-limit\">\n        Maximum file size: {{ maxSizeMb }} MB\n      </p>\n\n    </div>\n\n\n    <!-- SELECTED FILE DETAILS -->\n\n    <div\n      *ngIf=\"selectedFile\"\n      class=\"audio-selected-file\"\n    >\n\n      <div class=\"selected-file-heading\">\n\n        <i class=\"fa-solid fa-file-audio\"></i>\n\n        <div class=\"selected-file-info\">\n\n          <strong>\n            {{ selectedFile.name }}\n          </strong>\n\n          <span>\n            {{ (selectedFile.size / 1024 / 1024)\n                | number:'1.2-2' }} MB\n          </span>\n\n        </div>\n\n      </div>\n\n    </div>\n\n\n    <!-- AUDIO FILE PREVIEW -->\n\n    <div\n      *ngIf=\"previewUrl && selectedFile\"\n      class=\"audio-selected-preview\"\n    >\n\n      <div class=\"audio-preview-heading\">\n\n        <i class=\"fa-solid fa-headphones\"></i>\n\n        <h4>Audio Preview</h4>\n\n      </div>\n\n      <p class=\"muted\">\n        Check the selected voice before uploading.\n      </p>\n\n      <audio\n        controls\n        preload=\"metadata\"\n        [src]=\"previewUrl\"\n        [attr.aria-label]=\"label + ' selected audio preview'\"\n      >\n        Your browser does not support audio playback.\n      </audio>\n\n\n      <!-- UPLOAD / REMOVE -->\n\n      <div class=\"audio-preview-actions\">\n\n        <button\n          type=\"button\"\n          class=\"audio-action-btn save-btn\"\n          [disabled]=\"busy\"\n          (click)=\"save()\"\n        >\n\n          <i\n            class=\"fa-solid\"\n            [class.fa-spinner]=\"converting || uploading\"\n            [class.fa-spin]=\"converting || uploading\"\n            [class.fa-cloud-arrow-up]=\"!converting && !uploading\"\n          ></i>\n\n          {{\n            converting\n              ? 'Converting to MP3...'\n              : uploading\n                ? 'Uploading...'\n                : 'Upload Audio'\n          }}\n\n        </button>\n\n        <button\n          type=\"button\"\n          class=\"audio-action-btn discard-btn\"\n          [disabled]=\"busy\"\n          (click)=\"discard()\"\n        >\n          <i class=\"fa-solid fa-xmark\"></i>\n          Remove File\n        </button>\n\n      </div>\n\n    </div>\n\n  </section>\n\n\n  <!-- =====================================\n       PROCESSING STATUS\n  ====================================== -->\n\n  <div\n    *ngIf=\"converting || uploading\"\n    class=\"audio-processing-status\"\n    role=\"status\"\n  >\n\n    <i class=\"fa-solid fa-spinner fa-spin\"></i>\n\n    <span>\n      {{\n        converting\n          ? 'Processing audio to MP3...'\n          : 'Uploading audio to the server...'\n      }}\n    </span>\n\n  </div>\n\n\n  <!-- =====================================\n       SUCCESS / INFORMATION\n  ====================================== -->\n\n  <p\n    *ngIf=\"status && !error\"\n    class=\"audio-status-message\"\n    role=\"status\"\n  >\n    <i class=\"fa-solid fa-circle-check\"></i>\n    {{ status }}\n  </p>\n\n\n  <!-- =====================================\n       ERROR MESSAGE\n  ====================================== -->\n\n  <p\n    *ngIf=\"error\"\n    class=\"audio-error-message\"\n    role=\"alert\"\n  >\n    <i class=\"fa-solid fa-circle-exclamation\"></i>\n    {{ error }}\n  </p>\n\n</div>\n", styles: ["\n/* ==========================================\n   MAKKAL VALIMAI\n   AUDIO RECORDER \u2014 DESKTOP STYLES\n   Medium Blue + Red Theme\n========================================== */\n\n:host {\n  display: block;\n  width: 100%;\n  min-width: 0;\n}\n\n.mv-audio-recorder {\n  --audio-blue: #124d83;\n  --audio-dark-blue: #0c355c;\n  --audio-light-blue: #eaf3fb;\n  --audio-red: #df2442;\n  --audio-border: #cbdceb;\n  --audio-text: #18344f;\n  --audio-muted: #65788c;\n\n  width: 100%;\n  min-width: 0;\n  color: var(--audio-text);\n  font-family: inherit;\n}\n\n.mv-audio-recorder *,\n.mv-audio-recorder *::before,\n.mv-audio-recorder *::after {\n  box-sizing: border-box;\n}\n\n/* ==========================================\n   1. RECORD / UPLOAD MODE SWITCH\n========================================== */\n\n.audio-mode-switch {\n  display: grid;\n  grid-template-columns: repeat(2, minmax(0, 1fr));\n  gap: 6px;\n\n  padding: 6px;\n  margin-bottom: 22px;\n\n  background: #e9f1f9;\n  border: 1px solid var(--audio-border);\n  border-radius: 14px;\n}\n\n.audio-mode-btn {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n\n  gap: 10px;\n  min-width: 0;\n  min-height: 48px;\n  padding: 12px 14px;\n\n  border: 1px solid transparent;\n  border-radius: 10px;\n\n  background: transparent;\n  color: var(--audio-blue);\n\n  font: inherit;\n  font-size: 13px;\n  font-weight: 700;\n\n  cursor: pointer;\n  transition:\n    background 0.2s ease,\n    color 0.2s ease,\n    border-color 0.2s ease,\n    box-shadow 0.2s ease;\n}\n\n.audio-mode-btn i {\n  font-size: 15px;\n  flex-shrink: 0;\n}\n\n.audio-mode-btn:hover:not(:disabled) {\n  background: #d6e7f6;\n}\n\n.audio-mode-btn.active {\n  background: var(--audio-blue);\n  border-color: var(--audio-blue);\n  color: #fff;\n  box-shadow: 0 4px 12px rgba(12, 53, 92, 0.16);\n}\n\n.audio-mode-btn:disabled {\n  cursor: not-allowed;\n  opacity: 0.55;\n}\n\n.audio-mode-btn:focus-visible,\n.audio-action-btn:focus-visible {\n  outline: 3px solid #f1a8b4;\n  outline-offset: 3px;\n}\n\n/* ==========================================\n   2. RECORD / FILE PANELS\n========================================== */\n\n.audio-record-panel,\n.audio-file-panel {\n  width: 100%;\n  padding: 22px;\n\n  background: linear-gradient(\n    145deg,\n    #ffffff 0%,\n    #f0f6fc 100%\n  );\n\n  border: 1px solid var(--audio-border);\n  border-radius: 16px;\n}\n\n/* ==========================================\n   3. PANEL HEADING\n========================================== */\n\n.audio-panel-heading {\n  display: flex;\n  align-items: center;\n  gap: 13px;\n\n  margin-bottom: 22px;\n}\n\n.audio-panel-icon {\n  width: 46px;\n  height: 46px;\n  flex-shrink: 0;\n\n  display: flex;\n  align-items: center;\n  justify-content: center;\n\n  background: var(--audio-light-blue);\n  border: 1px solid #c9deef;\n  border-radius: 12px;\n\n  color: var(--audio-blue);\n  font-size: 19px;\n}\n\n.audio-panel-heading h4 {\n  margin: 0 0 5px;\n\n  color: var(--audio-dark-blue);\n  font-size: 16px;\n  font-weight: 800;\n  line-height: 1.4;\n}\n\n.audio-panel-heading p {\n  margin: 0;\n\n  color: var(--audio-muted);\n  font-size: 12px;\n  line-height: 1.5;\n}\n\n/* ==========================================\n   4. RECORDING INDICATOR\n========================================== */\n\n.recording-indicator {\n  display: inline-flex;\n  align-items: center;\n  gap: 10px;\n\n  margin-bottom: 18px;\n  padding: 10px 15px;\n\n  background: #fff0f2;\n  border: 1px solid #ffd0d8;\n  border-radius: 30px;\n\n  color: #b91834;\n  font-size: 13px;\n  font-weight: 700;\n}\n\n.recording-dot {\n  display: block;\n  width: 10px;\n  height: 10px;\n  flex-shrink: 0;\n\n  background: var(--audio-red);\n  border-radius: 50%;\n\n  animation: mv-recording-pulse 1.3s ease-in-out infinite;\n}\n\n@keyframes mv-recording-pulse {\n  0%, 100% {\n    opacity: 1;\n    box-shadow: 0 0 0 0 rgba(223, 36, 66, 0.3);\n  }\n\n  50% {\n    opacity: 0.6;\n    box-shadow: 0 0 0 7px rgba(223, 36, 66, 0);\n  }\n}\n\n/* ==========================================\n   5. AUDIO ACTION BUTTONS\n========================================== */\n\n.audio-record-actions,\n.audio-preview-actions {\n  display: flex;\n  flex-wrap: wrap;\n  align-items: center;\n  gap: 12px;\n}\n\n.audio-action-btn {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  gap: 9px;\n\n  min-height: 45px;\n  padding: 12px 18px;\n\n  border: 1px solid transparent;\n  border-radius: 10px;\n\n  font: inherit;\n  font-size: 13px;\n  font-weight: 700;\n  line-height: 1.3;\n  text-align: center;\n\n  cursor: pointer;\n  transition:\n    background 0.2s ease,\n    border-color 0.2s ease,\n    transform 0.2s ease,\n    box-shadow 0.2s ease;\n}\n\n.audio-action-btn i {\n  font-size: 14px;\n}\n\n.audio-action-btn:hover:not(:disabled) {\n  transform: translateY(-1px);\n}\n\n.audio-action-btn:disabled {\n  opacity: 0.55;\n  cursor: not-allowed;\n  transform: none;\n}\n\n/* Start Recording */\n\n.record-btn {\n  background: var(--audio-red);\n  color: #fff;\n  box-shadow: 0 5px 14px rgba(223, 36, 66, 0.18);\n}\n\n.record-btn:hover:not(:disabled) {\n  background: #bf1935;\n}\n\n/* Stop Recording */\n\n.stop-btn {\n  background: #a71932;\n  color: #fff;\n}\n\n.stop-btn:hover:not(:disabled) {\n  background: #87132a;\n}\n\n/* Save / Upload */\n\n.save-btn {\n  background: var(--audio-blue);\n  color: #fff;\n}\n\n.save-btn:hover:not(:disabled) {\n  background: var(--audio-dark-blue);\n}\n\n/* Discard */\n\n.discard-btn {\n  background: #fff;\n  color: #b4233d;\n  border-color: #e9b5c0;\n}\n\n.discard-btn:hover:not(:disabled) {\n  background: #fff0f3;\n}\n\n/* Browse */\n\n.browse-btn {\n  background: var(--audio-blue);\n  color: #fff;\n}\n\n.browse-btn:hover:not(:disabled) {\n  background: var(--audio-dark-blue);\n}\n\n/* ==========================================\n   6. HELP TEXT\n========================================== */\n\n.audio-help-text {\n  display: flex;\n  align-items: flex-start;\n  gap: 9px;\n\n  margin: 18px 0 0;\n\n  color: var(--audio-muted);\n  font-size: 12px;\n  line-height: 1.7;\n}\n\n.audio-help-text i {\n  margin-top: 3px;\n  color: var(--audio-blue);\n}\n\n/* ==========================================\n   7. DRAG AND DROP UPLOAD\n========================================== */\n\n.audio-drop-zone {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n\n  gap: 11px;\n  min-height: 260px;\n  padding: 28px 20px;\n\n  background: #f5faff;\n  border: 2px dashed #99b9d5;\n  border-radius: 15px;\n\n  text-align: center;\n\n  transition:\n    background 0.2s ease,\n    border-color 0.2s ease,\n    box-shadow 0.2s ease;\n}\n\n.audio-drop-zone.drag-active {\n  background: #dcecfb;\n  border-color: var(--audio-blue);\n  box-shadow: inset 0 0 0 2px rgba(18, 77, 131, 0.09);\n}\n\n.audio-drop-zone.has-file {\n  background: #edf7f4;\n  border-color: #5aa68f;\n}\n\n.audio-drop-zone.is-disabled {\n  opacity: 0.65;\n  cursor: not-allowed;\n}\n\n.drop-zone-icon {\n  width: 62px;\n  height: 62px;\n\n  display: flex;\n  align-items: center;\n  justify-content: center;\n\n  background: #e2eef8;\n  border-radius: 17px;\n\n  color: var(--audio-blue);\n  font-size: 27px;\n}\n\n.audio-drop-zone h4 {\n  margin: 0;\n\n  color: var(--audio-dark-blue);\n  font-size: 16px;\n  font-weight: 800;\n}\n\n.audio-drop-zone p {\n  margin: 0;\n  font-size: 12px;\n  line-height: 1.6;\n}\n\n.audio-supported-formats {\n  padding: 6px 12px;\n\n  background: #e4eff9;\n  border-radius: 30px;\n\n  color: var(--audio-blue);\n  font-size: 11px !important;\n  font-weight: 700;\n}\n\n.audio-file-limit {\n  color: var(--audio-muted);\n  font-size: 11px !important;\n}\n\n/* ==========================================\n   8. SELECTED FILE DETAILS\n========================================== */\n\n.audio-selected-file {\n  margin-top: 18px;\n  padding: 14px;\n\n  background: #edf4fb;\n  border: 1px solid var(--audio-border);\n  border-radius: 12px;\n}\n\n.selected-file-heading {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n}\n\n.selected-file-heading > i {\n  color: var(--audio-blue);\n  font-size: 23px;\n}\n\n.selected-file-info {\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n\n  min-width: 0;\n}\n\n.selected-file-info strong {\n  color: var(--audio-dark-blue);\n  font-size: 13px;\n  overflow-wrap: anywhere;\n}\n\n.selected-file-info span {\n  color: var(--audio-muted);\n  font-size: 12px;\n}\n\n/* ==========================================\n   9. AUDIO PREVIEW\n========================================== */\n\n.audio-selected-preview {\n  margin-top: 20px;\n  padding: 18px;\n\n  background: #fff;\n  border: 1px solid var(--audio-border);\n  border-radius: 13px;\n}\n\n.audio-preview-heading {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n}\n\n.audio-preview-heading i {\n  color: var(--audio-blue);\n  font-size: 18px;\n}\n\n.audio-preview-heading h4 {\n  margin: 0;\n\n  color: var(--audio-dark-blue);\n  font-size: 14px;\n  font-weight: 800;\n}\n\n.audio-selected-preview > p {\n  margin: 10px 0 15px;\n\n  color: var(--audio-muted);\n  font-size: 12px;\n}\n\n.audio-selected-preview audio {\n  display: block;\n  width: 100%;\n  max-width: 100%;\n  height: 45px;\n  margin-bottom: 17px;\n}\n\n/* ==========================================\n   10. PROCESSING STATUS\n========================================== */\n\n.audio-processing-status {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n\n  margin-top: 15px;\n  padding: 13px 15px;\n\n  background: #e7f2ff;\n  border: 1px solid #b8d8f5;\n  border-radius: 11px;\n\n  color: var(--audio-dark-blue);\n  font-size: 12px;\n  font-weight: 700;\n}\n\n/* ==========================================\n   11. SUCCESS / INFORMATION\n========================================== */\n\n.audio-status-message {\n  display: flex;\n  align-items: flex-start;\n  gap: 9px;\n\n  margin: 15px 0 0;\n  padding: 13px 15px;\n\n  background: #edf8f2;\n  border: 1px solid #b6ddc7;\n  border-radius: 11px;\n\n  color: #176341;\n  font-size: 12px;\n  line-height: 1.6;\n}\n\n.audio-status-message i {\n  margin-top: 2px;\n  flex-shrink: 0;\n}\n\n/* ==========================================\n   12. ERROR MESSAGE\n========================================== */\n\n.audio-error-message {\n  display: flex;\n  align-items: flex-start;\n  gap: 9px;\n\n  margin: 15px 0 0;\n  padding: 13px 15px;\n\n  background: #fff0f2;\n  border: 1px solid #f0b6c0;\n  border-radius: 11px;\n\n  color: #ab1933;\n  font-size: 12px;\n  line-height: 1.6;\n}\n\n.audio-error-message i {\n  margin-top: 2px;\n  flex-shrink: 0;\n}\n\n/* ==========================================\n   13. REDUCED MOTION ACCESSIBILITY\n========================================== */\n\n@media (prefers-reduced-motion: reduce) {\n  .mv-audio-recorder *,\n  .mv-audio-recorder *::before,\n  .mv-audio-recorder *::after {\n    animation-duration: 0.01ms !important;\n    transition-duration: 0.01ms !important;\n  }\n}\n", "\n/* ==========================================\n   MAKKAL VALIMAI\n   AUDIO RECORDER \u2014 RESPONSIVE CSS\n   Tablet + Mobile + Small Screens\n========================================== */\n\n/* ==========================================\n   TABLET \u2014 1024px AND BELOW\n========================================== */\n\n@media (max-width: 1024px) {\n\n  .mv-audio-recorder {\n    width: 100%;\n    min-width: 0;\n  }\n\n  .audio-record-panel,\n  .audio-file-panel {\n    padding: 18px;\n  }\n\n  .audio-mode-btn {\n    font-size: 12px;\n    padding: 12px 10px;\n    gap: 7px;\n  }\n\n  .audio-drop-zone {\n    min-height: 230px;\n    padding: 24px 18px;\n  }\n\n  .audio-selected-preview {\n    padding: 16px;\n  }\n\n}\n\n/* ==========================================\n   MOBILE \u2014 768px AND BELOW\n========================================== */\n\n@media (max-width: 768px) {\n\n  :host {\n    display: block;\n    width: 100%;\n    min-width: 0;\n  }\n\n  .mv-audio-recorder {\n    width: 100%;\n    max-width: 100%;\n    min-width: 0;\n    overflow-wrap: anywhere;\n  }\n\n  /* MODE BUTTONS */\n\n  .audio-mode-switch {\n    grid-template-columns: repeat(2, minmax(0, 1fr));\n    gap: 5px;\n    padding: 5px;\n    margin-bottom: 16px;\n    border-radius: 12px;\n  }\n\n  .audio-mode-btn {\n    min-height: 50px;\n    padding: 10px 7px;\n    gap: 6px;\n    font-size: 11px;\n    line-height: 1.3;\n    border-radius: 9px;\n  }\n\n  .audio-mode-btn i {\n    font-size: 14px;\n  }\n\n  .audio-mode-btn span {\n    min-width: 0;\n    overflow-wrap: anywhere;\n  }\n\n  /* RECORD / FILE PANELS */\n\n  .audio-record-panel,\n  .audio-file-panel {\n    width: 100%;\n    padding: 15px;\n    border-radius: 12px;\n  }\n\n  /* PANEL HEADING */\n\n  .audio-panel-heading {\n    gap: 10px;\n    margin-bottom: 17px;\n  }\n\n  .audio-panel-icon {\n    width: 40px;\n    height: 40px;\n    border-radius: 10px;\n    font-size: 16px;\n  }\n\n  .audio-panel-heading h4 {\n    font-size: 14px;\n    margin-bottom: 4px;\n  }\n\n  .audio-panel-heading p {\n    font-size: 11px;\n  }\n\n  /* RECORDING STATUS */\n\n  .recording-indicator {\n    width: 100%;\n    justify-content: center;\n    padding: 10px;\n    font-size: 12px;\n    margin-bottom: 15px;\n  }\n\n  /* ACTION BUTTONS */\n\n  .audio-record-actions,\n  .audio-preview-actions {\n    display: flex;\n    flex-direction: column;\n    align-items: stretch;\n    width: 100%;\n    gap: 10px;\n  }\n\n  .audio-action-btn {\n    width: 100%;\n    min-height: 48px;\n    padding: 12px;\n    font-size: 12px;\n  }\n\n  /* DRAG AND DROP */\n\n  .audio-drop-zone {\n    width: 100%;\n    min-height: 220px;\n    padding: 22px 12px;\n    gap: 9px;\n    border-radius: 12px;\n  }\n\n  .drop-zone-icon {\n    width: 54px;\n    height: 54px;\n    border-radius: 14px;\n    font-size: 23px;\n  }\n\n  .audio-drop-zone h4 {\n    font-size: 14px;\n  }\n\n  .audio-drop-zone p {\n    font-size: 11px;\n  }\n\n  .audio-supported-formats {\n    font-size: 10px !important;\n  }\n\n  .audio-file-limit {\n    font-size: 10px !important;\n  }\n\n  /* SELECTED FILE */\n\n  .audio-selected-file {\n    margin-top: 15px;\n    padding: 12px;\n  }\n\n  .selected-file-heading {\n    gap: 10px;\n  }\n\n  .selected-file-heading > i {\n    font-size: 20px;\n  }\n\n  .selected-file-info strong {\n    font-size: 12px;\n  }\n\n  .selected-file-info span {\n    font-size: 11px;\n  }\n\n  /* PREVIEW */\n\n  .audio-selected-preview {\n    margin-top: 16px;\n    padding: 13px;\n    border-radius: 11px;\n  }\n\n  .audio-preview-heading h4 {\n    font-size: 13px;\n  }\n\n  .audio-selected-preview > p {\n    font-size: 11px;\n  }\n\n  .audio-selected-preview audio {\n    width: 100%;\n    min-width: 0;\n    height: 44px;\n  }\n\n  /* STATUS MESSAGES */\n\n  .audio-processing-status,\n  .audio-status-message,\n  .audio-error-message {\n    width: 100%;\n    padding: 12px;\n    font-size: 11px;\n    border-radius: 10px;\n  }\n\n  .audio-help-text {\n    font-size: 11px;\n    line-height: 1.6;\n  }\n\n}\n\n/* ==========================================\n   SMALL MOBILE \u2014 480px AND BELOW\n========================================== */\n\n@media (max-width: 480px) {\n\n  .audio-mode-switch {\n    gap: 4px;\n    padding: 4px;\n  }\n\n  .audio-mode-btn {\n    min-height: 52px;\n    padding: 9px 5px;\n    font-size: 10px;\n    gap: 5px;\n  }\n\n  .audio-mode-btn i {\n    font-size: 13px;\n  }\n\n  .audio-record-panel,\n  .audio-file-panel {\n    padding: 12px;\n  }\n\n  .audio-panel-heading {\n    align-items: flex-start;\n  }\n\n  .audio-panel-icon {\n    width: 36px;\n    height: 36px;\n    font-size: 15px;\n  }\n\n  .audio-panel-heading h4 {\n    font-size: 13px;\n  }\n\n  .audio-drop-zone {\n    min-height: 205px;\n    padding: 18px 10px;\n  }\n\n  .audio-action-btn {\n    min-height: 48px;\n    font-size: 11px;\n  }\n\n}\n\n/* ==========================================\n   EXTRA SMALL DEVICES \u2014 360px AND BELOW\n========================================== */\n\n@media (max-width: 360px) {\n\n  .audio-mode-btn {\n    flex-direction: column;\n    gap: 4px;\n    min-height: 58px;\n    font-size: 10px;\n    text-align: center;\n  }\n\n  .audio-mode-btn i {\n    font-size: 15px;\n  }\n\n  .audio-record-panel,\n  .audio-file-panel {\n    padding: 10px;\n  }\n\n  .audio-drop-zone {\n    padding: 16px 8px;\n  }\n\n  .audio-drop-zone h4 {\n    font-size: 12px;\n  }\n\n}\n\n/* ==========================================\n   TOUCH DEVICES\n========================================== */\n\n@media (hover: none) and (pointer: coarse) {\n\n  .audio-mode-btn,\n  .audio-action-btn {\n    min-height: 48px;\n  }\n\n  .audio-action-btn:hover:not(:disabled) {\n    transform: none;\n  }\n\n}\n\n/* ==========================================\n   LANDSCAPE MOBILE\n========================================== */\n\n@media (max-width: 900px) and (orientation: landscape) {\n\n  .audio-drop-zone {\n    min-height: 170px;\n  }\n\n  .audio-record-panel,\n  .audio-file-panel {\n    padding: 14px;\n  }\n\n}\n"] }]
    }], () => [{ type: i1.NewsApiService }, { type: i2.ClientMp3EncoderService }], { language: [{
            type: Input
        }], disabled: [{
            type: Input
        }], maxSizeMb: [{
            type: Input
        }], uploaded: [{
            type: Output
        }], workingChange: [{
            type: Output
        }], fileInput: [{
            type: ViewChild,
            args: ['fileInput']
        }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(AudioRecorderComponent, { className: "AudioRecorderComponent", filePath: "src/app/shared/audio-recorder/audio-recorder.component.ts", lineNumber: 30 }); })();
//# sourceMappingURL=audio-recorder.component.js.map