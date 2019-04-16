import {CanvasFilter, FilterParamType} from './canvas.filter';

export class ThresholdDataCanvasFilter extends CanvasFilter {

  constructor() {
    super('Threshold', false, FilterParamType.RANGE, 125, 0, 255);
  }

  filter(context: CanvasRenderingContext2D, width: number, height: number) {
    const imageData = context.getImageData(0, 0, width, height);
    const data = imageData.data;
    for (let i = 0; i < data.length; i += 4) {
      const v = (0.2126 * data[i] + 0.7152 * data[i + 1] + 0.0722 * data[i + 2] >= this.param) ? 255 : 0;
      data[i] = data[i + 1] = data[i + 2] = v;
    }
    context.putImageData(imageData, 0, 0);
  }
}