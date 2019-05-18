import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {SharedModule} from '../shared/shared.module';
import {MarkerComponent} from './components/marker.component';

@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild([
      {path: '', component: MarkerComponent}
    ])
  ],
  declarations: [MarkerComponent]
})
export class MarkerModule {
}
