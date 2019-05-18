import {Component, OnInit} from '@angular/core';
import {StreamService} from '../../shared/services/stream.service';

@Component({
  templateUrl: './color-keying.component.html',
  styleUrls: ['color-keying.component.scss', '../../filters/components/filters.component.scss']
})
export class ColorKeyingComponent implements OnInit {

  enabled = false;
  streamToDisplay: MediaStream;
  video: HTMLVideoElement;

  limit = 0;
  color = '';
  mode = 0;

  private canvas: HTMLCanvasElement;
  private ctx: CanvasRenderingContext2D;
  private colorRGB: { red: number, green: number, blue: number }; 

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

  start() {
    this.video = <HTMLVideoElement>document.createElement('video');
    this.video.srcObject = this.streamToDisplay;
    this.video.width = 640;
    this.video.height = 480;
    this.video.autoplay = true;
    this.canvas = <HTMLCanvasElement>document.getElementById('canvas');
    this.ctx = this.canvas.getContext('2d');
    this.update();
  }

  pickColor(event: MouseEvent) {
    this.ctx.drawImage(this.video, 0, 0, this.video.width, this.video.height);
    const imageData = this.ctx.getImageData(0, 0, this.video.width, this.video.height);
    const data = imageData.data;
    const pos = this.video.width * event.layerY + event.layerX;
    const red = data[pos * 4 + 0];
    const green = data[pos * 4 + 1];
    const blue = data[pos * 4 + 2];
    this.color = '#' + this.rgb2hex(red, green, blue);
    this.colorRGB = { red: red, green: green, blue: blue };
  }

  setMode(m: number) {
    this.mode = m;
  }

  isMode(m: number): boolean {
    return this.mode === m;
  }

  private update() {
    if (this.video) {
      const w = this.video.width;
      const h = this.video.height;
      this.ctx.drawImage(this.video, 0, 0, w, h);
      if (!!this.color.length) {
        this.updateCanvas(this.ctx, w, h);
      }
    }
    if (this.enabled) {
      setTimeout(() => this.update(), 1);
    }
  }

  private updateCanvas(context: CanvasRenderingContext2D, width: number, height: number) {
    const imageData = context.getImageData(0, 0, width, height);
    const data = imageData.data;
    const l = data.length / 4;
    for (let i = 0; i < l; i++) {
      switch(this.mode) {
        case 0: 
          this.hideColor(data, i, data[i * 4 + 0], data[i * 4 + 1], data[i * 4 + 2]);
          break;
        case 1: 
          this.showColor(data, i, data[i * 4 + 0], data[i * 4 + 1], data[i * 4 + 2]);
          break;
        case 2: 
          this.highlightColor(data, i, data[i * 4 + 0], data[i * 4 + 1], data[i * 4 + 2]);
          break;
      }
    }
    context.putImageData(imageData, 0, 0);
  }

  private hideColor(data, index: number, r: number, g: number, b: number) {
    if (this.inArea(r, this.colorRGB.red, this.limit) &&
      this.inArea(g, this.colorRGB.green, this.limit) &&
      this.inArea(b, this.colorRGB.blue, this.limit)) {
      data[index * 4 + 3] = 0;
    }
  }

  private showColor(data, index: number, r: number, g: number, b: number) {
    if (!(this.inArea(r, this.colorRGB.red, this.limit) &&
      this.inArea(g, this.colorRGB.green, this.limit) &&
      this.inArea(b, this.colorRGB.blue, this.limit))) {
      data[index * 4 + 3] = 0;
    }
  }

  private highlightColor(data, index: number, r: number, g: number, b: number) {
    if (!(this.inArea(r, this.colorRGB.red, this.limit) &&
      this.inArea(g, this.colorRGB.green, this.limit) &&
      this.inArea(b, this.colorRGB.blue, this.limit))) {
        const avg = (r + g + b) / 3;
        data[index * 4 + 0] = avg;
        data[index * 4 + 1] = avg;
        data[index * 4 + 2] = avg;
    }
  }

  private inArea(actual: number, control: number, limit): boolean {
    return actual >= (control - limit) && actual <= (control + limit);
  }

  private rgb2hex(red: number, green: number, blue: number): string {
    let rgb = Array.apply(null, arguments).join().match(/\d+/g);
    rgb = ((rgb[0] << 16) + (rgb[1] << 8) + (+rgb[2])).toString(16);
    return rgb;
  }
}
