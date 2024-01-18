import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './module/public/pages/home/home.component';
import {AboutUsComponent} from './module/public/pages/about-us/about-us.component';
import {DashboardComponent} from './module/public/pages/dashboard/dashboard.component';
import {ServiceComponent} from './module/public/pages/service/service.component';
import {DevelopmentComponent} from './module/public/pages/service/sub-services/development/development.component';
import {MobileDevComponent} from './module/public/pages/service/sub-services/mobile-dev/mobile-dev.component';
import {VideoEditingComponent} from './module/public/pages/service/sub-services/video-editing/video-editing.component';
import {LoginComponent} from './module/public/pages/login/login.component';
import {RegisterComponent} from './module/public/pages/register/register.component';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./module/public/public.module').then(m => m.PublicModule)
  },
  {
    path: 'student',
    loadChildren: () => import('./module/student/student.module').then(m => m.StudentModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
