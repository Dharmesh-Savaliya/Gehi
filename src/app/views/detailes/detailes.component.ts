import { Component, OnInit } from '@angular/core';
import { DataServiceService } from 'src/app/core/data-service.service';

@Component({
  selector: 'app-detailes',
  templateUrl: './detailes.component.html',
  styleUrls: ['./detailes.component.scss']
})
export class DetailesComponent implements OnInit {
  public employerObj: any;
  public employeeObj: any;

  constructor(
    private dataSvc: DataServiceService
  ) { }

  ngOnInit(): void {
    debugger
    this.employerObj = this.dataSvc.getEmployerData();
    const data = this.dataSvc.getEmployeeData();
    this.employeeObj = data.value;
  }

}
