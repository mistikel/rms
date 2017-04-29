import { Component, OnInit, Inject } from '@angular/core';
import { MdDialogRef } from "@angular/material";
import { LocationService } from "app/service/location.service";
import { Location } from "app/model/location.model";
import { lookupListToken } from "app/providers";

@Component({
  selector: 'app-pop-up-filter',
  templateUrl: './pop-up-filter.component.html',
  styleUrls: ['./pop-up-filter.component.css']
})
export class PopUpFilterComponent implements OnInit {
  genderArr = ["Male", "Female"];
  private locations : Location[];
  location = "";
  gender = "";
 constructor(
   public popUp:MdDialogRef<PopUpFilterComponent>,
   private locService : LocationService,
   @Inject(lookupListToken) public lookupLists){}

  ngOnInit() {
    this.locService.get()
      .subscribe(response => {
        this.locations = response;
      })
  }

  onLocationSelected(location){
    this.location = location;
  }

  onGenderSelected(gender){
    this.gender = gender;
  }

}
