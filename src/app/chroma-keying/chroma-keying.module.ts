import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {SharedModule} from '../shared/shared.module';
import {ChromaKeyingComponent} from './components/chroma-keying.component';

@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild([
      {path: '', component: ChromaKeyingComponent}
    ])
  ],
  declarations: [ChromaKeyingComponent]
})
export class ChromaKeyingModule {
}
