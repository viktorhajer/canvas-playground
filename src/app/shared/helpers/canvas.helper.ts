export class CanvasHelper {

  static drawCircle(canvas: HTMLCanvasElement, ctx: CanvasRenderingContext2D,
    position: {x: number, y: number}, radius: number, color: string, fill = true) {
    const ratioX = canvas.width / canvas.offsetWidth;
    const ratioY = canvas.height / canvas.offsetHeight;
    ctx.beginPath();
    ctx.arc(position.x * ratioX, position.y * ratioY, radius, 0, 2 * Math.PI, false);
    if (fill) {
      ctx.fillStyle = color;
      ctx.fill();
    } else {
      ctx.strokeStyle = color;
      ctx.stroke();
    }
  }

}