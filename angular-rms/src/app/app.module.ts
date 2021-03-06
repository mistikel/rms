import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MdButtonModule, MdIconModule, MdInputModule, MdChipsModule, MdTabsModule, MdSelectModule, MdDialogModule } from '@angular/material';
import { Md2Module } from 'md2';
import { MdlModule } from '@angular-mdl/core';
import { ListEmployeeComponent } from './employee/list-employee/list-employee.component';
import { TabEmployeeComponent } from './employee/tab-employee/tab-employee.component';
import { SearchComponent } from './search/search.component';
import { EmployeeComponent } from './employee/employee.component';
import { FormEmployeeComponent } from './employee/form-employee/form-employee.component';
import { EmployeeService } from "app/service/employee.service";
import { SharedService } from "app/service/shared.service";
import { routing } from "app/app.routing";
import { PopUpComponent } from './pop-up/pop-up-delete/pop-up.component';
import { PopUpFilterComponent } from './pop-up/pop-up-filter/pop-up-filter.component';
import { lookupListToken, lookupLists } from "./providers";
import { LocationService } from "app/service/location.service";


@NgModule({
  declarations: [
    AppComponent,
    ListEmployeeComponent,
    TabEmployeeComponent,
    SearchComponent,
    EmployeeComponent,
    FormEmployeeComponent,
    PopUpComponent,
    PopUpFilterComponent
  ],
  entryComponents: [
    PopUpComponent,
    PopUpFilterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    BrowserAnimationsModule,
    MdButtonModule,
    MdIconModule,
    MdInputModule,
    MdChipsModule,
    MdTabsModule,
    MdSelectModule,
    MdDialogModule,
    MdlModule,
    Md2Module.forRoot(),
    routing
  ],
  providers: [
    EmployeeService,
    SharedService,
    LocationService,
    {provide : lookupListToken, useValue : lookupLists}],
  bootstrap: [AppComponent]
})
export class AppModule { }
