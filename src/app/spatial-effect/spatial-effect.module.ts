import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {SharedModule} from '../shared/shared.module';
import {SpatialEffectComponent} from './components/spatial-effect.component';

@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild([
      {path: '', component: SpatialEffectComponent}
    ])
  ],
  declarations: [SpatialEffectComponent]
})
export class SpatialEffectModule {
}
