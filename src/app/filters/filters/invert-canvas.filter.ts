import {CanvasFilter, FilterParamType} from './canvas.filter';

export class InvertCanvasFilter extends CanvasFilter {

  constructor() {
    super('Invert (canvas)', false, FilterParamType.RANGE, 0, 0, 100);
  }

  filter(context: CanvasRenderingContext2D) {
    let originalFilter = '';
    if (!!context.filter && context.filter !== 'none') {
      originalFilter = context.filter;
    }
    context.filter = `${originalFilter} invert(${(this.param)}%)`;
  }
}