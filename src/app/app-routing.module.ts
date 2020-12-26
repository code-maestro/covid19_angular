import { Component, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { from } from 'rxjs';
import { DashComponent } from './dash/dash.component';
import { HomeComponent } from './home/home.component';
import { UgandaComponent } from './uganda/uganda.component';
import { ShopComponent } from './shop/shop.component';
import { MohSopsComponent } from './moh-sops/moh-sops.component';
import { DialogComponent } from './dialog/dialog.component';

const routes: Routes = [
  {path: '', component:UgandaComponent},
  {path: 'uganda', component:UgandaComponent},
  {path: 'dash', component:DashComponent},
  {path: 'home', component:HomeComponent},
  {path: 'moh_sops', component:MohSopsComponent},
  {path: 'shop', component:ShopComponent}
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
  ShopComponent,
  MohSopsComponent
]
