import {Component} from '@angular/core';
import {StreamService} from '../../shared/services/stream.service';
import {DeviceInfo} from '../../shared/models/stream.model';
import {MessageService} from '../../shared/services/message.service';

declare let navigator: any;

@Component({
  templateUrl: './devices.component.html',
  styleUrls: ['devices.component.scss']
})
export class DevicesComponent {

  displayedColumns = ['deviceId', 'label', 'actions'];
  devices: DeviceInfo[] = [];

  constructor(private streamService: StreamService,
              private messageService: MessageService) {
    navigator.mediaDevices.enumerateDevices()
      .then(devices => this.devices = devices.filter(d => d.kind === 'videoinput'))
      .catch(error => this.messageService.error(error));
  }

  getList(): DeviceInfo[] {
    return this.devices;
  }

  setMediaStream(info: DeviceInfo) {
    navigator.mediaDevices.getUserMedia({ video: { deviceId: { exact: info.deviceId } } })
      .then(stream => this.streamService.setStream(stream))
      .then(() => this.messageService.info('Number of selected streams: ' + this.streamService.getNumberOfStreams()))
      .catch(error => this.messageService.error(error));
  }
}
