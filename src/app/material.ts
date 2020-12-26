import { NgModule } from "@angular/core";
import { MatButtonModule} from '@angular/material/button';
import { MatToolbarModule} from '@angular/material/toolbar';
import { MatIconModule} from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import {MatChipsModule} from '@angular/material/chips';
import {MatBadgeModule} from '@angular/material/badge';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatDialogModule } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatSnackBarModule } from '@angular/material/snack-bar';

@NgModule({
  imports: [
    MatButtonModule, 
    MatToolbarModule, 
    MatIconModule, 
    MatMenuModule, 
    MatGridListModule, 
    MatChipsModule, 
    MatFormFieldModule,
    MatBadgeModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule,
    MatDialogModule,
    MatInputModule,
    MatSelectModule,
    MatSnackBarModule,
    MatFormFieldModule
  ],
  exports: [
    MatButtonModule,
    MatInputModule,
    MatSelectModule, 
    MatToolbarModule, 
    MatIconModule, 
    MatMenuModule, 
    MatGridListModule, 
    MatChipsModule, 
    MatFormFieldModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatListModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule,
    MatDialogModule,
    MatFormFieldModule,
    MatSnackBarModule,
    MatBadgeModule
  ],
})

export class MyMaterialModule{}