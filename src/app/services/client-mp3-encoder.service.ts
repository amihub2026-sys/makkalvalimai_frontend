
import { Injectable } from '@angular/core';

interface LameEncoder {
  encodeBuffer(samples: Int16Array): Uint8Array;
  flush(): Uint8Array;
}

interface LameApi {
  Mp3Encoder: new (
    channels: number,
    sampleRate: number,
    bitrate: number
  ) => LameEncoder;
}

declare global {
  interface Window {
    lamejs?: LameApi;
  }
}

const ENCODER_URL =
  'https://cdnjs.cloudflare.com/ajax/libs/lamejs/1.2.1/lame.min.js';

let loadingEncoder: Promise<LameApi> | null = null;

@Injectable({
  providedIn: 'root'
})
export class ClientMp3EncoderService {

  // ======================================
  // CONVERT WEBM / OGG RECORDING TO MP3
  // ======================================

  async convertToMp3(
    recorded: Blob,
    language: 'ta' | 'en'
  ): Promise<File> {

    if (!recorded.size) {
      throw new Error(
        'Audio is empty. Please record again.'
      );
    }

    if (
      typeof window === 'undefined' ||
      typeof AudioContext === 'undefined' ||
      typeof OfflineAudioContext === 'undefined'
    ) {
      throw new Error(
        'Browser audio conversion is unavailable. Upload an MP3 file.'
      );
    }

    // Load the MP3 encoding library.
    const lame = await this.loadEncoder();

    // Decode recorded audio to PCM.
    const audioContext = new AudioContext();

    let decoded: AudioBuffer;

    try {
      decoded = await audioContext.decodeAudioData(
        await recorded.arrayBuffer()
      );
    } catch {
      throw new Error(
        'Cannot decode this audio. Record again or select an MP3.'
      );
    } finally {
      await audioContext.close().catch(() => undefined);
    }

    if (
      !decoded.length ||
      !Number.isFinite(decoded.duration)
    ) {
      throw new Error(
        'No valid audio was detected.'
      );
    }

    // Limit expensive client-side conversion.
    if (decoded.duration > 15 * 60) {
      throw new Error(
        'Audio exceeds 15 minutes. Please use a shorter recording.'
      );
    }

    // Convert to mono, 44.1 kHz.
    const sampleRate = 44100;

    const offline = new OfflineAudioContext(
      1,
      Math.max(
        1,
        Math.ceil(decoded.duration * sampleRate)
      ),
      sampleRate
    );

    const source = offline.createBufferSource();

    source.buffer = decoded;
    source.connect(offline.destination);
    source.start();

    const rendered = await offline.startRendering();

    const samples = rendered.getChannelData(0);

    // Generate MP3 at 96 kbps.
    const encoder = new lame.Mp3Encoder(
      1,
      sampleRate,
      96
    );

    const chunks: BlobPart[] = [];

    const blockSize = 1152;

    for (
      let offset = 0;
      offset < samples.length;
      offset += blockSize
    ) {

      const end = Math.min(
        offset + blockSize,
        samples.length
      );

      const pcm = new Int16Array(end - offset);

      for (let i = 0; i < pcm.length; i++) {

        const value = Math.max(
          -1,
          Math.min(1, samples[offset + i])
        );

        pcm[i] = value < 0
          ? value * 32768
          : value * 32767;
      }

      const encoded = encoder.encodeBuffer(pcm);

      if (encoded.length) {
        chunks.push(Uint8Array.from(encoded));
      }

      // Allow browser UI to remain responsive.
      if (
        offset > 0 &&
        offset % (blockSize * 120) === 0
      ) {
        await new Promise<void>(
          resolve => setTimeout(resolve, 0)
        );
      }

    }

    const finalData = encoder.flush();

    if (finalData.length) {
      chunks.push(Uint8Array.from(finalData));
    }

    const file = new File(
      chunks,
      `makkal-valimai-${language}-${Date.now()}.mp3`,
      {
        type: 'audio/mpeg'
      }
    );

    if (!file.size) {
      throw new Error(
        'MP3 conversion produced an empty file.'
      );
    }

    if (file.size > 20 * 1024 * 1024) {
      throw new Error(
        'Converted MP3 exceeds 20 MB.'
      );
    }

    return file;

  }

  // ======================================
  // LOAD MP3 ENCODER
  // ======================================

  private loadEncoder(): Promise<LameApi> {

    if (window.lamejs?.Mp3Encoder) {
      return Promise.resolve(window.lamejs);
    }

    if (loadingEncoder) {
      return loadingEncoder;
    }

    loadingEncoder = new Promise<LameApi>(
      (resolve, reject) => {

        const script = document.createElement('script');

        script.src = ENCODER_URL;
        script.async = true;
        script.crossOrigin = 'anonymous';

        script.onload = () => {

          if (window.lamejs?.Mp3Encoder) {
            resolve(window.lamejs);
          } else {
            reject(
              new Error('MP3 encoder initialization failed.')
            );
          }

        };

        script.onerror = () => {

          script.remove();

          reject(
            new Error(
              'Unable to load MP3 encoder. Check internet connection or upload MP3 directly.'
            )
          );

        };

        document.head.appendChild(script);

      }
    ).catch(error => {

      loadingEncoder = null;
      throw error;

    });

    return loadingEncoder;

  }

}
