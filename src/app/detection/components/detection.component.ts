import {Component} from '@angular/core';
import {StreamService} from '../../shared/services/stream.service';
import {AreaDetector} from '../detectors/area.detector';
import {DarkDetector} from '../detectors/dark.detector';
import {LightDetector} from '../detectors/light.detector';
import {CanvasComponent} from 'src/app/shared/components/canvas.component';

@Component({
  templateUrl: './detection.component.html',
  styleUrls: ['detection.component.scss']
})
export class DetectionComponent extends CanvasComponent {

  detectors: AreaDetector[] = [];
  selectedDetector: AreaDetector;

  constructor(streamService: StreamService) {
    super(streamService);
    this.detectors = [
      new DarkDetector(), new LightDetector()
    ];
  }

  isSelectedDetector(detector: AreaDetector): boolean {
    return !!this.selectedDetector && this.selectedDetector.label === detector.label;
  }

  selectDetector(detector: AreaDetector) {
    if (this.isSelectedDetector(detector)) {
      this.selectedDetector = null;
    } else if (!detector.enabled) {
      if (!!this.selectedDetector) {
        this.selectedDetector.toggleEnabled();
      }
      this.selectedDetector = detector;
    }
    detector.toggleEnabled();
  }

  computeFrame() {
    if (!!this.selectedDetector) {
      this.selectedDetector.detect(this.ctx, this.video.width, this.video.height);
    }
  }
}
