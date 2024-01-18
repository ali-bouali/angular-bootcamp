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
    DashboardComponent
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
