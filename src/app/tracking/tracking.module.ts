import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {SharedModule} from '../shared/shared.module';
import {TrackingComponent} from './components/tracking.component';

@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild([
      { path: '', component: TrackingComponent }
    ])
  ],
  declarations: [TrackingComponent]
})
export class TrackingModule { }
