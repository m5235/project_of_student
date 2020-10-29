import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { StudentsGetComponent } from './students/students-get/students-get.component';
import { StudentsAddComponent } from './students/students-add/students-add.component';
import { StudentsDetailsComponent } from './students/students-details/students-details.component';
import { StudentsUpdateComponent } from './students/students-update/students-update.component';

@NgModule({
  declarations: [
    AppComponent,
    StudentsGetComponent,
    StudentsAddComponent,
    StudentsDetailsComponent,
    StudentsUpdateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
