import {Component, OnInit} from '@angular/core';
import {StreamService} from '../../shared/services/stream.service';

const MARKER_SIZE = 0.4;
const MARKER_SPEED = 15;
const MARKER_COLOR = '#20a8da';
const MARKER_TEXT_COLOR = '#ffffff';

@Component({
  templateUrl: './marker.component.html',
  styleUrls: ['marker.component.scss']
})
export class MarkerComponent implements OnInit {

  streamToDisplay: MediaStream;
  video: HTMLVideoElement;
  label = 'Test';

  private canvas: HTMLCanvasElement;
  private ctx: CanvasRenderingContext2D;
  private markers: Marker[] = [];

  constructor(private streamService: StreamService) {
    if (!!this.streamService.streams.length) {
      this.streamToDisplay = this.streamService.streams[0];
    }
  }

  ngOnInit() {
    this.start();
  }

  private start() {
    this.video = <HTMLVideoElement>document.createElement('video');
    this.video.srcObject = this.streamToDisplay;
    this.video.width = 640;
    this.video.height = 480;
    this.video.autoplay = true;

    this.canvas = <HTMLCanvasElement>document.getElementById('canvas');
    this.ctx = this.canvas.getContext('2d');
    this.update();
  }

  private update() {
    this.ctx.drawImage(this.video, 0, 0, this.video.width, this.video.height);
    this.computeFrame();
    setTimeout(() => this.update(), 1);
  }

  private computeFrame() {
    this.markers.forEach(m => m.draw(this.ctx));
  }    

  addMarker(event: MouseEvent) {
    this.markers.push(new Marker(event.layerX, event.layerY, this.label));
  }
}

class Marker {
  private phase = 1;
  private directionFlag = true;

  constructor(public x: number, public y: number, public label: string) {
    console.log(this.label);
  }

  draw(ctx: CanvasRenderingContext2D) {
    ctx.fillStyle = MARKER_COLOR;
    ctx.beginPath();
    ctx.arc(this.x, this.y, MARKER_SIZE * this.phase, 0, 2 * Math.PI);
    ctx.fill();
    ctx.fillStyle = MARKER_TEXT_COLOR;
    ctx.font = "10px Arial";
    ctx.fillText(this.label, this.x, this.y - MARKER_SIZE * MARKER_SPEED);

    if (this.phase === 0 || this.phase === MARKER_SPEED) {
      this.directionFlag = !this.directionFlag;
    }
    this.phase = this.directionFlag ? (this.phase + 1) : (this.phase - 1);
  }
}
