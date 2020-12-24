//Angular imports
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from "@angular/forms";
import { LayoutModule } from '@angular/cdk/layout';

import { AppRoutingModule, routingComponents } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// FireBase
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';

// Material
import { MyMaterialModule } from './material';
import { MatSliderModule } from '@angular/material/slider';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { MatDialogModule } from '@angular/material/dialog';

//components
import { AppComponent } from './app.component';
import { DataComponent } from './data/data.component';
import { BodyComponent } from './body/body.component';
import { NavComponent } from './nav/nav.component';

var firebaseConfig = {
  apiKey: "AIzaSyCSCFfZkIGKDs6StehcpNEaHd7LvruGJDU",
  authDomain: "mikaelprofile-184a4.firebaseapp.com",
  databaseURL: "https://mikaelprofile-184a4.firebaseio.com",
  projectId: "mikaelprofile-184a4",
  storageBucket: "mikaelprofile-184a4.appspot.com",
  messagingSenderId: "133866741525",
  appId: "1:133866741525:web:88fcf70f50ca453e5c131c",
  measurementId: "G-R674CC3NPM"
};

@NgModule({
  declarations: [
    AppComponent,
    BodyComponent,
    NavComponent,
    routingComponents,
    DataComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MyMaterialModule,
    MatSliderModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFirestoreModule,
    ReactiveFormsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule,
    MatDialogModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
