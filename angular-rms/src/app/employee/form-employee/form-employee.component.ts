import { Component, OnInit, Inject } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { FormBuilder, Validators } from "@angular/forms";
import { EmployeeService } from "app/service/employee.service";
import { Employee } from "app/model/employee.model";
import { Location } from "app/model/location.model"
import { SharedService } from "app/service/shared.service";
import { lookupListToken } from "app/providers";
import { LocationService } from "app/service/location.service";

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
  private imageUrl = "";
  private locations : Location[];
  private form; 
  constructor(
    private router : Router,
    private activeRoute : ActivatedRoute,
    private formBuilder: FormBuilder,
    private empService : EmployeeService,
    private reloadService : SharedService,
    private locService : LocationService,
    @Inject(lookupListToken) public lookupLists
  ) { }

  ngOnInit() {
    this.locService.get().subscribe(response =>{this.locations = response});
    this.initValues();
    this.activeRoute.params
    .subscribe(params => {
      if(params['id']=="add"){
        this.isShow = true;
        this.initValues();
      }else if(params['id']!= "" && params['id']!= null ){
        this.empID = params['id'];
        this.isShow = true;
        this.getEmployeeById(this.empID);
      }else if(params['id']== "" || params['id']== null){
        this.isShow = false;
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
          this.imageUrl = "src/images/no-image.png";
        }else{
          this.imageUrl = this._employee.imageUrl;
        }
        this._location = response.location;
        this.setValues();
      }
    })
  }

  onSubmit(employee:Employee){
    employee.location = this._location;
    if(this.imageUrl != "src/images/no-image.png" && this.imageUrl != null){
      employee.imageUrl = this.imageUrl;
    }
    if(!employee.empId){
        this.empService.post(employee)
          .subscribe(response=>{
        this._employee = response;
        this.reload();
      });  
    }else{
      this.empService.put(employee,this.empID)
        .subscribe(response=>{
      this._employee = response;
      this.reload();
    });
  }
  }

  cancel(){
    this.isShow = false;
    this.router.navigate(['/employees/']);
  }

  onUpload(img){
    this.imageUrl = img.target.files;
    var image = new FileReader();
    image.onload = (img: any)=>{
      this.imageUrl = img.target.result;
    }
    image.readAsDataURL(img.target.files[0]);
  }

  onSelectedLocation(location : Location){
    this._location = location;
  }

  reload(){
    this.reloadService.notifyOther({ option: 'refresh', value: 'from form' });
    this.router.navigate(['/employees/']);
  }

  setValues(){
    this.form = this.formBuilder.group({
      empId: this.formBuilder.control(this._employee.empId),
      firstName: this.formBuilder.control(this._employee.firstName, Validators.compose([Validators.required])),
      lastName: this.formBuilder.control(this._employee.lastName, Validators.compose([Validators.required])),
      gender: this.formBuilder.control(this._employee.gender,Validators.compose([Validators.required])),
      dob: this.formBuilder.control(this._employee.dob,Validators.compose([Validators.required])),
      nationality: this.formBuilder.control(this._employee.nationality,Validators.compose([Validators.required])),
      maritalStatus: this.formBuilder.control(this._employee.maritalStatus,Validators.compose([Validators.required])),
      phone: this.formBuilder.control(this._employee.phone,Validators.compose([Validators.required])),
      location: this.formBuilder.control(this._employee.location.id,Validators.compose([Validators.required])),
      subDivision: this.formBuilder.control(this._employee.subDivision,Validators.compose([Validators.required])),
      status: this.formBuilder.control(this._employee.status,Validators.compose([Validators.required])),
      suspendDate: this.formBuilder.control(this._employee.suspendDate),
      hiredDate: this.formBuilder.control(this._employee.hiredDate,Validators.compose([Validators.required])),
      grade: this.formBuilder.control(this._employee.grade,Validators.compose([Validators.required])),
      division: this.formBuilder.control(this._employee.division,Validators.compose([Validators.required])),
      email: this.formBuilder.control(this._employee.email,Validators.compose([Validators.required]))
    });
  }

  
  initValues() {
    this.form = this.formBuilder.group({
      empId: this.formBuilder.control(''),
      firstName: this.formBuilder.control('',Validators.compose([Validators.required])),
      lastName: this.formBuilder.control('',Validators.compose([Validators.required])),
      gender: this.formBuilder.control('',Validators.compose([Validators.required])),
      dob: this.formBuilder.control('',Validators.compose([Validators.required])),
      nationality: this.formBuilder.control('',Validators.compose([Validators.required])),
      maritalStatus: this.formBuilder.control('',Validators.compose([Validators.required])),
      phone: this.formBuilder.control('',Validators.compose([Validators.required])),
      location: this.formBuilder.control("",Validators.compose([Validators.required])),
      subDivision: this.formBuilder.control('',Validators.compose([Validators.required])),
      status: this.formBuilder.control('',Validators.compose([Validators.required])),
      suspendDate: this.formBuilder.control('',Validators.compose([Validators.required])),
      hiredDate: this.formBuilder.control('',Validators.compose([Validators.required])),
      grade: this.formBuilder.control('',Validators.compose([Validators.required])),
      division: this.formBuilder.control('',Validators.compose([Validators.required])),
      email: this.formBuilder.control('',Validators.compose([Validators.required]))
    });
    this.imageUrl = "src/images/no-image.png";
  }

}
