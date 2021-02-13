import { Component, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { UgandaComponent } from './uganda/uganda.component';

const routes: Routes = [
  {path: '', component:UgandaComponent},
  {path: 'uganda', component:UgandaComponent},
  {path: 'home', component:HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]

})

export class AppRoutingModule { }
export const routingComponents = [
  UgandaComponent,
  HomeComponent
]
