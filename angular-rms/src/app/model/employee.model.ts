import { SubDivision } from "./subdivision.model";
import { Grade } from "./grade.model";
import { Location } from "./location.model";
export class Employee {
    Id: number;
    firstName: string;
    lastName: string;
    gender: string;
    dob: string;
    nationality: string;
    maritalStatus: string;
    phone: string;
    subDivision: SubDivision;
    status: string;
    suspendDate: string;
    hiredDate: string;
    grade: Grade;
    email: string;
    location: Location;
    photo: string;
    Employee() {}
}