import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StudentRoutingModule } from './student-routing.module';
import { StudentDashboardComponent } from './pages/student-dashboard/student-dashboard.component';


@NgModule({
  declarations: [
    StudentDashboardComponent
  ],
  imports: [
    CommonModule,
    StudentRoutingModule
  ]
})
export class StudentModule { }
