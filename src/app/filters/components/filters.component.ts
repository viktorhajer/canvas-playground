import {Component, OnDestroy} from '@angular/core';
import {StreamService} from '../../shared/services/stream.service';
import {ContrastCanvasFilter} from '../filters/contrast-canvas.filter';
import {CanvasFilter} from '../filters/canvas.filter';
import {BlurCanvasFilter} from '../filters/blur-canvas.filter';
import {BrightnessCanvasFilter} from '../filters/brightness-canvas.filter';
import {ContrastDataCanvasFilter} from '../filters/contrast-data-canvas.filter';
import {GrayscaleDataCanvasFilter} from '../filters/grayscale-data-canvas.filter';
import {InvertDataCanvasFilter} from '../filters/invert-data-canvas.filter';
import {SharpDataCanvasFilter} from '../filters/sharp-data-canvas.filter';
import {GrayscaleCanvasFilter} from '../filters/grayscale-canvas.filter';
import {InvertCanvasFilter} from '../filters/invert-canvas.filter';
import {SaturateCanvasFilter} from '../filters/saturate-canvas.filter';
import {HueRotateCanvasFilter} from '../filters/hue-rotate-canvas.filter';
import {ThresholdDataCanvasFilter} from '../filters/threshold-data-canvas.filter';
import {ConvolveDataCanvasFilter} from '../filters/convolve-data-canvas.filter';

@Component({
  templateUrl: './filters.component.html',
  styleUrls: ['filters.component.scss']
})
export class FiltersComponent implements OnDestroy {

  interval: any;
  streamToDisplay: MediaStream;
  video: HTMLVideoElement;
  filters: CanvasFilter[] = [];
  convolveFilter = new ConvolveDataCanvasFilter();

  private canvas: HTMLCanvasElement;
  private ctx: CanvasRenderingContext2D;

  constructor(private streamService: StreamService) {
    if (!!this.streamService.streams.length) {
      this.streamToDisplay = this.streamService.streams[0];
    }
    this.filters = [
      new SharpDataCanvasFilter(),
      new InvertDataCanvasFilter(), new InvertCanvasFilter(), new HueRotateCanvasFilter(),
      new GrayscaleDataCanvasFilter(), new GrayscaleCanvasFilter(), new SaturateCanvasFilter(),
      new ContrastDataCanvasFilter(), new ContrastCanvasFilter(),
      new BlurCanvasFilter(), new BrightnessCanvasFilter(),
      new ThresholdDataCanvasFilter()
    ];
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
    if (this.video) {
      const w = this.video.clientWidth;
      const h = this.video.clientHeight;
      this.ctx.drawImage(this.video, 0, 0, w, h);
      this.ctx.filter = 'none';
      if (this.convolveFilter.enabled) {
        this.convolveFilter.filter(this.ctx, w, h);
      }
      this.filters.filter(f => f.enabled).forEach(f => {
        f.filter(this.ctx, w, h);
      });
    }
  }
}
