import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {PageNotFoundComponent} from './components/page-not-found.component';

const routes: Routes = [
  { path: '', redirectTo: 'devices', pathMatch: 'full'},
  { path: 'inspect', loadChildren: './inspect/inspect.module#InspectModule' },
  { path: 'devices', loadChildren: './devices/devices.module#DevicesModule' },
  { path: 'filters', loadChildren: './filters/filters.module#FiltersModule' },
  { path: 'marker', loadChildren: './marker/marker.module#MarkerModule' },
  { path: 'detection', loadChildren: './detection/detection.module#DetectionModule' },
  { path: 'mixer', loadChildren: './mixer/mixer.module#MixerModule' },
  { path: 'color-keying', loadChildren: './color-keying/color-keying.module#ColorKeyingModule' },
  { path: 'motion', loadChildren: './motion/motion.module#MotionModule' },
  { path: 'tracking', loadChildren: './tracking/tracking.module#TrackingModule' },
  { path: 'stereo', loadChildren: './stereo/stereo.module#StereoModule' },
  { path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
