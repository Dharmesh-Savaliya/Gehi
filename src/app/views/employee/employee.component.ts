import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataServiceService } from 'src/app/core/data-service.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss']
})
export class EmployeeComponent implements OnInit {

  employeeForm: FormGroup;
  submitted = false;

  constructor(
    private formBuilder: FormBuilder,
    private dataSvc: DataServiceService,
    private router: Router,
  ) { }


  ngOnInit(): void {
    let data = this.dataSvc.getEmployeeData();
    if (data !== undefined) {
      this.employeeForm = data;
    } else {
      this.employeeForm = this.formBuilder.group({
        firstName: ['', Validators.required],
        middleName: ['', Validators.required],
        lastName: ['', Validators.required],
        mobile: ['', Validators.required],
        city: ['', Validators.required],
        state: ['', Validators.required],
        address: ['', Validators.required],
        zip: ['', Validators.required],
        dob: ['', Validators.required],
        securityCode: ['', Validators.required],
        telephoneNo: ['', Validators.required],
        email: ['', [Validators.required, Validators.email]],
        citizen: [''],
        noncitizen: [''],
        lawful: [''],
        authorized: [''],
      }
      );
    }
    console.log(data);

  }

  get f() { return this.employeeForm.controls; }

  onSubmit() {
    this.submitted = true;
    this.dataSvc.setEmployeeData(this.employeeForm);
    this.router.navigate(['employer']);
    if (this.employeeForm.invalid) {
      return;
    }
  }

  onReset() {
    this.submitted = false;
    this.employeeForm.reset();
  }

  selectCheckbox(event) {
    if (event.currentTarget.checked) {
      if (event.target.id === 'citizen') {
        this.employeeForm["controls"]["noncitizen"].setValue(false);
        this.employeeForm["controls"]["lawful"].setValue(false);
        this.employeeForm["controls"]["authorized"].setValue(false);
      } else if (event.target.id === 'noncitizen') {
        this.employeeForm["controls"]["citizen"].setValue(false);
        this.employeeForm["controls"]["lawful"].setValue(false);
        this.employeeForm["controls"]["authorized"].setValue(false);
      } else if (event.target.id === 'lawful') {
        this.employeeForm["controls"]["noncitizen"].setValue(false);
        this.employeeForm["controls"]["citizen"].setValue(false);
        this.employeeForm["controls"]["authorized"].setValue(false);
      } else if (event.target.id === 'authorized') {
        this.employeeForm["controls"]["noncitizen"].setValue(false);
        this.employeeForm["controls"]["lawful"].setValue(false);
        this.employeeForm["controls"]["citizen"].setValue(false);
      }
    } else {
      this.employeeForm["controls"]["noncitizen"].setValue(false);
      this.employeeForm["controls"]["lawful"].setValue(false);
      this.employeeForm["controls"]["citizen"].setValue(false);
      this.employeeForm["controls"]["authorized"].setValue(false);
    }
  }

}
