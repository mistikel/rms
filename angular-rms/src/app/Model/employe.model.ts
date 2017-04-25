import { Location } from './location.model';

export class Employee {
    constructor(
        public empId: string,
        public firstName: string,
        public lastName: string,
        public gender: string,
        public dob: Date,
        public nationality: string,
        public maritalStatus: string,
        public phone: string,
        public email: string,
        public hiredDate: Date,
        public suspendDate: Date,
        public division: string,
        public grade: string,
        public subDivision: string,
        public status: string,
        public imageUrl: string,
        public location: Location
    ) {

    }
}