import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CustomButtonComponent } from './components/custom-button/custom-button.component';
import { UserInfoComponent } from './components/user-info/user-info.component';
import {FormsModule} from '@angular/forms';
import { MenuComponent } from './components/menu/menu.component';
import { UserPageComponent } from './pages/user-page/user-page.component';
import { HomeComponent } from './pages/home/home.component';
import { AboutUsComponent } from './pages/about-us/about-us.component';
import { ServiceComponent } from './pages/service/service.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { DevelopmentComponent } from './pages/service/sub-services/development/development.component';
import { MobileDevComponent } from './pages/service/sub-services/mobile-dev/mobile-dev.component';
import { VideoEditingComponent } from './pages/service/sub-services/video-editing/video-editing.component';
import { LoginComponent } from './pages/login/login.component';

@NgModule({
  declarations: [
    AppComponent,
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
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
