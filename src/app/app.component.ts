import {Component} from '@angular/core';
import {LoadingService} from './shared/services/loading.service';
import {StreamService} from './shared/services/stream.service';

export const DEFAULT_BANDWIDTH = 2048;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {

  constructor(public loadingService: LoadingService,
              private streamService: StreamService) {
  }

  getInspectorBadgeNumber(): number {
    return this.streamService.getNumberOfStreams();
  }
}
