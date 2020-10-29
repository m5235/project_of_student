import { Injectable } from '@angular/core';
import { catchError } from 'rxjs/internal/operators';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { map } from 'rxjs/operators';

const endpoint = 'http://localhost:5000/users/';

@Injectable({
  providedIn: 'root'
})
export class RestService {

  constructor(private http: HttpClient) {}

  getStudents(): Observable<Student> {
    return this.http.get(endpoint).pipe(
      map(this.extractData),
      catchError(this.handleError)
    );
  }

  getStudent(id: string): Observable<Student> {
    return this.http.get(endpoint + id).pipe(
      map(this.extractData),
      catchError(this.handleError)
    );
  }

  addStudent(student: any): Observable<any> {
    return this.http.post(endpoint, student).pipe(
      catchError(this.handleError)
    );
  }

  updateStudent(id: string, student: StudentUpdate): Observable<any> {
    return this.http.put<Student>(endpoint + id, student).pipe(
      catchError(this.handleError)
    );
  }

  deleteStudent(id: string): Observable<any> {
    return this.http.delete<Student>(endpoint + id).pipe(
      catchError(this.handleError)
    );
  }

  private extractData(res: Response): any {
    const body = res;
    return body || { };
  }

  private handleError(error: HttpErrorResponse): any {
    if (error.error instanceof ErrorEvent) {
      console.error('An error occurred:', error.error.message);
    } else {
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    return throwError(
      'Something bad happened; please try again later.');
  }
}

export interface Student {
  _id: string;
  email: string;
  password: string;
  firstname: string;
  lastname: string;
  level: string;
  identifier: string;
  room: string;
  school: string;
  updated_at: Date;
}

export interface StudentUpdate {
  email: string;
  password: string;
  firstname: string;
  lastname: string;
  level: string;
  identifier: string;
  room: string;
  school: string;
}


