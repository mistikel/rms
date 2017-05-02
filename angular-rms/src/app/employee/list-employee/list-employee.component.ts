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
  notFound = false;
  constructor(private empService : EmployeeService,
  private reloadService : SharedService,
  private route : Router) { } 

  ngOnInit() {
    this.get();
    this.subscription = this.reloadService.notifyObservable$.subscribe((res) => {
        if(res.hasOwnProperty('option') && res.option === 'refresh'){
          this.get();
        }
    });
  }

  get(){
    this.empService.get()
    .subscribe(employees => {
      this.employees = employees;
    });
  }

  onEmployeeSelected(empSelect){
    this.selectedEmployee = empSelect;
  }

  filterEmployee(filter){
    if(filter == undefined ){
       this.get();
    }
    if(filter.action == "no"){
      this.get();
    }
    else if(filter.location.value != undefined && filter.gender.value != undefined){
        this.empService.filterAll(filter.location.value,filter.gender.value)
        .subscribe(employees => {
            this.employees = employees;
        });
    }else if(filter.location.value !=undefined && filter.gender.value ==undefined ){
      console.log(filter.location);
      this.empService.filterByLocation(filter.location.value)
        .subscribe(employees => {
            this.employees = employees;
        });
    }else if(filter.location.value ==undefined && filter.gender.value != undefined){
      console.log(filter.location);
      this.empService.filterByGender(filter.gender.value)
        .subscribe(employees => {
            this.employees = employees;
        });
    }else{
      this.get();
    }
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
      if(employees.length < 1){
        this.notFound = true;
      }else{
        this.notFound = false;
      }
      this.employees = employees;
    });
  }

}
