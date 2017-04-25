import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { EmployeService } from "app/Service/employee.service";
import { Employee } from "app/Model/employe.model";

@Component({
  selector: 'app-list-employee',
  templateUrl: './list-employee.component.html',
  styleUrls: ['./list-employee.component.css']
})
export class ListEmployeeComponent implements OnInit {
  private employees : Employee[];
  constructor(private employeService:EmployeService) { }
  ngOnInit() {
    this.employeService.get().subscribe(response => this.employees = response);
  }

}
