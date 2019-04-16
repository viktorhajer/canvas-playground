import {ChangeDetectorRef, Component} from '@angular/core';
import {StreamService} from '../../shared/services/stream.service';
import {MessageService} from '../../shared/services/message.service';
import {Logger} from '../../shared/models/logger.model';
import {LoggerFactory} from '../../shared/services/logger.service';

@Component({
  templateUrl: './inspector.component.html',
  styleUrls: ['inspector.component.scss']
})
export class InspectorComponent {

  private logger: Logger;
  selectedStream: MediaStream;
  streamToDisplay: MediaStream;
  videoDimension = '';
  fullSize = true;

  constructor(private streamService: StreamService,
              private messageService: MessageService,
              loggerFactory: LoggerFactory) {
    this.logger = loggerFactory.create('InspectorComponent');
  }

  getStreams(): MediaStream[] {
    return this.streamService.streams;
  }

  hasSelected(): boolean {
    return !!this.selectedStream;
  }

  selectStream(stream: MediaStream) {
    if (this.isSelected(stream)) {
      this.selectedStream = null;
      this.streamToDisplay = null;
      this.videoDimension = '';
    } else {
      this.selectedStream = stream;
      this.streamToDisplay = stream;
      this.videoDimension = '';
    }
  }

  removeStream(stream: MediaStream) {
    this.streamService.setStream(stream);
  }

  isSelected(stream: MediaStream): boolean {
    return this.hasSelected() && this.selectedStream.id === stream.id;
  }

  getStreamInfo(): string[] {
    if (this.hasSelected()) {
      const output = [`ID: ${this.selectedStream.id}`, `active: ${this.selectedStream.active}`];
      return output;
    }
    return [];
  }

  getMediaTrackInfo(track: MediaStreamTrack): string[] {
    const output = [];
    output.push('ID: ' + track.id);
    output.push('Isolated: ' + track.isolated);
    output.push('Kind: ' + track.kind);
    output.push('Label: ' + track.label);
    output.push('Muted: ' + track.muted);
    output.push('ReadyState: ' + track.readyState);
    output.push('Constraints: ' + JSON.stringify(track.getConstraints()));
    output.push('Capabilities: ' + JSON.stringify(track.getCapabilities()));
    output.push('Settings: ' + JSON.stringify(track.getSettings()));
    return output;
  }

  applyMediaTrackConstraints(constraints: MediaTrackConstraints) {
    this.logger.logEvent('Constraints applied', 'applyMediaTrackConstraints', constraints);
    this.selectedStream.getVideoTracks()[0].applyConstraints(constraints)
      .then(() => {
        this.messageService.info('Settings have been applied.');
      })
      .catch(error => this.messageService.error(`Error (${ error.name }): ${ error.message }`))
      .then(() => Array.prototype.slice.call(document.getElementsByTagName('video'))
        .forEach(t => (<HTMLVideoElement>t).play()));
  }

  getInfoBoxContent(stream?: MediaStream): { size: string, frameRate: string, aspectRatio: string } {
    const settings = (stream ? stream : this.selectedStream).getVideoTracks()[0].getSettings();
    const information = {size: '-', frameRate: '-', aspectRatio: '-'};
    if (!!settings.width && !!settings.height) {
      information.size = settings.width + ' x ' + settings.height;
    }
    if (!!settings.frameRate) {
      information.frameRate = `${ settings.frameRate }`;
    }
    if (!!settings.aspectRatio) {
      information.aspectRatio = `${ Math.round(settings.aspectRatio * 10000) / 10000 }`;
    }
    return information;
  }

  setVideoDimension() {
    const element = <HTMLVideoElement>document.getElementById('original-video');
    if (element) {
      this.videoDimension = element.videoWidth + ' x ' + element.videoHeight;
    }
  }

  selectTab(event) {
    if (event.index === 2) {
      this.streamToDisplay = null;
      setTimeout(() => this.streamToDisplay = this.selectedStream, 200);
    }
  }

  toggleFullSize() {
    this.fullSize = !this.fullSize;
  }

  getSettingsString(): string {
    if (this.hasSelected() && !!this.selectedStream.getVideoTracks().length) {
      return JSON.stringify(this.selectedStream.getVideoTracks()[0].getSettings());
    }
    return '';
  }

  getCapabilitiesString(): string {
    if (this.hasSelected() && !!this.selectedStream.getVideoTracks().length) {
      return JSON.stringify(this.selectedStream.getVideoTracks()[0].getCapabilities());
    }
    return '';
  }
}
