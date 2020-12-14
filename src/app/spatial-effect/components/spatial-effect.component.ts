import {Component, OnInit, OnDestroy} from '@angular/core';
import {RecordService} from 'src/app/shared/services/record.service';

const CANVAS_WIDTH = 1040;
const CANVAS_HEIGHT = 680;

@Component({
  templateUrl: './spatial-effect.component.html',
  styleUrls: ['spatial-effect.component.scss', '../../filters/components/filters.component.scss']
})
export class SpatialEffectComponent implements OnInit, OnDestroy {

  videoWidth: number;
  videoHeight: number;
  leftIndex = 0;
  rightIndex = 0;
  leftHorizontal = 0;
  leftVertical = 0;
  rightHorizontal = 0;
  rightVertical = 0;
  alpha = 50;
  frequency = 42;

  private canvas: HTMLCanvasElement;
  private ctx: CanvasRenderingContext2D;
  private leftVideo: HTMLVideoElement;
  private rightVideo: HTMLVideoElement;
  private actVideo = 0;

  initalized = false;
  playing = false;
  paused = true;
  devices = [];

  constructor(public recordService: RecordService) {
  }

  ngOnInit() {
    this.videoWidth = 740;
    this.videoHeight = 480;
    this.canvas = document.getElementById('canvas') as HTMLCanvasElement;
    this.canvas.width = CANVAS_WIDTH;
    this.canvas.height = CANVAS_HEIGHT;
    this.ctx = this.canvas.getContext('2d');
    this.devices = [];
    this.initDevices().then(ds => this.devices = ds);
  }

  ngOnDestroy() {
    this.playing = false;
  }

  init() {
    this.playing = false;
    this.paused = true;
    if (this.recordService.canStop()) {
      this.recordService.stop();
    }
    this.setVideo(this.devices[this.leftIndex])
      .then(video => {
        this.leftVideo = video;
        return this.setVideo(this.devices[this.rightIndex]);
      })
      .then(video => this.rightVideo = video)
      .then(() => this.recordService.init((this.canvas as any).captureStream()))
      .then(() => this.initalized = true);
  }

  togglePause() {
    if (!this.playing) {
      this.paused = false;
      this.playing = true;
      this.drawInterval();
    } else {
      this.paused = !this.paused;
    }
  }

  private drawInterval() {
    if (!this.paused) {
      if (this.actVideo === 1) {
        this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
        this.ctx.drawImage(this.leftVideo, this.leftHorizontal, this.leftVertical, this.videoWidth, this.videoHeight);
      } else {
        this.ctx.drawImage(this.rightVideo, this.rightHorizontal, this.rightVertical, this.videoWidth, this.videoHeight);
      }
      this.actVideo = (this.actVideo + 1) % 2;
      this.ctx.globalAlpha = this.alpha / 100;
    }
    if (this.playing) {
      setTimeout(() => this.drawInterval(), this.frequency);
    }
  }

  private initDevices(): Promise<any> {
    return navigator.mediaDevices.enumerateDevices()
      .then(devices => devices.filter(d => d.kind === 'videoinput').map(d => d.deviceId));
  }

  private setVideo(deviceId: string): Promise<HTMLVideoElement> {
    const constraint = {
      audio: false, video: {
        width: this.videoWidth, height: this.videoHeight,
        deviceId: {exact: deviceId},
        resizeMode: 'none', frameRate: 24
      }
    };
    return navigator.mediaDevices.getUserMedia(constraint)
      .then(stream => this.setStreamToVideo(stream));
  }

  private setStreamToVideo(stream: MediaStream): HTMLVideoElement {
    const video = document.createElement('video');
    video.srcObject = stream;
    video.width = this.videoWidth;
    video.height = this.videoHeight;
    video.autoplay = true;
    return video;
  }
}
