import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { FormBuilder } from "@angular/forms";
import { EmployeeService } from "app/service/employee.service";
import { Employee } from "app/model/employee.model";
import { Location } from "app/model/location.model"

@Component({
  selector: 'app-form-employee',
  templateUrl: './form-employee.component.html',
  styleUrls: ['./form-employee.component.css']
})
export class FormEmployeeComponent implements OnInit {
  _employee:Employee;
  _location : Location;
  isShow = false;
  empID;
  private empPhoto = "";
  genderArr = ["Male", "Female"];
  gradeArr = ["SE - JP", "SE - PG", "SE - AP", "SE - AN"];
  divisionArr = ["SWD - TechOne", "CDC - TechOne", "MMS - TechOne", "CDC - Red", "CDC - Services", "MMS - Services", "SWD - Services", "SWD - Blue"];
  maritalArr = ["Single", "Married"];
  private locations : Location[];
  private form;
  constructor(
    private router : Router,
    private activeRoute : ActivatedRoute,
    private formBuilder: FormBuilder,
    private empService : EmployeeService
  ) { }

  ngOnInit() {
    this.initValues();
    this.activeRoute.params
    .subscribe(params => {
      if(params['id']=="add"){
        this.isShow = true;
      }else if(params['id']!= "" && params['id']!= null ){
        this.empID = params['id'];
        this.isShow = true;
        this.getEmployeeById(this.empID);
      }
    })
  }

  getEmployeeById(id){
    this.empService.getEmployeeById(id)
    .subscribe(response =>{
      this._employee = response;
      if(this._employee == null){
        this.isShow = false;
      }else{
        this.isShow = true;
        if(this._employee.imageUrl==null){
          this.empPhoto = "src/resources/images/no-image.png";
        }else{
          this.empPhoto = this._employee.imageUrl;
        }
        this._location = response.location;
        this.setValues();
        
      }
    })
  }

  save(employee:Employee){
    employee.location = this._location;
    if(this.empPhoto != "src/resources/images/no-image.png" && this.empPhoto != null){
      employee.imageUrl = this.empPhoto;
    }
    this.empService.postOrUpdate(employee,this.empID);
  }

  setValues(){
    this.form = this.formBuilder.group({
      empId: this.formBuilder.control(this._employee.empId),
      firstName: this.formBuilder.control(this._employee.firstName),
      lastName: this.formBuilder.control(this._employee.lastName),
      gender: this.formBuilder.control(this._employee.gender),
      dob: this.formBuilder.control(this._employee.dob),
      nationality: this.formBuilder.control(this._employee.nationality),
      maritalStatus: this.formBuilder.control(this._employee.maritalStatus),
      phone: this.formBuilder.control(this._employee.phone),
      location: this.formBuilder.control(this._employee.location.Id),
      subDivision: this.formBuilder.control(this._employee.subDivision),
      status: this.formBuilder.control(this._employee.status),
      suspendDate: this.formBuilder.control(this._employee.suspendDate),
      hiredDate: this.formBuilder.control(this._employee.hiredDate),
      grade: this.formBuilder.control(this._employee.grade),
      division: this.formBuilder.control(this._employee.subDivision),
      email: this.formBuilder.control(this._employee.email)
    });
  }

  
  initValues() {
    this.form = this.formBuilder.group({
      empId: this.formBuilder.control(''),
      firstName: this.formBuilder.control(''),
      lastName: this.formBuilder.control(''),
      gender: this.formBuilder.control(''),
      dob: this.formBuilder.control(''),
      nationality: this.formBuilder.control(''),
      maritalStatus: this.formBuilder.control(''),
      phone: this.formBuilder.control(''),
      location: this.formBuilder.control("1"),
      subDivision: this.formBuilder.control(''),
      status: this.formBuilder.control(''),
      suspendDate: this.formBuilder.control(''),
      hiredDate: this.formBuilder.control(''),
      grade: this.formBuilder.control(''),
      division: this.formBuilder.control(''),
      email: this.formBuilder.control('')
    });
    this.empPhoto = "src/resources/images/no-image.png";
  }

}
