import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  public students: any = [];
  constructor(private apiService: ApiService) {}
  ngOnInit(): void {
    this.loadstudentData();
  }

  private loadstudentData() {
    this.apiService.getStudentData().subscribe(
      (response) => {
        console.log('response', response);
        this.students = response;
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
