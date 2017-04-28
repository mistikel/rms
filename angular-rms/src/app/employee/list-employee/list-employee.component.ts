import { Component, OnInit } from '@angular/core';
import { EmployeeService } from "app/service/employee.service";
import { Employee } from "app/model/employee.model";
import { Subscription } from 'rxjs/Subscription';
import { SharedService } from "app/service/shared.service";
import { Router } from "@angular/router";


@Component({
  selector: 'app-list-employee',
  templateUrl: './list-employee.component.html',
  styleUrls: ['./list-employee.component.css']
})
export class ListEmployeeComponent implements OnInit {
  employees : Employee[];
  selectedEmployee : Employee;
  subscription : Subscription;
  
  constructor(private empService : EmployeeService,
  private reloadService : SharedService,
  private route : Router) { } 

  get(){
    this.empService.get()
    .subscribe(employees => {
      this.employees = employees;
    });
  }
  ngOnInit() {
    this.get();
    this.subscription = this.reloadService.notifyObservable$.subscribe((res) => {
        if(res.hasOwnProperty('option') && res.option === 'refresh'){
          this.get();
        }
    });
  }

  onEmployeeSelected(empSelect){
    this.selectedEmployee = empSelect;
  }

  addEmployee(){
    this.route.navigate(["/employees","add"]);
  }

  sortEmployee(sort){
    this.empService.getSortEmployee(sort)
      .subscribe(employees => {
          this.employees = employees;
      });
  }

  search(param){
    this.empService.getByName(param)
    .subscribe(employees => {
      this.employees = employees;
    });
  }

}
