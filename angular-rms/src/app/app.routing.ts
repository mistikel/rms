import { Routes, RouterModule } from '@angular/router';
import { FormEmployeeComponent } from "app/employee/form-employee/form-employee.component";


const appRoutes: Routes = [
  
  { path: 'employees/:id', component: FormEmployeeComponent },
  { path: 'employees', pathMatch: 'full', redirectTo: 'employees/' },
  { path: '', pathMatch: 'full', redirectTo: 'employees/' }
];

export const routing = RouterModule.forRoot(appRoutes);