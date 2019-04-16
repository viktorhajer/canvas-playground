import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {SharedModule} from '../shared/shared.module';
import {MixerComponent} from './components/mixer.component';

@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild([
      {path: '', component: MixerComponent}
    ])
  ],
  declarations: [MixerComponent]
})
export class MixerModule {
}
