export abstract class CanvasFilter {
  constructor(public label: string, public enabled: boolean, public paramType: FilterParamType, public param?: number,
              public rangeStart?: number, public rangeEnd?: number) {
  }
  abstract filter(context: CanvasRenderingContext2D, width?: number, height?: number);

  toggleEnabled() {
    this.enabled = !this.enabled;
  }

  isRangeType(): boolean {
    return this.paramType === FilterParamType.RANGE;
  }
}

export enum FilterParamType {
  RANGE,
  SWITCH
}
