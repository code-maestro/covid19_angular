import { NgModule } from "@angular/core";

import { MatButtonModule} from '@angular/material/button';
import { MatToolbarModule} from '@angular/material/toolbar';
import { MatIconModule} from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatChipsModule} from '@angular/material/chips';
import {MatBadgeModule} from '@angular/material/badge';

@NgModule({
  imports: [
    MatButtonModule, 
    MatToolbarModule, 
    MatIconModule, 
    MatMenuModule, 
    MatGridListModule, 
    MatChipsModule, 
    MatBadgeModule
  ],
  exports: [
    MatButtonModule, 
    MatToolbarModule, 
    MatIconModule, 
    MatMenuModule, 
    MatGridListModule, 
    MatChipsModule, 
    MatBadgeModule
  ],
})
export class MyMaterialModule { }