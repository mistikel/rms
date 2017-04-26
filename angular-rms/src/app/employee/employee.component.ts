import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';

@Component({
	selector: 'employee',
	templateUrl: 'employee.component.html',
	styleUrls: ['employee.component.css']
})

export class EmployeeComponent implements OnInit {
	@Input() employees;
	@Input() sortFlag;
	@Input() selectedEmployee;
	@Output() clicked = new EventEmitter();

	ngOnInit() { }

	onClick(emp) {
		this.selectedEmployee = emp;
		this.clicked.emit(this.selectedEmployee);
	}
}