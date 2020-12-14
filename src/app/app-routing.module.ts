import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {PageNotFoundComponent} from './components/page-not-found.component';
import {StreamGuard} from './shared/services/stream-guard.service';

const routes: Routes = [
  { path: '', redirectTo: 'devices', pathMatch: 'full'},
  { path: 'devices', loadChildren: './devices/devices.module#DevicesModule' },
  { path: 'inspect', loadChildren: './inspect/inspect.module#InspectModule', canActivate: [StreamGuard] },
  { path: 'filters', loadChildren: './filters/filters.module#FiltersModule', canActivate: [StreamGuard] },
  { path: 'marker', loadChildren: './marker/marker.module#MarkerModule', canActivate: [StreamGuard] },
  { path: 'presenter', loadChildren: './presenter/presenter.module#PresenterModule', canActivate: [StreamGuard] },
  { path: 'detection', loadChildren: './detection/detection.module#DetectionModule', canActivate: [StreamGuard] },
  { path: 'mixer', loadChildren: './mixer/mixer.module#MixerModule', canActivate: [StreamGuard] },
  { path: 'color-keying', loadChildren: './color-keying/color-keying.module#ColorKeyingModule', canActivate: [StreamGuard] },
  { path: 'motion', loadChildren: './motion/motion.module#MotionModule', canActivate: [StreamGuard] },
  { path: 'tracking', loadChildren: './tracking/tracking.module#TrackingModule', canActivate: [StreamGuard] },
  { path: 'spatial-effect', loadChildren: './spatial-effect/spatial-effect.module#SpatialEffectModule', canActivate: [] },
  { path: 'stereo', loadChildren: './stereo/stereo.module#StereoModule', canActivate: []  },
  { path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
