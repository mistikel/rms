import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { Employee } from "../shared/model/employee.model";

import { EmployeeService } from '../shared/services/employee-list.service';

@Component({
	selector: 'list-employee',
	templateUrl: 'list-employee.component.html',
	styleUrls: ['list-employee.component.css']
})

export class ListEmployeeComponent implements OnInit {
	employees;
	originEmployees;
	searchFlag;
	@Input() selectedEmployee: Employee;
	sortFlag = true;

	@Output() employeeClicked = new EventEmitter();

	constructor(private eService: EmployeeService) { }

	ngOnInit() {
		this.employees = this.eService.get();
		this.originEmployees = this.employees;
		console.log("Emitted");
	}

	onEmployeeClicked(emp) {
		this.selectedEmployee = emp;
		this.employeeClicked.emit(emp);
		this.eService.showForm = true;
	}

	setNew() {
		this.selectedEmployee = this.eService.getNewBlankEmployee();
		this.onEmployeeClicked(this.selectedEmployee);
	}

	@Input() set initialEmpSave(initialEmployee: Employee) {
		if (initialEmployee) {
			this.eService.add(initialEmployee);
		}
	}

	onEmpDelete() {
		this.eService.delete(this.selectedEmployee.Id);
		this.setNew();
		this.onEmpSearch(this.searchFlag);
		this.eService.showForm = false;
	}

	onEmpSort(flag) {
		this.sortFlag = flag;
	}

	onEmpSearch($event) {
		this.searchFlag = $event;
		const query = $event.target.value.toLowerCase();
		if (query) {
			this.employees = this.originEmployees.filter(emp => {
				let empName = `${emp.firstName} ${emp.lastName}`;
				return empName.toLowerCase().includes(query);
			})
		} else {
			this.employees = this.originEmployees;
		}
	}
}