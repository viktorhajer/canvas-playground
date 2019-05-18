import {Component, OnInit} from '@angular/core';
import {StreamService} from '../../shared/services/stream.service';
import {ContrastCanvasFilter} from '../filters/contrast-canvas.filter';
import {CanvasFilter} from '../filters/canvas.filter';
import {BlurCanvasFilter} from '../filters/blur-canvas.filter';
import {BrightnessCanvasFilter} from '../filters/brightness-canvas.filter';
import {SharpDataCanvasFilter} from '../filters/sharp-data-canvas.filter';
import {GrayscaleCanvasFilter} from '../filters/grayscale-canvas.filter';
import {InvertCanvasFilter} from '../filters/invert-canvas.filter';
import {SaturateCanvasFilter} from '../filters/saturate-canvas.filter';
import {HueRotateCanvasFilter} from '../filters/hue-rotate-canvas.filter';
import {ThresholdDataCanvasFilter} from '../filters/threshold-data-canvas.filter';

@Component({
  templateUrl: './filters.component.html',
  styleUrls: ['filters.component.scss']
})
export class FiltersComponent implements OnInit {

  enabled = false;
  streamToDisplay: MediaStream;
  video: HTMLVideoElement;
  filters: CanvasFilter[] = [];
  selectedFilter: CanvasFilter;

  private canvas: HTMLCanvasElement;
  private ctx: CanvasRenderingContext2D;

  constructor(private streamService: StreamService) {
    if (!!this.streamService.streams.length) {
      this.streamToDisplay = this.streamService.streams[0];
    }
    this.filters = [
      new SharpDataCanvasFilter(),
      new InvertCanvasFilter(), new HueRotateCanvasFilter(),
      new GrayscaleCanvasFilter(), new SaturateCanvasFilter(),
      new ContrastCanvasFilter(),
      new BlurCanvasFilter(), new BrightnessCanvasFilter(),
      new ThresholdDataCanvasFilter()
    ];
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
    this.enabled = true;
    this.video = <HTMLVideoElement>document.createElement('video');
    this.video.srcObject = this.streamToDisplay;
    this.video.width = 640;
    this.video.height = 480;
    this.video.autoplay = true;
    this.canvas = <HTMLCanvasElement>document.getElementById('canvas');
    this.ctx = this.canvas.getContext('2d');
    this.update();
  }

  isSelectedFilter(filter: CanvasFilter): boolean {
    return !!this.selectedFilter && this.selectedFilter.label === filter.label;
  }

  selectFilter(filter: CanvasFilter) {
    if (this.isSelectedFilter(filter)) {
      this.selectedFilter = null;
    } else if (!filter.enabled) {
      this.selectedFilter = filter;
    }
    filter.toggleEnabled();
  }

  private update() {
    if (this.video) {
      const w = this.video.width;
      const h = this.video.height;
      this.ctx.drawImage(this.video, 0, 0, w, h);
      this.ctx.filter = 'none';
      this.filters.filter(f => f.enabled).forEach(f => {
        f.filter(this.ctx, w, h);
      });
    }
    if (this.enabled) {
      setTimeout(() => this.update(), 1);
    }
  }
}
