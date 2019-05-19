import {Component} from '@angular/core';
import {StreamService} from '../../shared/services/stream.service';
import {ColorHelper} from 'src/app/shared/helpers/color.helper';
import {CanvasComponent} from 'src/app/shared/components/canvas.component';

const MARKER_SIZE = 0.6;
const MARKER_SPEED = 20;
const MARKER_TEXT_COLOR = '#ffffff';

@Component({
  templateUrl: './marker.component.html',
  styleUrls: ['marker.component.scss']
})
export class MarkerComponent extends CanvasComponent {

  label = 'Test';
  markerColor = '#20a8da';
  private markers: Marker[] = [];

  constructor(streamService: StreamService) {
    super(streamService);
  }

  computeFrame() {
    this.markers.forEach(m => m.draw(this.ctx));
  }    

  addMarker(event: MouseEvent) {
    this.markers.push(new Marker(event.layerX, event.layerY, this.label,
      ColorHelper.rgb2String(ColorHelper.hex2rgb(this.markerColor))));
  }
}

class Marker {
  private phase = 1;
  private directionFlag = true;

  constructor(public x: number, public y: number, public label: string, public color: string) {
  }

  draw(ctx: CanvasRenderingContext2D) {
    ctx.fillStyle = ColorHelper.replaceAlphaInColor(this.color, Math.floor(MARKER_SPEED / this.phase * 10) / 10);
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
