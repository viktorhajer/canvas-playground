export abstract class AreaDetector {
  areas = [];
  numberOfPixelsInAreas = [];
  selectedIndex: string;
  enabled = false;

  constructor(public label: string){
  }

  detect(context: CanvasRenderingContext2D, width: number, height: number) {
    const imageData = context.getImageData(0, 0, width, height);
    const data = imageData.data;
    this.selectedIndex = null;
    this.areas = [];
    this.numberOfPixelsInAreas = [];
    this.reset();
    this.doOperation(data, width);
    this.doOperation(data, width, false);
    context.putImageData(imageData, 0, 0);
  }

  toggleEnabled() {
    this.enabled = !this.enabled;
  }

  protected abstract processPixel(data: Uint8ClampedArray, horizontal: number, vertical: number, index: number);
  protected abstract highlightArea(data: Uint8ClampedArray, horizontal: number, vertical: number, index: number);
  protected abstract reset();

  protected getAreaIndex(horizontal: number, vertical: number, size: number = 50): string {
    return Math.floor(horizontal / size) + '-' + Math.floor(vertical / size);
  }

  protected highlightPixel(data: Uint8ClampedArray, index: number) {
    data[index] = 256;
  }

  private doOperation(data: Uint8ClampedArray, width: number, isProcess = true) {
    let vertical = 0;
    for (let i = 0; i < data.length; i += 4) {
      const mod = i % ( width * 4);
      const horizontal = Math.floor(mod / 4);
      if (mod === 0 && i > 0) {
        vertical++;
      }
      if (isProcess) {
        this.processPixel(data, horizontal, vertical, i);
      } else {
        this.highlightArea(data, horizontal, vertical, i);
      }
    }
  }
}
