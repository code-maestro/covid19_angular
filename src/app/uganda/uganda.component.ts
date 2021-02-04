import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-uganda',
  templateUrl: './uganda.component.html',
  styleUrls: ['./uganda.component.css']
})

export class UgandaComponent implements OnInit {

  deaths : String = "Total deaths from all over the country";
  active : String = "Total Active cases from all over the country";
  samples : String = "Total Samples taken from all over the country";
  confirmed : String = "Total confirmed cases from all over the country";
  recoveries : String = "Total recovered cases from all over the country";
  followup : String = "Total follow up contacts of the confirmed cases from all over the country";

  constructor() { }

  ngOnInit(): void { }

  message: string = "";

  receiveNumbers($event: any){
    this.message = $event;
  }

}
