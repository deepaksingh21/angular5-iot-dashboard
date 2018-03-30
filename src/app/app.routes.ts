import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from '@components/index/index.component';
import { LocationsComponent } from '@components/locations/locations.component';
import { SettingsComponent } from '@components/settings/settings.component';
import { DevicesComponent } from '@components/devices/devices.component';
import { ActivityComponent } from '@components/activity/activity.component';
import { LocationSingleComponent } from '@components/locations/location-single/location-single.component';
import { RolesComponent } from '@components/roles/roles.component';
import { GalleryComponent } from '@components/gallery/gallery.component';
import { DeviceSingleComponent } from '../app/components/device-single/device-single.component';
import { DocsComponent } from '@components/docs/docs.component';
import { Route } from '@angular/router';
import { LayoutComponent } from './components/layout/layout.component';
import { AuthGuard , DataSyncGuard} from '@services/user.service';
import { environment } from '../environments/environment';
import { ExperimentalComponent } from '@app/components/experimental/experimental.component';

export function AuthLayout (component: any, route: string, options: any = {}): Route {
  return {
    path: route,
    ... options,
    // canActivate: environment.production ? [AuthGuard, DataSyncGuard] : [DataSyncGuard],
    component: LayoutComponent,
    children: [
      {
        path: '',
        component: component
      },
    ],
  };
}
export function DefaultLayout (component: any, route: string, options: any = {}): Route {
  return {
    path: route,
    ... options,
    component: LayoutComponent,
    children: [
      {
        path: '',
        component: component
      },
    ],
  };
}


export const appRoutes: Routes = [
  {
    path: '',
    redirectTo: '/index',
    pathMatch: 'full'
  },
  AuthLayout (IndexComponent, 'index'),
  AuthLayout (LocationsComponent, 'locations'),
  AuthLayout (SettingsComponent, 'settings'),
  AuthLayout (LocationSingleComponent, 'locations/edit/:id', {data: {mode: 'edit'}}),
  AuthLayout (LocationSingleComponent, 'location/new', {data: {mode: 'new'}}),
  AuthLayout (RolesComponent, 'roles'),
  AuthLayout (ActivityComponent, 'activities'),
  AuthLayout (DevicesComponent, 'devices'),
  AuthLayout (DeviceSingleComponent, 'devices/create'),
  AuthLayout (DeviceSingleComponent, 'devices/:id'),
  AuthLayout (ExperimentalComponent, 'experimental'),
  AuthLayout (DeviceSingleComponent, 'create-device-from-source/:sourceId'),
  AuthLayout(DocsComponent, 'docs'),
  AuthLayout(GalleryComponent, 'gallery')
];

export function createRoutes () {
  return RouterModule.forRoot(appRoutes, { useHash: true});
}
