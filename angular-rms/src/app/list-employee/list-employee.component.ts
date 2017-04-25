import { Component, OnInit } from '@angular/core';
import { EmployeServiceService } from "app/employe-service.service";
import {Http} from '@angular/http';

@Component({
  selector: 'app-list-employee',
  templateUrl: './list-employee.component.html',
  styleUrls: ['./list-employee.component.css']
})
export class ListEmployeeComponent implements OnInit {

  constructor(private employeService:EmployeServiceService) { }
  employees;
  ngOnInit() {
    this.employeService.getHttp().subscribe(employees=>{
      this.employees = employees;
    });
  }

}
