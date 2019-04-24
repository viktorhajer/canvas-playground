import {CanvasFilter, FilterParamType} from './canvas.filter';

export class GrayscaleDataCanvasFilter extends CanvasFilter {

  constructor() {
    super('Grayscale 2', false, FilterParamType.SWITCH);
  }

  filter(context: CanvasRenderingContext2D, width: number, height: number) {
    const imageData = context.getImageData(0, 0, width, height);
    const data = imageData.data;
    for (let i = 0; i < data.length; i += 4) {
      const avg = (data[i] + data[i + 1] + data[i + 2]) / 3;
      data[i] = avg; // red
      data[i + 1] = avg; // green
      data[i + 2] = avg; // blue
    }
    context.putImageData(imageData, 0, 0);
  }
}
