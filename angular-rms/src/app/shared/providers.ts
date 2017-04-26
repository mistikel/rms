import { OpaqueToken } from '@angular/core';

export const lookupListToken = new OpaqueToken('lookupListToken');

export const lookupList = {
    gender: ['Male', 'Female'],
    grade: ['SE - JP', 'SE - PG', 'SE - AP', 'SE - AN', 'FA-FA4'],
    division: ['CDC AsteRx', 'SWD Pink', 'SWD Green', 'Finance & Accounting']
};

