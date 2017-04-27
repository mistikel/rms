import { Component, OnInit } from '@angular/core';
import { EmployeeService } from "app/service/employee.service";
import { Employee } from "app/model/employee.model";

@Component({
  selector: 'app-list-employee',
  templateUrl: './list-employee.component.html',
  styleUrls: ['./list-employee.component.css']
})
export class ListEmployeeComponent implements OnInit {
  employees : Employee[];
  selectedEmployee : Employee;
  constructor(private empService : EmployeeService) { } 

  ngOnInit() {
    this.empService.get()
    .subscribe(employees => {
      this.employees = employees;
    });
  }

  onEmployeeSelected(empSelect){
    this.selectedEmployee = empSelect;
  }

}
