import { OnInit, OnDestroy } from '@angular/core';
import { StreamService } from '../services/stream.service';

export class CanvasComponent  implements OnInit, OnDestroy {

  enabled = false;
  streamToDisplay: MediaStream;
  video: HTMLVideoElement;
  canvas: HTMLCanvasElement;
  ctx: CanvasRenderingContext2D;

  constructor(streamService: StreamService) {
    if (!!streamService.streams.length) {
      this.streamToDisplay = streamService.streams[0];
    }
  }

  ngOnInit() {
    this.canvas = <HTMLCanvasElement>document.getElementById('canvas');
    this.ctx = this.canvas.getContext('2d');
    this.video = <HTMLVideoElement>document.createElement('video');
    this.video.srcObject = this.streamToDisplay;
    this.video.width = 640;
    this.video.height = 480;
    this.video.autoplay = true;
    this.init();
    this.toggleEnabled();
  }

  ngOnDestroy() {
    this.enabled = false;
  }

  toggleEnabled() {
    this.enabled = !this.enabled;
    if (this.enabled) { 
      this.process();
    }
  }

  protected init() {
  }

  protected computeFrame() {
  }

  private process() {
    if (this.video) {
      this.ctx.clearRect(0, 0, this.video.width, this.video.height);
      this.ctx.drawImage(this.video, 0, 0, this.video.width, this.video.height);
      this.computeFrame();
    }
    if (this.enabled) {
      setTimeout(() => this.process(), 1);
    }
  }
}