import { NgModule } from "@angular/core";

import { MatButtonModule} from '@angular/material/button';
import { MatToolbarModule} from '@angular/material/toolbar';
import { MatIconModule} from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';

@NgModule({
  imports: [MatButtonModule, MatToolbarModule, MatIconModule, MatMenuModule],
  exports: [MatButtonModule, MatToolbarModule, MatIconModule, MatMenuModule],
})
export class MyMaterialModule { }