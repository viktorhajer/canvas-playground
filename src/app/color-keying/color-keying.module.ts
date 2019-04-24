import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {SharedModule} from '../shared/shared.module';
import {ColorKeyingComponent} from './components/color-keying.component';

@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild([
      {path: '', component: ColorKeyingComponent}
    ])
  ],
  declarations: [ColorKeyingComponent]
})
export class ColorKeyingModule {
}
