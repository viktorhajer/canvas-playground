import {Component, OnDestroy} from '@angular/core';
import {StreamService} from '../../shared/services/stream.service';

@Component({
  templateUrl: './mixer.component.html',
  styleUrls: ['mixer.component.scss']
})
export class MixerComponent implements OnDestroy {

  interval: any;
  streamFirst: MediaStream;
  videoFirst: HTMLVideoElement;
  streamSecond: MediaStream;
  videoSecond: HTMLVideoElement;
  showVideoElement = true;

  opacity = 50;
  operation = 'source-over';
  opertaions = [
    'source-over', 'lighter',
    'darken', 'multiply', 'color-burn',
    'lighten', 'screen', 'color-dodge',
    'overlay', 'soft-light', 'hard-light',
    'difference', 'exclusion',
    'hue', 'saturation', 'color', 'luminosity'
  ];

  private canvas: HTMLCanvasElement;
  private ctx: CanvasRenderingContext2D;

  constructor(private streamService: StreamService) {
    if (this.streamService.streams.length > 1) {
      this.streamFirst = this.streamService.streams[0];
      this.streamSecond = this.streamService.streams[1];
    }
  }

  ngOnDestroy() {
    this.stop();
  }

  start() {
    this.initVideos();
    this.canvas = <HTMLCanvasElement>document.getElementById('canvas');
    this.ctx = this.canvas.getContext('2d');
    this.interval = setInterval(() => this.update(), 30);
  }

  stop() {
    clearInterval(this.interval);
    this.interval = null;
  }

  private update() {
    if (!!this.videoFirst && !!this.videoSecond) {
      let wF = this.videoFirst.width;
      let hF = this.videoFirst.height;
      if (this.showVideoElement) {
        wF = this.videoFirst.clientWidth;
        hF = this.videoFirst.clientHeight;
      }
      this.canvas.width = wF;
      this.canvas.height = hF;
      this.ctx.clearRect(0, 0, wF, hF);
      this.ctx.globalAlpha = 1;
      this.ctx.drawImage(this.videoFirst, 0, 0, wF, hF);
      this.ctx.globalCompositeOperation = this.operation;
      this.ctx.globalAlpha = this.opacity / 100;
      this.ctx.drawImage(this.videoSecond, 0, 0, wF, hF);
    }
  }

  toggleVideo() {
    if (this.interval) {
      this.stop();
    }
    this.showVideoElement = !this.showVideoElement;
    this.initVideos();
    setTimeout(() => this.start(), 100);
  }

  initVideos() {
    if (this.showVideoElement) {
      this.videoFirst = <HTMLVideoElement>document.getElementById('sampleFirst');
      this.videoSecond = <HTMLVideoElement>document.getElementById('sampleSecond');
    } else {
      this.videoFirst = this.createVideoElement(this.streamFirst);
      this.videoSecond = this.createVideoElement(this.streamSecond);
    }
  }

  private createVideoElement(src: MediaStream): HTMLVideoElement {
    const video = <HTMLVideoElement>document.createElement('video');
    video.srcObject = src;
    video.autoplay = false;
    video.loop = true; // set the video to loop.
    video.muted = true;
    video.width = 640;
    video.height = 480;
    video.play();
    return video;
  }
}
