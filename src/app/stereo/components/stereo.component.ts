import {Component, OnInit} from '@angular/core';
import {RecordService} from 'src/app/shared/services/record.service';

const CANVAS_WIDTH = 1280;
const CANVAS_HEIGHT = 480;

@Component({
  templateUrl: './stereo.component.html',
  styleUrls: ['stereo.component.scss', '../../filters/components/filters.component.scss']
})
export class StereoComponent implements OnInit {
    
  videoWidth: number;
  videoHeight: number;
  leftIndex = 0;
  rightIndex = 0;
  marginHorizontal = 0;
  marginVertical = 0;

  private canvas: HTMLCanvasElement;
  private ctx: CanvasRenderingContext2D;
  private leftVideo: HTMLVideoElement;
  private rightVideo: HTMLVideoElement;

  playing = false;
  paused = true;

  constructor(public recordService: RecordService) {
  }

  ngOnInit() {
    this.videoWidth = CANVAS_WIDTH / 2;
    this.videoHeight = CANVAS_HEIGHT;
    this.canvas = <HTMLCanvasElement>document.getElementById("canvas");
    this.canvas.width = CANVAS_WIDTH;
    this.canvas.height = CANVAS_HEIGHT;
    this.ctx = this.canvas.getContext("2d");
    let devices = [];
    this.initDevices().then(ds => {
        devices = ds;
        return this.setVideo(devices[this.leftIndex]);
      })
      .then(video => { 
        this.leftVideo = video;
        return this.setVideo(devices[this.rightIndex]);
      })
      .then(video => this.rightVideo = video)
      .then(() => this.recordService.init((<any>this.canvas).captureStream()));
  }

  togglePause() {
    if (!this.playing) {
      this.drawInterval();
      this.paused = false;
      this.playing = true;
    } else {
      this.paused = !this.paused;
    }
  }

  private drawInterval() {
    if (!this.paused) {
      const w = this.videoWidth - this.marginHorizontal;
      const h = this.videoHeight - this.marginVertical;
      const x = Math.floor((CANVAS_WIDTH - w  * 2) / 3);
      const y = Math.floor((CANVAS_HEIGHT - h) / 2);
      this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
      this.ctx.drawImage(this.leftVideo, x, y, w, h);
      this.ctx.drawImage(this.rightVideo, w + 2 * x, y, w, h);
    }
    setTimeout(() => this.drawInterval());
  }

  private initDevices(): Promise<any> {
	  return navigator.mediaDevices.enumerateDevices()
	    .then(devices => devices.filter(d => d.kind === 'videoinput').map(d => d.deviceId));
  }

  private setVideo(deviceId: string): Promise<HTMLVideoElement> {
	  const constraint = {
	    audio: false, video: { 
        width: this.videoWidth, height: this.videoHeight,
        deviceId: { exact: deviceId },
        resizeMode: 'none', frameRate: 24
      }
	  };
	  return navigator.mediaDevices.getUserMedia(constraint)
        .then(stream => this.setStreamToVideo(stream))
  }
  
  private setStreamToVideo(stream: MediaStream): HTMLVideoElement {
    const video = document.createElement('video');
    video.srcObject = stream;
    video.width = this.videoWidth;
    video.height = this.videoHeight;
    video.autoplay = true;
    return video;
  }
}
