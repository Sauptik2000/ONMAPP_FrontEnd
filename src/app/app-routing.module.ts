import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookOrderComponent } from './components/book-order/book-order.component';
import { LoginComponent } from './components/login/login.component';
import { PlantComponent } from './components/plant/plant.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { ViewAllOrderComponent } from './components/view-all-order/view-all-order.component';
import { ViewOrderComponent } from './components/view-order/view-order.component';

const routes: Routes = [
  {path:'',component:LoginComponent},
  {path:'bookOrder',component:BookOrderComponent},
  {path:'viewOrder',component:ViewOrderComponent},
  {path:'viewAllOrder',component:ViewAllOrderComponent},
  {path:'registration',component:RegistrationComponent},
  {path:'login',component:LoginComponent},
  {path:'plant',component:PlantComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
