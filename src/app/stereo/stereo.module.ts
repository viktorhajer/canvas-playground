import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {SharedModule} from '../shared/shared.module';
import {StereoComponent} from './components/stereo.component';

@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild([
      { path: '', component: StereoComponent }
    ])
  ],
  declarations: [StereoComponent]
})
export class StereoModule { }
