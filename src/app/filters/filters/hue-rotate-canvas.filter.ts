import {CanvasFilter, FilterParamType} from './canvas.filter';

export class HueRotateCanvasFilter extends CanvasFilter {

  constructor() {
    super('Hue rotation', false, FilterParamType.RANGE, 0, 0, 360);
  }

  filter(context: CanvasRenderingContext2D) {
    let originalFilter = '';
    if (!!context.filter && context.filter !== 'none') {
      originalFilter = context.filter;
    }
    context.filter = `${originalFilter} hue-rotate(${(this.param)}deg)`;
  }
}