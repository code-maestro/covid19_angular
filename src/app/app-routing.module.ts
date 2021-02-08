import { Component, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashComponent } from './dash/dash.component';
import { HomeComponent } from './home/home.component';
import { UgandaComponent } from './uganda/uganda.component';
import { MohSopsComponent } from './moh-sops/moh-sops.component';

const routes: Routes = [
  {path: '', component:UgandaComponent},
  {path: 'uganda', component:UgandaComponent},
  {path: 'dash', component:DashComponent},
  {path: 'home', component:HomeComponent},
  {path: 'moh_sops', component:MohSopsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]

})

export class AppRoutingModule { }
export const routingComponents = [
  UgandaComponent,
  DashComponent,
  HomeComponent,
  MohSopsComponent
]
