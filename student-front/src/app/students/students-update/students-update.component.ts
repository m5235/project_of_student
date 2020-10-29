import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RestService } from 'src/app/services/rest.service';

@Component({
  selector: 'app-students-update',
  templateUrl: './students-update.component.html',
  styleUrls: ['./students-update.component.scss']
})
export class StudentsUpdateComponent implements OnInit {

  @Input() studentData = { email: '', password: '', firstname: '', lastname: '', level: '', identifier: '', room: '', school: ''};


  constructor(public rest: RestService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.rest.getStudent(this.route.snapshot.params.id).subscribe((data: {}) => {
      console.log(data);
      console.log('this is data');
      this.studentData.email = data[1];
      this.studentData.password = data[2];
      this.studentData.firstname = data[3];
      this.studentData.lastname = data[4];
      this.studentData.level = data[5];
      this.studentData.identifier = data[6];
      this.studentData.room = data[7];
      this.studentData.school = data[8];
    });
  }

  updateStudent(): void {
    this.rest.updateStudent(this.route.snapshot.params.id, this.studentData).subscribe((result) => {
      this.router.navigate(['/students/']);
    }, (err) => {
      console.log(err);
    });
  }

}
