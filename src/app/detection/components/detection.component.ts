import {Component, OnDestroy} from '@angular/core';
import {StreamService} from '../../shared/services/stream.service';
import {AreaDetector} from '../detectors/area.detector';
import {DarkDetector} from '../detectors/dark.detector';
import {LightDetector} from '../detectors/light.detector';

@Component({
  templateUrl: './detection.component.html',
  styleUrls: ['detection.component.scss']
})
export class DetectionComponent implements OnDestroy {

  interval: any;
  streamToDisplay: MediaStream;
  video: HTMLVideoElement;
  detectors: AreaDetector[] = [];
  selectedDetector: AreaDetector;

  private canvas: HTMLCanvasElement;
  private ctx: CanvasRenderingContext2D;

  constructor(private streamService: StreamService) {
    if (!!this.streamService.streams.length) {
      this.streamToDisplay = this.streamService.streams[0];
    }
    this.detectors = [
      new DarkDetector(), new LightDetector()
    ];
  }

  ngOnDestroy() {
    this.stop();
  }

  start() {
    this.video = <HTMLVideoElement>document.createElement('video');
    this.video.srcObject = this.streamToDisplay;
    this.video.width = 640;
    this.video.height = 480;
    this.video.autoplay = true;
    this.canvas = <HTMLCanvasElement>document.getElementById('canvas');
    this.ctx = this.canvas.getContext('2d');
    this.interval = setInterval(() => this.update(), 30);
  }

  stop() {
    clearInterval(this.interval);
    this.interval = null;
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

  private update() {
    if (this.video) {
      const w = this.video.width;
      const h = this.video.height;
      this.ctx.drawImage(this.video, 0, 0, w, h);
      this.ctx.filter = 'none';
      if (!!this.selectedDetector) {
        this.selectedDetector.detect(this.ctx, w, h);
      }
    }
  }
}
