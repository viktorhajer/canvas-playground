import {Component} from '@angular/core';
import {StreamService} from '../../shared/services/stream.service';

@Component({
  templateUrl: './tracking.component.html',
  styleUrls: ['tracking.component.scss', '../../filters/components/filters.component.scss']
})
export class TrackingComponent {

  streamToDisplay: MediaStream;
  video: HTMLVideoElement;
  enabled = false;
	minSpeed = 80;    // Minimun speed of the object to trigger the onMove function
	trackerSize = 40; // Size of the tracker
  trackerSpeed = 4;
  colorToTrack = '#EFD0CF';    // Caucasian skin color by defect
  private colorTolerance = [0.2, 1, 1]; // h,s,v vector color tolerance (range 0-1)
  
  private lastImageData: ImageData;
  private frameBlended: ImageData;
  private hsvColor = [];
  private objectShape;
  private actualShape;

  private canvas: HTMLCanvasElement;
  private canvasBlended: HTMLCanvasElement;
  private ctx: CanvasRenderingContext2D;
  private ctxBlended: CanvasRenderingContext2D;

  constructor(private streamService: StreamService) {
    if (!!this.streamService.streams.length) {
      this.streamToDisplay = this.streamService.streams[0];
    }
    this.setColorToTrack(this.rgbToHsv(this.hex2rgb(this.colorToTrack)));
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

    this.canvasBlended = document.createElement('canvas');
    this.canvasBlended.width = this.video.width;
    this.canvasBlended.height = this.video.height;
	  this.ctxBlended = this.canvasBlended.getContext("2d");

    this.canvas = <HTMLCanvasElement>document.getElementById('canvas');
    this.ctx = this.canvas.getContext('2d');
    this.update();
  }

  private update() {
    this.ctx.drawImage(this.video, 0, 0, this.video.width, this.video.height);
    this.computeFrame();
    if (this.enabled) {
      setTimeout(() => this.update(), 1);
    }
  }

  private computeFrame() {
    const frame = this.ctx.getImageData(0, 0, this.video.width, this.video.height);
    this.blend(frame);
    this.ctx.strokeStyle = 'black';
    this.ctx.lineWidth = 2;
    let x: number, y: number, pos: number; 
    const frameLength = frame.data.length/4; 
    const step = 4;

    for (var i = 0; i < frameLength; i += step) {
      pos = i*4;
      x = i % frame.width; 
      y = Math.round(i / frame.width);        
      if(this.isObjectColor(frame, this.frameBlended, pos)) {
          this.objectShape = {x: x, y: y};
          break;
        }
      }
    if (this.objectShape && !this.actualShape) {
      this.actualShape = this.objectShape; 
    } else if (this.objectShape && this.actualShape) {
      this.actualShape.x += (this.objectShape.x - this.actualShape.x) / this.trackerSpeed; 
      this.actualShape.y += (this.objectShape.y - this.actualShape.y) / this.trackerSpeed; 
      }
    if (this.actualShape) {
      this.ctx.strokeRect(this.actualShape.x - this.trackerSize / 2,
        this.actualShape.y - this.trackerSize / 2, this.trackerSize, this.trackerSize);
    }
  }
  
  private blend(frame: ImageData) {
    if (!this.lastImageData) { 
      this.lastImageData = frame;
    }
    var blendedData = this.ctx.createImageData(this.video.width, this.video.height);
    this.createBlendedMask(blendedData.data, frame.data, this.lastImageData.data);
    this.ctxBlended.putImageData(blendedData, 0, 0);
    this.frameBlended = this.ctxBlended.getImageData(0, 0, this.video.width, this.video.height);
    this.lastImageData = frame;
  }

  private createBlendedMask(target: Uint8ClampedArray, data1: Uint8ClampedArray, data2: Uint8ClampedArray) {
    if (data1.length != data2.length) return null;
    var i = 0;
    while (i < (data1.length * 0.25)) {
      var average1 = (data1[4*i] + data1[4*i+1] + data1[4*i+2]) / 3;
      var average2 = (data2[4*i] + data2[4*i+1] + data2[4*i+2]) / 3;
      var diff = (Math.abs(average1 - average2) > this.minSpeed) ? 0xFF : 0
      target[4*i] = diff;
      target[4*i+1] = diff;
      target[4*i+2] = diff;
      target[4*i+3] = 0xFF;
      ++i;
    }
  }

  private isObjectColor(frame: ImageData, frameBlended: ImageData, pos: number): boolean {
    const frameData = frame.data;
    const frameBlendedData = frameBlended.data;
    if( (frameBlendedData[pos+0]+frameBlendedData[pos+1]+frameBlendedData[pos+2])/3 < 255 ) {
      return false;
    }
    for (let i = pos-4; i <= pos + 4; i += 4){
      const hsv = this.rgbToHsv([frameData[i+0], frameData[i+1], frameData[i+2]]);
      if(hsv[0] < this.hsvColor[0] - this.colorTolerance[0]/2 || hsv[0] > this.hsvColor[0] + this.colorTolerance[0]/2 ||
        hsv[1] < this.hsvColor[1] - this.colorTolerance[1]/2 || hsv[1] > this.hsvColor[1] + this.colorTolerance[1]/2 ||
        hsv[2] < this.hsvColor[2] - this.colorTolerance[2]/2 || hsv[2] > this.hsvColor[2] + this.colorTolerance[2]/2)
        return false;
    }
    return true;
  }

  private setColorToTrack(hsv: number[]) {
    this.hsvColor = hsv;
  }

  private rgbToHsv(rgb: number[]): number[] {
    let r = rgb[0]/255, g = rgb[1] /255, b = rgb[2]/255;
    let max = Math.max(r, g, b), min = Math.min(r, g, b);
    let h, s, v = max;
    let d = max - min;
    s = max === 0 ? 0 : d / max;
    if (max === min) {
      h = 0; // achromatic
    } else {
      switch(max) {
        case r: h = (g - b) / d + (g < b ? 6 : 0); break;
        case g: h = (b - r) / d + 2; break;
        case b: h = (r - g) / d + 4; break;
      }
      h /= 6;
    }
    return [h, s, v];
  }

  private hex2rgb(col: string): number[] {
    let r, g, b;
    if (col.charAt(0) == '#') {
      col = col.substr(1);
    }
    r = col.charAt(0) + col.charAt(1);
    g = col.charAt(2) + col.charAt(3);
    b = col.charAt(4) + col.charAt(5);
    r = parseInt(r, 16);
    g = parseInt(g, 16);
    b = parseInt(b, 16);
    return [r, g, b];
  }

  private rgb2hex(red: number, green: number, blue: number): string {
    let rgb = Array.apply(null, arguments).join().match(/\d+/g);
    rgb = ((rgb[0] << 16) + (rgb[1] << 8) + (+rgb[2])).toString(16);
    return rgb;
  }

  pickColor(event: MouseEvent) {
    const imageData = this.ctx.getImageData(0, 0, this.video.width, this.video.height);
    const data = imageData.data;
    const pos = this.video.width * event.layerY + event.layerX;
    const red = data[pos * 4 + 0];
    const green = data[pos * 4 + 1];
    const blue = data[pos * 4 + 2];
    this.colorToTrack= '#' + this.rgb2hex(red, green, blue);
    this.setColorToTrack(this.rgbToHsv([red, green, blue]));
  }
}
