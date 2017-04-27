import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Employee } from "app/model/employee.model";

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  @Input() selectedEmployee;
  @Input() employee : Employee;
  @Output() selected = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

  onSelected(emp){
    this.selected.emit(emp);
  }

}
