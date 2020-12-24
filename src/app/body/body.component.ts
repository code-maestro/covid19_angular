import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-body',
  template: `
    <p>
      Random Number {{ random }}
    </p>
  `,
  styleUrls: ['./body.component.css']
})
export class BodyComponent {

  //random : number = Math.random();
  @Input() random: string = ""; 

  constructor() { }

}
