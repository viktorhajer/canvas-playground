import {Component, OnInit} from '@angular/core';
import {StreamService} from '../../shared/services/stream.service';

@Component({
  templateUrl: './motion.component.html',
  styleUrls: ['motion.component.scss', '../../filters/components/filters.component.scss']
})
export class MotionComponent implements OnInit {

  enabled = false;
  streamToDisplay: MediaStream;
  video: HTMLVideoElement;

  power = 0;
  sensitivity = 15;
  mode1 = 0;
  mode2 = 0;

  private canvas: HTMLCanvasElement;
  private ctx: CanvasRenderingContext2D;
  private canvDiff: HTMLCanvasElement;
  private ctxDiff: CanvasRenderingContext2D;
  private previousData = [];

  constructor(private streamService: StreamService) {
    if (!!this.streamService.streams.length) {
      this.streamToDisplay = this.streamService.streams[0];
    }
  }

  ngOnInit() {
    this.toggleEnabled();
  }

  toggleEnabled() {
    this.enabled = !this.enabled;
    if (this.enabled) { 
      this.start();
    }
  }

  private start() {
    this.video = <HTMLVideoElement>document.createElement('video');
    this.video.srcObject = this.streamToDisplay;
    this.video.width = 640;
    this.video.height = 480;
    this.video.autoplay = true;

    this.canvas = document.createElement('canvas');
    this.canvas.width = this.video.width;
    this.canvas.height = this.video.height;
	  this.ctx = this.canvas.getContext("2d");

    this.canvDiff = <HTMLCanvasElement>document.getElementById('canvas');
    this.ctxDiff = this.canvDiff.getContext('2d');
    this.update();
  }

  setMode1(m: number) {
    this.mode1 = m;
  }

  isMode1(m: number): boolean {
    return this.mode1 === m;
  }

  setMode2(m: number) {
    this.mode2 = m;
  }

  isMode2(m: number): boolean {
    return this.mode2 === m;
  }

  private update() {
    if (this.video) {
      const w = this.video.width;
      const h = this.video.height;
      this.ctx.drawImage(this.video, 0, 0, w, h);
      this.ctxDiff.drawImage(this.video, 0, 0, w, h);
      const imageData = this.ctx.getImageData(0, 0, w, h);
      const imageDataDiff = this.ctxDiff.getImageData(0, 0, w, h);

      const data = imageData.data;
      const diffData = imageDataDiff.data;
      let sumDiff = 0;
      for (let i = 0; i < data.length; i += 4) {
        const avg = (data[i] + data[i + 1] + data[i + 2]) / 3;
        let diff = 0;
        for (let j = 0; j < 3; j ++) {
          const old = data[i + j];
          data[i + j] = avg;
          diff = Math.abs(this.previousData[i] - data[i + j]);
          if (diff > this.sensitivity && (j === 2 || this.mode2 != 0)) { 
            diffData[i + j] = 255 - avg;
            if (this.mode2 === 0) diffData[i + j] = 255 - avg;
            else if (this.mode2 === 1) diffData[i + j] = avg;
            else if (this.mode2 === 2) diffData[i + j] = diff;
            else if (this.mode2 === 3) diffData[i + j] = 255 - diff;
            else if (this.mode2 === 4) diffData[i + j] = old;
            else if (this.mode2 === 5) diffData[i + j] = 0;
            sumDiff += 0.01;
          } else {
            if (this.mode1 === 0) diffData[i + j] = old;
            else if (this.mode1 === 1) diffData[i + j] = avg;
            else if (this.mode1 === 2) diffData[i + j] = diff;
            else if (this.mode1 === 3) diffData[i + j] = 255 - diff;
          }
        }
        if (this.mode1 === 4 && diff <= this.sensitivity) diffData[i + 3] = 0;
        this.previousData[i] = avg;
      }
      this.ctx.putImageData(imageData, 0, 0);
      this.ctxDiff.putImageData(imageDataDiff, 0, 0);
      this.power = Math.floor(sumDiff);
    }
    if (this.enabled) {
      setTimeout(() => this.update(), 1);
    }
  }
}
