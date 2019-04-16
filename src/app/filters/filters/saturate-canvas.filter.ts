import {CanvasFilter, FilterParamType} from './canvas.filter';

export class SaturateCanvasFilter extends CanvasFilter {

  constructor() {
    super('Saturate (canvas)', false, FilterParamType.RANGE, 100, 0, 300);
  }

  filter(context: CanvasRenderingContext2D) {
    let originalFilter = '';
    if (!!context.filter && context.filter !== 'none') {
      originalFilter = context.filter;
    }
    context.filter = `${originalFilter} saturate(${(this.param)}%)`;
  }
}