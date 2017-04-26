import { Employee } from "../model/employee.model";

export class EmployeeService {
  showForm = false;

  getNewBlankEmployee() {
    var blankEmp = new Employee();
		blankEmp.gender = "Male";
		blankEmp.grade = "SE - PG";
		blankEmp.division = "CDC AsteRx";
    return blankEmp;
  }

  get() {
    return this._employees;
  }

  getById(Id) {
    return this._employees.find(emp => emp.Id === Id);
  }

  add(employee) {
    if (employee.Id) {
      var updEmployee = this._employees.find(emp => emp.Id === employee.Id);
      updEmployee.firstName = employee.firstName;
      updEmployee.lastName = employee.lastName;
      updEmployee.gender = employee.gender;
      updEmployee.dob = employee.dob;
      updEmployee.nationality = employee.nationality;
      updEmployee.maritalStatus = employee.maritalStatus;
      updEmployee.phone = employee.phone;
      updEmployee.subDivision = employee.subDivision;
      updEmployee.status = employee.status;
      updEmployee.suspendDate = employee.suspendDate;
      updEmployee.hiredDate = employee.hiredDate;
      updEmployee.grade = employee.grade;
      updEmployee.division = employee.division;
      updEmployee.email = employee.email;
      updEmployee.location = employee.location;
      updEmployee.photo = employee.photo;
      console.log("Updated");
    } else {
      employee.Id = this._getNewId();
      this._employees.push(employee);
      console.log("Added");
    }
  }

  delete(Id) {
    var updEmployee = this._employees.find(emp => emp.Id === Id);
    var index = this._employees.indexOf(updEmployee);
    if (index >= 0) {
      this._employees.splice(index, 1);
    }
    console.log("Deleted");
  }

  _getNewId() {
    if (this._employees.length > 0) {
      return Math.max.apply(Math, this._employees.map(emp => emp.Id)) + 1;
    }
  }

  _employees = [
    {
      Id: 1,
      firstName: "Agus",
      lastName: "Mistiawan",
      gender: "Male",
      dob: "01/04/1990",
      nationality: "INDONESIAN",
      maritalStatus: "Single",
      phone: "+628123456787",
      subDivision: "Java Bootcamp",
      status: "Contract",
      suspendDate: "",
      hiredDate: "22/08/2005",
      grade: "SE - JP",
      division: "CDC AsteRx",
      email: "mistiawanagus@gmail.com",
      location: "Jakarta",
      photo: null
    },
     {
      Id: 1,
      firstName: "Agus",
      lastName: "Mistiawan",
      gender: "Male",
      dob: "01/04/1990",
      nationality: "INDONESIAN",
      maritalStatus: "Single",
      phone: "+628123456787",
      subDivision: "Java Bootcamp",
      status: "Contract",
      suspendDate: "",
      hiredDate: "22/08/2005",
      grade: "SE - JP",
      division: "CDC AsteRx",
      email: "mistiawanagus@gmail.com",
      location: "Jakarta",
      photo: null
    },
     {
      Id: 1,
      firstName: "Agus",
      lastName: "Mistiawan",
      gender: "Male",
      dob: "01/04/1990",
      nationality: "INDONESIAN",
      maritalStatus: "Single",
      phone: "+628123456787",
      subDivision: "Java Bootcamp",
      status: "Contract",
      suspendDate: "",
      hiredDate: "22/08/2005",
      grade: "SE - JP",
      division: "CDC AsteRx",
      email: "mistiawanagus@gmail.com",
      location: "Jakarta",
      photo: null
    },
     {
      Id: 1,
      firstName: "Agus",
      lastName: "Mistiawan",
      gender: "Male",
      dob: "01/04/1990",
      nationality: "INDONESIAN",
      maritalStatus: "Single",
      phone: "+628123456787",
      subDivision: "Java Bootcamp",
      status: "Contract",
      suspendDate: "",
      hiredDate: "22/08/2005",
      grade: "SE - JP",
      division: "CDC AsteRx",
      email: "mistiawanagus@gmail.com",
      location: "Jakarta",
      photo: null
    },
     {
      Id: 1,
      firstName: "Agus",
      lastName: "Mistiawan",
      gender: "Male",
      dob: "01/04/1990",
      nationality: "INDONESIAN",
      maritalStatus: "Single",
      phone: "+628123456787",
      subDivision: "Java Bootcamp",
      status: "Contract",
      suspendDate: "",
      hiredDate: "22/08/2005",
      grade: "SE - JP",
      division: "CDC AsteRx",
      email: "mistiawanagus@gmail.com",
      location: "Jakarta",
      photo: null
    },
     {
      Id: 1,
      firstName: "XX",
      lastName: "Mistiawan",
      gender: "Male",
      dob: "01/04/1990",
      nationality: "INDONESIAN",
      maritalStatus: "Single",
      phone: "+628123456787",
      subDivision: "Java Bootcamp",
      status: "Contract",
      suspendDate: "",
      hiredDate: "22/08/2005",
      grade: "SE - JP",
      division: "CDC AsteRx",
      email: "mistiawanagus@gmail.com",
      location: "Jakarta",
      photo: null
    },
  ];

}