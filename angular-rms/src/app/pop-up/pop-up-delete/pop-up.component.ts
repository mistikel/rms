import { Component, OnInit } from '@angular/core';

import { MdDialog, MdDialogRef } from '@angular/material';

@Component({
  selector: 'app-pop-up',
  templateUrl: './pop-up.component.html',
  styleUrls: ['./pop-up.component.css']
})
export class PopUpComponent implements OnInit {

  constructor(public popUp: MdDialogRef<PopUpComponent>) { }

  ngOnInit() {
  }

}
