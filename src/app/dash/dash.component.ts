import { Component } from '@angular/core';
import { map } from 'rxjs/operators';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';

@Component({
  selector: 'app-dash',
  templateUrl: './dash.component.html',
  styleUrls: ['./dash.component.css']
})
export class DashComponent {
  /** Based on the screen size, switch from standard to one column per row */
  cards = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
    map(({ matches }) => {
      if (matches) {
        return [
          { title: 'Global Data', cols: 2, rows: 1 },
          { title: 'Global Data', cols: 2, rows: 2}
        ];
      }

      return [
        { title: 'Global Data', cols: 2, rows: 1 },
        { title: 'Global Data', cols: 2, rows: 2 }
      ];
    })
  );

  constructor(private breakpointObserver: BreakpointObserver) {}
}
