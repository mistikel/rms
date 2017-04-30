import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Employee } from "app/model/employee.model";
import { Router } from "@angular/router";

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  @Input() selectedEmployee;
  @Input() employee : Employee;
  @Output() selected = new EventEmitter();
  constructor( private router: Router) { }

  ngOnInit() {
  }

  onSelected(emp){
    this.selected.emit(emp);
    this.router.navigate(["/employees", emp.empId]);
  }

  getImage(){
    if(this.employee.imageUrl==null){
          return "src/images/no-image.png";
        }else{
          return this.employee.imageUrl;
        }
  }

}
