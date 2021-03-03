import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { UgandaComponent } from './uganda/uganda.component';
import { ShopComponent } from './shop/shop.component';

const routes: Routes = [
  {path: '', component:UgandaComponent},
  {path: 'uganda', component:UgandaComponent},
  {path: 'home', component:HomeComponent},
  {path: 'shop', component:ShopComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]

})

export class AppRoutingModule { }

export const routingComponents = [
  UgandaComponent,
  HomeComponent,
  ShopComponent
]
