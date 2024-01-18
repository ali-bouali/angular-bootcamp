import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {CustomButtonComponent} from '../../components/custom-button/custom-button.component';
import {UserInfoComponent} from '../../components/user-info/user-info.component';
import {MenuComponent} from '../../components/menu/menu.component';
import {UserPageComponent} from './pages/user-page/user-page.component';
import {HomeComponent} from './pages/home/home.component';
import {AboutUsComponent} from './pages/about-us/about-us.component';
import {ServiceComponent} from './pages/service/service.component';
import {DashboardComponent} from './pages/dashboard/dashboard.component';
import {DevelopmentComponent} from './pages/service/sub-services/development/development.component';
import {MobileDevComponent} from './pages/service/sub-services/mobile-dev/mobile-dev.component';
import {VideoEditingComponent} from './pages/service/sub-services/video-editing/video-editing.component';
import {LoginComponent} from './pages/login/login.component';
import {RegisterComponent} from './pages/register/register.component';
import {FormsModule} from '@angular/forms';
import {PublicRoutingModule} from './public-routing.module';



@NgModule({
  declarations: [
    CustomButtonComponent,
    UserInfoComponent,
    MenuComponent,
    UserPageComponent,
    HomeComponent,
    AboutUsComponent,
    ServiceComponent,
    DashboardComponent,
    DevelopmentComponent,
    MobileDevComponent,
    VideoEditingComponent,
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    PublicRoutingModule
  ]
})
export class PublicModule { }
