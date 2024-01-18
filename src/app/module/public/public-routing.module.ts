import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './pages/home/home.component';
import {DashboardComponent} from './pages/dashboard/dashboard.component';
import {AboutUsComponent} from './pages/about-us/about-us.component';
import {LoginComponent} from './pages/login/login.component';
import {RegisterComponent} from './pages/register/register.component';
import {ServiceComponent} from './pages/service/service.component';
import {DevelopmentComponent} from './pages/service/sub-services/development/development.component';
import {MobileDevComponent} from './pages/service/sub-services/mobile-dev/mobile-dev.component';
import {VideoEditingComponent} from './pages/service/sub-services/video-editing/video-editing.component';


const routes: Routes = [
  {
    path: '',
    component: HomeComponent
    // redirectTo: 'dashboard'
  },
  {
    path: 'dashboard',
    component: DashboardComponent
  },
  {
    path: 'about',
    component: AboutUsComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: 'services',
    component: ServiceComponent,
    children: [
      {
        path: 'dev',
        component: DevelopmentComponent
      },
      {
        path: 'mobile',
        component: MobileDevComponent
      },
      {
        path: 'video',
        component: VideoEditingComponent
      },
    ]
  },
  {
    path: 'services/:username',
    component: ServiceComponent
  },
];
@NgModule(
  {
    declarations: [],
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  }
)
export class PublicRoutingModule{}
