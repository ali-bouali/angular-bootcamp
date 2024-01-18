import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './pages/home/home.component';
import {AboutUsComponent} from './pages/about-us/about-us.component';
import {DashboardComponent} from './pages/dashboard/dashboard.component';
import {ServiceComponent} from './pages/service/service.component';

const routes: Routes = [
  {
    path: 'home',
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
    path: 'services',
    component: ServiceComponent
  },
  {
    path: 'services/:username',
    component: ServiceComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
