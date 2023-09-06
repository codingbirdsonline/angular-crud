import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private BASE_URL: string = 'http://localhost:3000';
  constructor(private http: HttpClient) {}

  public saveStudentData(student: any, studentId: any) {
    if (studentId) {
      return this.http.put(this.BASE_URL + '/students/' + studentId, student);
    }
    return this.http.post(this.BASE_URL + '/students', student);
  }
  public getStudentData() {
    return this.http.get(this.BASE_URL + '/students');
  }
  public getStudentDetails(studentId: any) {
    return this.http.get(this.BASE_URL + '/students/' + studentId);
  }

  public deleteStudent(studentId: number) {
    return this.http.delete(this.BASE_URL + '/students/' + studentId);
  }
}
