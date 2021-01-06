import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataServiceService {

  constructor() { }
  public employeeDataObj: any;
  public employerDataObj: any;

  setEmployeeData(data) {
    this.employeeDataObj = data;
  }

  getEmployeeData() {
    return this.employeeDataObj;
  }

  setEmployerData(data) {
    this.employerDataObj = data;
  }

  getEmployerData() {
    return this.employerDataObj;
  }
}
