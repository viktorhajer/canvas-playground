import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {SharedModule} from '../shared/shared.module';
import {FiltersComponent} from './components/filters.component';

@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild([
      {path: '', component: FiltersComponent}
    ])
  ],
  declarations: [FiltersComponent]
})
export class FiltersModule {
}
