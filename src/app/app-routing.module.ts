import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {PageNotFoundComponent} from './components/page-not-found.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'devices',
    pathMatch: 'full'},
  {
    path: 'inspect',
    loadChildren: './inspect/inspect.module#InspectModule',
    data: {}
  },
  {
    path: 'devices',
    loadChildren: './devices/devices.module#DevicesModule',
    data: {}
  },
  {
    path: 'filters',
    loadChildren: './filters/filters.module#FiltersModule',
    data: {}
  },
  {
    path: 'mixer',
    loadChildren: './mixer/mixer.module#MixerModule',
    data: {}
  },
  {
    path: 'chroma-keying',
    loadChildren: './chroma-keying/chroma-keying.module#ChromaKeyingModule',
    data: {}
  },
  {path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
