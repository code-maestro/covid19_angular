import { Component } from '@angular/core';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})

export class ShopComponent {

  constructor() { }

  message: string = "";

  receiveNumbers($event: any){
    this.message = $event;
  }


}