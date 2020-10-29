import { Component, Input, OnInit } from '@angular/core';

import { RestService } from '../../services/rest.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-students-add',
  templateUrl: './students-add.component.html',
  styleUrls: ['./students-add.component.scss']
})
export class StudentsAddComponent implements OnInit {

  @Input() studentData = { email: '', password: '', firstname: '', lastname: '', level: '', identifier: '', room: '', school: ''};

  constructor(public rest: RestService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
  }

  addStudent(): void {
    this.rest.addStudent(this.studentData).subscribe((result) => {
      this.router.navigate(['/students/']);
    }, (err) => {
      console.log(err);
    });
  }

}
