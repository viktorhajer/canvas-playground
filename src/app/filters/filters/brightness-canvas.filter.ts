import {CanvasFilter, FilterParamType} from './canvas.filter';

export class BrightnessCanvasFilter extends CanvasFilter {

  constructor() {
    super('Brightness', false, FilterParamType.RANGE, 100, 0, 200);
  }

  filter(context: CanvasRenderingContext2D) {
    let originalFilter = '';
    if (!!context.filter && context.filter !== 'none') {
      originalFilter = context.filter;
    }
    context.filter = `${originalFilter} brightness(${(this.param)}%)`;
  }
}