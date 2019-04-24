import {CanvasFilter, FilterParamType} from './canvas.filter';

export class InvertDataCanvasFilter extends CanvasFilter {

  constructor() {
    super('Invert 2', false, FilterParamType.SWITCH);
  }

  filter(context: CanvasRenderingContext2D, width: number, height: number) {
    const imageData = context.getImageData(0, 0, width, height);
    const data = imageData.data;
    for (let i = 0; i < data.length; i += 4) {
      data[i] = 255 - data[i]; // red
      data[i + 1] = 255 - data[i + 1]; // green
      data[i + 2] = 255 - data[i + 2]; // blue
    }
    context.putImageData(imageData, 0, 0);
  }
}
