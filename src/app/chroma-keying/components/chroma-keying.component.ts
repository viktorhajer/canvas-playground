import {Component, OnDestroy} from '@angular/core';
import {StreamService} from '../../shared/services/stream.service';

@Component({
  templateUrl: './chroma-keying.component.html',
  styleUrls: ['chroma-keying.component.scss']
})
export class ChromaKeyingComponent implements OnDestroy {

  interval: any;
  streamToDisplay: MediaStream;
  video: HTMLVideoElement;

  limit = 0;
  color = '';

  private canvas: HTMLCanvasElement;
  private ctx: CanvasRenderingContext2D;

  constructor(private streamService: StreamService) {
    if (!!this.streamService.streams.length) {
      this.streamToDisplay = this.streamService.streams[0];
    }
  }

  ngOnDestroy() {
    this.stop();
  }

  start() {
    this.video = <HTMLVideoElement>document.getElementById('sample');
    this.canvas = <HTMLCanvasElement>document.getElementById('canvas');
    this.ctx = this.canvas.getContext('2d');
    this.interval = setInterval(() => this.update(), 100);
  }

  stop() {
    clearInterval(this.interval);
    this.interval = null;
  }

  private update() {
    if (this.video && !!this.color.length) {
      const w = this.video.clientWidth;
      const h = this.video.clientHeight;
      this.ctx.drawImage(this.video, 0, 0, w, h);
      this.replaceColor(this.ctx, w, h, this.color);
    }
  }

  private replaceColor(context: CanvasRenderingContext2D, width: number, height: number, colorHex: string) {
    const imageData = context.getImageData(0, 0, width, height);
    const data = imageData.data;
    const l = data.length / 4;
    const rgb = this.hex2rgb(colorHex);

    for (let i = 0; i < l; i++) {
      const red = data[i * 4 + 0];
      const green = data[i * 4 + 1];
      const blue = data[i * 4 + 2];
      if (this.inArea(red, rgb.red, this.limit) &&
        this.inArea(green, rgb.green, this.limit) &&
        this.inArea(blue, rgb.blue, this.limit)) {
        data[i * 4 + 3] = 0;
      }
    }
    context.putImageData(imageData, 0, 0);
  }

  private inArea(actual: number, control: number, limit): boolean {
    return Math.abs(actual - control) < 250 - limit;
    // return actual >= (control - limit) && actual <= (control + limit);
  }

  private hex2rgb(hex: string): { red: number, green: number, blue: number } {
    if (hex.charAt(0) === '#') {
      hex = hex.substr(1);
    }
    const r = parseInt(hex.charAt(0) + hex.charAt(1), 16);
    const g = parseInt(hex.charAt(2) + hex.charAt(3), 16);
    const b = parseInt(hex.charAt(4) + hex.charAt(5), 16);
    return {red: r, green: g, blue: b};
  }
}
