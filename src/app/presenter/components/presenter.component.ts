import {Component} from '@angular/core';
import {StreamService} from '../../shared/services/stream.service';
import {ColorHelper} from 'src/app/shared/helpers/color.helper';
import {CanvasHelper} from 'src/app/shared/helpers/canvas.helper';
import {CanvasComponent} from 'src/app/shared/components/canvas.component';

const MARKER_TEXT_COLOR = '#ffffff';
const MAXIMUM_POINTER_RADIUS = 100;
const DEFAULT_POINTER_RADIUS = 5;
const INCREMENT_POINTER_RADIUS = 6;
const CLICK_ANIMATION_LENGTH = 15;
const CLICK_MULTIPLIER = 10;

@Component({
  templateUrl: './presenter.component.html',
  styleUrls: ['presenter.component.scss']
})
export class PresenterComponent extends CanvasComponent {

  label = 'Test';
  markerColor = '#ffffff';

  private pointerRadiusInc = 0;
  private pointerPosition: {x: number, y: number};
  private clickedPosition: {x: number, y: number};
	private animationCounter = CLICK_ANIMATION_LENGTH;

  constructor(streamService: StreamService) {
    super(streamService);
  }

  init() {
    this.canvas.addEventListener('mousemove', (event) => this.movePointer(event));
    this.canvas.addEventListener('click', () => this.clickPointer());
    this.canvas.addEventListener('wheel', (event) => this.resizePointer(event));
  }

  computeFrame() {
	  this.animationCounter = Math.min(this.animationCounter + 1, CLICK_ANIMATION_LENGTH);
    let pointerColor = ColorHelper.rgb2String(ColorHelper.hex2rgb(this.markerColor));
	  let pointerRadius = DEFAULT_POINTER_RADIUS + this.pointerRadiusInc;
	  if (this.pointerPosition) {
      CanvasHelper.drawCircle(this.canvas, this.ctx, this.pointerPosition, pointerRadius, pointerColor, true);
      this.ctx.fillStyle = MARKER_TEXT_COLOR;
      this.ctx.font = "12px Arial";
      this.ctx.fillText(this.label, this.pointerPosition.x, this.pointerPosition.y - pointerRadius - 2);
	  }
    if (this.animationCounter < CLICK_ANIMATION_LENGTH) {
      CanvasHelper.drawCircle(this.canvas, this.ctx, this.clickedPosition, pointerRadius, pointerColor, false);
      const animationParam = this.animationCounter / CLICK_ANIMATION_LENGTH;
      pointerRadius *= CLICK_MULTIPLIER * animationParam;
      pointerColor = ColorHelper.replaceAlphaInColor(pointerColor, 1.0 - animationParam);
      CanvasHelper.drawCircle(this.canvas, this.ctx, this.clickedPosition, pointerRadius, pointerColor, true);
    }
  }    

  private clickPointer() {
    this.clickedPosition = this.pointerPosition;
    this.animationCounter = 0;
  }

  private movePointer(event: MouseEvent) {
    if (!!event.offsetX) {
      this.pointerPosition = {x: event.offsetX, y: event.offsetY};
    }
  }

  private resizePointer(event: MouseWheelEvent) {
    this.pointerRadiusInc += (event.deltaY < 0) ? INCREMENT_POINTER_RADIUS : INCREMENT_POINTER_RADIUS * -1;
    if (this.pointerRadiusInc < 0) {
      this.pointerRadiusInc = 0;
    } else if (this.pointerRadiusInc > MAXIMUM_POINTER_RADIUS) {
      this.pointerRadiusInc = MAXIMUM_POINTER_RADIUS;
    }
  }
}

