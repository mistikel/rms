import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MdDialog, MdDialogRef } from '@angular/material';
import { PopUpComponent } from "app/pop-up/pop-up-delete/pop-up.component";
import { EmployeeService } from "app/service/employee.service";
import { Employee } from "app/model/employee.model";
import { SharedService } from "app/service/shared.service";
import { PopUpFilterComponent } from "app/pop-up/pop-up-filter/pop-up-filter.component";

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  @Input() selectedEmployee : Employee;
  @Input() length;
  @Output() empSort = new EventEmitter();
  @Output() searchParam = new EventEmitter();
  @Output() filterParam = new EventEmitter();
  params = "";
  sortDir = "asc";
  constructor(
    private dialog: MdDialog,
    private empService : EmployeeService,
    private router: Router,
    private reloadService : SharedService
  ) { }

  ngOnInit() {
  }

  onSearch(event){
    this.params = event.target.value;
    this.searchParam.emit(this.params);
  }
  sort(){
    if(this.sortDir == "asc"){
      this.sortDir = "desc";
    }else if(this.sortDir == "desc"){
      this.sortDir = "asc";
    }
    this.empSort.emit(this.sortDir);

  }

  filter(){
    let popUp = this.dialog.open(PopUpFilterComponent,{
         height: '200px',
         width: '250px',
    })

    popUp.afterClosed().subscribe(result =>{
        this.filterParam.emit(result);
    });
  }

  delete(){
    let popUp = this.dialog.open(PopUpComponent,{
        height: '200px',
        width: '360px',
    });
    popUp.afterClosed().subscribe(result => {
        if(result.action == "yes"){
          this.empService.delete(this.selectedEmployee.empId)
            .subscribe(empId => {
              this.selectedEmployee = null;
              this.reloadService.notifyOther({ option: 'refresh', value: 'from form' });
              this.router.navigate(['/employees/']);
            });
        }
    });
  }

}
