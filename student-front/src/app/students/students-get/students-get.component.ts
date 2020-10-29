import { Component, OnInit } from '@angular/core';

import { RestService, Student } from '../../services/rest.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-students-get',
  templateUrl: './students-get.component.html',
  styleUrls: ['./students-get.component.scss']
})
export class StudentsGetComponent implements OnInit {

  students: Student[] = [];

  constructor(public rest: RestService,
              private router: Router) { }

  ngOnInit(): void {
    this.getStudents();
  }

  getStudents(): void {
    this.rest.getStudents().subscribe((resp: any) => {
      this.students = resp;
      console.log(this.students);
    });
  }

  add(): void {
    this.router.navigate(['/studentsadd']);
  }

  delete(id: string): void {
    this.rest.deleteStudent(id)
      .subscribe(() => {
          this.getStudents();
        }, (err) => {
          console.log(err);
        }
      );
  }


}
