import { Component, OnInit } from '@angular/core';
import { Grade } from "app/model/grade.model";
import { Location } from "app/model/location.model";
import { Division } from "app/model/division.model";
import { SubDivision } from "app/model/subdivision.model";

@Component({
  selector: 'app-form-employee',
  templateUrl: './form-employee.component.html',
  styleUrls: ['./form-employee.component.css']
})
export class FormEmployeeComponent implements OnInit {
  private locations : Location[];
  private grades : Grade[];
  private divisions : Division[];
  private subDivisions : SubDivision[];
  private form;
  constructor() { }

  ngOnInit() {
  }

}
