import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {SharedModule} from '../shared/shared.module';
import {DetectionComponent} from './components/detection.component';

@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild([
      {path: '', component: DetectionComponent}
    ])
  ],
  declarations: [DetectionComponent]
})
export class DetectionModule {
}
