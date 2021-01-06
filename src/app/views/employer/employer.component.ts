import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataServiceService } from 'src/app/core/data-service.service';

@Component({
  selector: 'app-employer',
  templateUrl: './employer.component.html',
  styleUrls: ['./employer.component.scss']
})
export class EmployerComponent implements OnInit {

  employerForm: FormGroup;
  submitted = false;
  public employerObj: any;

  constructor(private formBuilder: FormBuilder,
    private router: Router, 
    private dataSvc: DataServiceService,) { }

  ngOnInit(): void {
    this.employerObj = {
      firstName: '',
      middleName:'',
      lastName:'',
      identityTitle:'',
      identityIssuing:'',
      identityNumber:'',
      identityExpDate: '',
      employTitle:'',
      employIssuing:'',
      employNumber:'',
      employExpDate:'',
      empTitle:'',
      empIssuing:'',
      empNumber:'',
      empExpDate:'',
      idnTitle:'',
      idnIssuing:'',
      idnNumber:'',
      idnExpDate:'',
      qacode: '',
      joiningDate: '',
      employerAdd: '',
      city: '',
      state: '',
      zipcode: '',
      emplastName: '',
      empmiddleName: '',
      empfirstName:''
    }
  }
  
  saveAndNext() {
    this.dataSvc.setEmployerData(this.employerObj);
    this.router.navigate(['/detailsView']);
  }

  Reset() {
    this.employerObj = {
      firstName: '',
      middleName:'',
      lastName:'',
      identityTitle:'',
      identityIssuing:'',
      identityNumber:'',
      identityExpDate: '',
      employTitle:'',
      employIssuing:'',
      employNumber:'',
      employExpDate:'',
      empTitle:'',
      empIssuing:'',
      empNumber:'',
      empExpDate:'',
      idnTitle:'',
      idnIssuing:'',
      idnNumber:'',
      idnExpDate:'',
      qacode: '',
      joiningDate: '',
      employerAdd: '',
      city: '',
      state: '',
      zipcode: '',
      emplastName: '',
      empmiddleName: '',
      empfirstName:''
    }
  }


}
