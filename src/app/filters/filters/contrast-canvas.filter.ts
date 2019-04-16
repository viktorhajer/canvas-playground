import {CanvasFilter, FilterParamType} from './canvas.filter';

export class ContrastCanvasFilter extends CanvasFilter {

  constructor() {
    super('Contrast (canvas)', false, FilterParamType.RANGE, 100, 0, 200);
  }

  filter(context: CanvasRenderingContext2D) {
    let originalFilter = '';
    if (!!context.filter && context.filter !== 'none') {
      originalFilter = context.filter;
    }
    context.filter = `${originalFilter} contrast(${(this.param)}%)`;
  }
}