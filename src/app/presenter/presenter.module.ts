import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {SharedModule} from '../shared/shared.module';
import {PresenterComponent} from './components/presenter.component';

@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild([
      {path: '', component: PresenterComponent}
    ])
  ],
  declarations: [PresenterComponent]
})
export class PresenterModule {
}
