import { NgModule } from "@angular/core";

import { MatButtonModule} from '@angular/material/button';
import { MatToolbarModule} from '@angular/material/toolbar';
import { MatIconModule} from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import {MatGridListModule} from '@angular/material/grid-list';

@NgModule({
  imports: [MatButtonModule, MatToolbarModule, MatIconModule, MatMenuModule, MatGridListModule],
  exports: [MatButtonModule, MatToolbarModule, MatIconModule, MatMenuModule, MatGridListModule],
})
export class MyMaterialModule { }