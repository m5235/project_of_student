import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StudentsGetComponent } from './students/students-get/students-get.component';
import { StudentsAddComponent } from './students/students-add/students-add.component';
import { StudentsDetailsComponent } from './students/students-details/students-details.component';
import { StudentsUpdateComponent } from './students/students-update/students-update.component';

const routes: Routes = [
  {
    path: 'students',
    component: StudentsGetComponent,
    data: { title: 'Students List' }
  },
  {
    path: 'studentsdetails/:id',
    component: StudentsDetailsComponent,
    data: { title: 'Students Details' }
  },
  {
    path: 'studentsadd',
    component: StudentsAddComponent,
    data: { title: 'Students Add' }
  },
  {
    path: 'studentsupdate/:id',
    component: StudentsUpdateComponent,
    data: { title: 'Students Edit' }
  },
  {
    path: '',
    redirectTo: '/students',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {}
