import {Injectable} from '@angular/core';
import {Logger} from '../models/logger.model';
import {LoggerFactory} from './logger.service';
declare var MediaRecorder: any;

const MEDIA_TYPE = 'video/webm';
const MEDIA_TYPE_FALLBACK = 'video/webm,codecs=vp9';
const MEDIA_TYPE_FALLBACK2 = 'video/vp8';

@Injectable({providedIn: 'root'})
export class RecordService {

  private logger: Logger;
  private mediaRecorder;
  private recordedBlobs = [];

  constructor(loggerFactory: LoggerFactory) {
    this.logger = loggerFactory.create('RecordService');
  }

  canStart(): boolean {
    return !!this.mediaRecorder && this.mediaRecorder.state === 'inactive';
  }

  canPause(): boolean {
    return !!this.mediaRecorder && this.mediaRecorder.state === 'recording';
  }

  canResume(): boolean {
    return !!this.mediaRecorder && this.mediaRecorder.state === 'paused';
  }

  canStop(): boolean {
    return this.canPause();
  }

  canDownload(): boolean {
    return !!this.recordedBlobs.length;
  }

  init(stream: MediaStream) {
    this.recordedBlobs = [];
    try {
      this.mediaRecorder = new MediaRecorder(stream, {mimeType: MEDIA_TYPE});
    } catch (error) {
      this.logger.logError('Unable to create MediaRecorder with options Object: ', 'initRecorder', error);
      try {
        this.mediaRecorder = new MediaRecorder(stream, {mimeType: MEDIA_TYPE_FALLBACK});
      } catch (error) {
        this.logger.logError('Unable to create MediaRecorder with options Object: ', 'initRecorder', error);
        try {
          this.mediaRecorder = new MediaRecorder(stream, {mimeType: MEDIA_TYPE_FALLBACK2});
        } catch (error) {
          this.logger.logError('Exception while creating MediaRecorder:', 'initRecorder', error);
          return;
        }
      }
    }
    this.mediaRecorder.ondataavailable = (event) => {
      if (event.data && event.data.size > 0) {
        this.recordedBlobs.push(event.data);
      }};
  }

  start() {
    this.recordedBlobs = [];
    this.mediaRecorder.start(100);
  }

  pause() {
    this.mediaRecorder.pause();
  }

  resume() {
    this.mediaRecorder.resume();
  }

  stop() {
    this.mediaRecorder.stop();
  }

  download(filename: string) {
    const blob = new Blob(this.recordedBlobs, {type: MEDIA_TYPE});
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.style.display = 'none';
    a.href = url;
    a.download = filename + '.webm';
    document.body.appendChild(a);
    a.click();
    setTimeout(() => {
      document.body.removeChild(a);
      window.URL.revokeObjectURL(url);
    }, 100);
  }
}
