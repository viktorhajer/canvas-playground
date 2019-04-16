import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {SharedModule} from '../shared/shared.module';
import {InspectorComponent} from './components/inspector.component';
import {SettingsFormComponent} from './components/settings-form.component';

@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild([
      {path: '', component: InspectorComponent}
    ])
  ],
  declarations: [InspectorComponent, SettingsFormComponent]
})
export class InspectModule {
}
