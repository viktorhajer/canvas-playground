import {AreaDetector} from './area.detector';

export class DarkDetector extends AreaDetector {

  counter = 0;
  prevIndex: string; 

  constructor() {
    super('Dark');
  }

  processPixel(data: Uint8ClampedArray, horizontal: number, vertical: number, index: number) {
    const avg = (data[index] + data[index + 1] + data[index + 2]) / 3 / 256;
    const areaIndex = this.getAreaIndex(horizontal, vertical);
    this.counter++;
    if (!this.prevIndex || this.prevIndex !== areaIndex) { 
      this.prevIndex = areaIndex;
      this.counter = 1;
    }
    this.areas[areaIndex] = !!this.areas[areaIndex] ? (this.areas[areaIndex] + avg) : avg;
    this.numberOfPixelsInAreas[areaIndex] = this.counter;
  }

  highlightArea(data: Uint8ClampedArray, horizontal: number, vertical: number, index: number) {
    if (!this.selectedIndex) {
      this.findHighlightedArea();
    }
    const areaIndex = this.getAreaIndex(horizontal, vertical)
    if (areaIndex === this.selectedIndex)  {
      this.highlightPixel(data, index);
    }
  }

  protected reset() {
    this.counter = 0;
    this.prevIndex = null; 
  }

  private findHighlightedArea() {
    this.selectedIndex = '0-0';
    let m = this.areas[this.selectedIndex] / this.numberOfPixelsInAreas[this.selectedIndex];
    const keys = Object.keys(this.areas);
    for( let i = 0; i < keys.length; i++) {
      const key = keys[i];
      if (this.areas[key] / this.numberOfPixelsInAreas[key] < m) { 
        m = this.areas[key] / this.numberOfPixelsInAreas[key];
        this.selectedIndex = key;
      }
    }
  }
}
