import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { ApiService } from '../services/api.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css'],
})
export class StudentComponent implements OnInit {
  public studentForm!: FormGroup;
  public studentId!: any;
  constructor(
    private formBuilder: FormBuilder,
    private service: ApiService,
    private toastr: ToastrService,
    private route: ActivatedRoute,
    private router: Router
  ) {}
  ngOnInit(): void {
    this.studentId = this.route.snapshot.paramMap.get('id');
    this.studentForm = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', Validators.required],
      contact: ['', Validators.required],
    });
    if (this.studentId) {
      this.getStudentDetails(this.studentId);
    }
  }

  public saveStudent(): void {
    if (this.studentForm.valid) {
      this.service
        .saveStudentData(this.studentForm.value, this.studentId)
        .subscribe((response) => {
          this.toastr.success('Data saved successfully!', 'Sucess');
          this.studentForm.reset();
          this.router.navigate(['']);
        });
    }
  }
  public getStudentDetails(studentId: any) {
    this.service.getStudentDetails(studentId).subscribe((response) => {
      this.studentForm.patchValue(response);
    });
  }
}
