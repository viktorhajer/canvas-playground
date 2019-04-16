import {CanvasFilter, FilterParamType} from './canvas.filter';

export class BlurCanvasFilter extends CanvasFilter {

  constructor() {
    super('Blur', false, FilterParamType.RANGE, 0, 0, 30);
  }

  filter(context: CanvasRenderingContext2D) {
    let originalFilter = '';
    if (!!context.filter && context.filter !== 'none') {
      originalFilter = context.filter;
    }
    context.filter =  `${originalFilter} blur(${this.param}px)`;
  }
}