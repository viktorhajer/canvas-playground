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
    path: 'color-keying',
    loadChildren: './color-keying/color-keying.module#ColorKeyingModule',
    data: {}
  },
  {
    path: 'motion',
    loadChildren: './motion/motion.module#MotionModule',
    data: {}
  },
  {
    path: 'stereo',
    loadChildren: './stereo/stereo.module#StereoModule',
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
