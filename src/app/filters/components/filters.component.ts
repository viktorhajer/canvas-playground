import {Component} from '@angular/core';
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
import {CanvasComponent} from 'src/app/shared/components/canvas.component';

@Component({
  templateUrl: './filters.component.html',
  styleUrls: ['filters.component.scss']
})
export class FiltersComponent extends CanvasComponent {

  filters: CanvasFilter[] = [];
  selectedFilter: CanvasFilter;


  constructor(streamService: StreamService) {
    super(streamService);
    this.filters = [
      new SharpDataCanvasFilter(),
      new InvertCanvasFilter(), new HueRotateCanvasFilter(),
      new GrayscaleCanvasFilter(), new SaturateCanvasFilter(),
      new ContrastCanvasFilter(),
      new BlurCanvasFilter(), new BrightnessCanvasFilter(),
      new ThresholdDataCanvasFilter()
    ];
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

  computeFrame() {
    this.ctx.filter = 'none';
    this.filters.filter(f => f.enabled).forEach(f => {
      f.filter(this.ctx, this.video.width, this.video.height);
    });
  }
}
