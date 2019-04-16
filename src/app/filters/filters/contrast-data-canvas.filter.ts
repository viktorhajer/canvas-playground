import {CanvasFilter, FilterParamType} from './canvas.filter';

export class ContrastDataCanvasFilter extends CanvasFilter {

  constructor() {
    super('Contrast', false, FilterParamType.RANGE, 0, -100, 100);
  }

  filter(context: CanvasRenderingContext2D, width: number, height: number) {
    const imageData = context.getImageData(0, 0, width, height);
    const data = imageData.data;
    const factor = (259 * (this.param + 255)) / (255 * (259 - this.param));
    for (let i = 0; i < data.length; i += 4) {
      data[i] = factor * (data[i] - 128) + 128;
      data[i + 1] = factor * (data[i + 1] - 128) + 128;
      data[i + 2] = factor * (data[i + 2] - 128) + 128;
    }
    context.putImageData(imageData, 0, 0);
  }
}