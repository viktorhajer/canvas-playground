export class ColorHelper {

  static rgbToHsv(rgb: number[]): number[] {
    let r = rgb[0]/255, g = rgb[1] /255, b = rgb[2]/255;
    let max = Math.max(r, g, b), min = Math.min(r, g, b);
    let h, s, v = max;
    let d = max - min;
    s = max === 0 ? 0 : d / max;
    if (max === min) {
      h = 0; // achromatic
    } else {
      switch(max) {
        case r: h = (g - b) / d + (g < b ? 6 : 0); break;
        case g: h = (b - r) / d + 2; break;
        case b: h = (r - g) / d + 4; break;
      }
      h /= 6;
    }
    return [h, s, v];
  }

  static hex2rgb(col: string): number[] {
    let r, g, b;
    if (col.charAt(0) == '#') {
      col = col.substr(1);
    }
    r = col.charAt(0) + col.charAt(1);
    g = col.charAt(2) + col.charAt(3);
    b = col.charAt(4) + col.charAt(5);
    r = parseInt(r, 16);
    g = parseInt(g, 16);
    b = parseInt(b, 16);
    return [r, g, b];
  }

  static rgb2hex(red: number, green: number, blue: number): string {
    let rgb = Array.apply(null, arguments).join().match(/\d+/g);
    rgb = ((rgb[0] << 16) + (rgb[1] << 8) + (+rgb[2])).toString(16);
    return rgb;
  }

  static rgb2String(rgb: number[]): string {
    return `rgba(${rgb[0]}, ${rgb[1]}, ${rgb[2]}, 1.0)`;
  }

  static replaceAlphaInColor(colorDefinition: string, alphaValue: number): string {
    const lastCommaPos = colorDefinition.lastIndexOf(',');
    if (lastCommaPos == -1) {
      return colorDefinition;
    }
    const colorPrefix = colorDefinition.slice(0, lastCommaPos + 1);
    return `${colorPrefix}${alphaValue})`;
  }
}
