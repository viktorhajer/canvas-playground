import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {SharedModule} from '../shared/shared.module';
import {DevicesComponent} from './components/devices.component';

@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild([
      { path: '', component: DevicesComponent }
    ])
  ],
  declarations: [DevicesComponent]
})
export class DevicesModule { }
