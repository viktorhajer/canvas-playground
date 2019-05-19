import {Component} from '@angular/core';
import {StreamService} from '../../shared/services/stream.service';
import {ColorHelper} from 'src/app/shared/helpers/color.helper';
import {CanvasComponent} from 'src/app/shared/components/canvas.component';

@Component({
  templateUrl: './tracking.component.html',
  styleUrls: ['tracking.component.scss', '../../filters/components/filters.component.scss']
})
export class TrackingComponent extends CanvasComponent {

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

  private canvasBlended: HTMLCanvasElement;
  private ctxBlended: CanvasRenderingContext2D;

  constructor(streamService: StreamService) {
    super(streamService);
    this.setColorToTrack(ColorHelper.rgbToHsv(ColorHelper.hex2rgb(this.colorToTrack)));
  }

  init() {
    this.canvasBlended = document.createElement('canvas');
    this.canvasBlended.width = this.video.width;
    this.canvasBlended.height = this.video.height;
	  this.ctxBlended = this.canvasBlended.getContext("2d");
  }

  computeFrame() {
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
      const hsv = ColorHelper.rgbToHsv([frameData[i+0], frameData[i+1], frameData[i+2]]);
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

  pickColor(event: MouseEvent) {
    const imageData = this.ctx.getImageData(0, 0, this.video.width, this.video.height);
    const data = imageData.data;
    const pos = this.video.width * event.layerY + event.layerX;
    const red = data[pos * 4 + 0];
    const green = data[pos * 4 + 1];
    const blue = data[pos * 4 + 2];
    this.colorToTrack= '#' + ColorHelper.rgb2hex(red, green, blue);
    this.setColorToTrack(ColorHelper.rgbToHsv([red, green, blue]));
  }
}
