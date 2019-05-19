import {Component} from '@angular/core';
import {StreamService} from '../../shared/services/stream.service';
import {CanvasComponent} from 'src/app/shared/components/canvas.component';
import {ColorHelper} from 'src/app/shared/helpers/color.helper';

@Component({
  templateUrl: './color-keying.component.html',
  styleUrls: ['color-keying.component.scss', '../../filters/components/filters.component.scss']
})
export class ColorKeyingComponent extends CanvasComponent {

  limit = 0;
  color = '';
  mode = 0;

  private colorRGB: { red: number, green: number, blue: number }; 

  constructor(streamService: StreamService) {
    super(streamService);
  }

  pickColor(event: MouseEvent) {
    this.ctx.drawImage(this.video, 0, 0, this.video.width, this.video.height);
    const imageData = this.ctx.getImageData(0, 0, this.video.width, this.video.height);
    const data = imageData.data;
    const pos = this.video.width * event.layerY + event.layerX;
    const red = data[pos * 4 + 0];
    const green = data[pos * 4 + 1];
    const blue = data[pos * 4 + 2];
    this.color = '#' + ColorHelper.rgb2hex(red, green, blue);
    this.colorRGB = { red: red, green: green, blue: blue };
  }

  setMode(m: number) {
    this.mode = m;
  }

  isMode(m: number): boolean {
    return this.mode === m;
  }

  computeFrame() {
    if (!!this.color.length) {
      const imageData = this.ctx.getImageData(0, 0, this.video.width, this.video.height);
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
      this.ctx.putImageData(imageData, 0, 0);
    }
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
}
