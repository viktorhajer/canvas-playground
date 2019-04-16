import {CanvasFilter, FilterParamType} from './canvas.filter';

export class SharpDataCanvasFilter extends CanvasFilter {

  constructor() {
    super('Sharpening', false, FilterParamType.RANGE, 1, 1, 90);
  }

  filter(context: CanvasRenderingContext2D, width: number, height: number) {
    const weights = [0, -1, 0, -1, 5, -1, 0, -1, 0];
    const katet = Math.round(Math.sqrt(weights.length)),
      half = (katet * 0.5) | 0,
      dstData = context.createImageData(width, height),
      dstBuff = dstData.data,
      srcBuff = context.getImageData(0, 0, width, height).data;

    let y = height;
    while (y--) {
      let x = width;
      while (x--) {
        const sy = y;
        const sx = x;
        const dstOff = (y * width + x) * 4;
        let r = 0, g = 0, b = 0, a = 0;
        for (let cy = 0; cy < katet; cy++) {
          for (let cx = 0; cx < katet; cx++) {
            const scy = sy + cy - half;
            const scx = sx + cx - half;
            if (scy >= 0 && scy < height && scx >= 0 && scx < width) {
              const srcOff = (scy * width + scx) * 4;
              const wt = weights[cy * katet + cx];
              r += srcBuff[srcOff] * wt;
              g += srcBuff[srcOff + 1] * wt;
              b += srcBuff[srcOff + 2] * wt;
              a += srcBuff[srcOff + 3] * wt;
            }
          }
        }
        const value = this.param / 100;
        dstBuff[dstOff] = r * value + srcBuff[dstOff] * (1 - value);
        dstBuff[dstOff + 1] = g * value + srcBuff[dstOff + 1] * (1 - value);
        dstBuff[dstOff + 2] = b * value + srcBuff[dstOff + 2] * (1 - value);
        dstBuff[dstOff + 3] = srcBuff[dstOff + 3];
      }
    }
    context.putImageData(dstData, 0, 0);
  }
}
