import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {SharedModule} from '../shared/shared.module';
import {MotionComponent} from './components/motion.component';

@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild([
      { path: '', component: MotionComponent }
    ])
  ],
  declarations: [MotionComponent]
})
export class MotionModule { }
