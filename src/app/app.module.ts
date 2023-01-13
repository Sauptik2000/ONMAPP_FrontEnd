import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BookOrderComponent } from './components/book-order/book-order.component';
import { ViewOrderComponent } from './components/view-order/view-order.component';
import { ViewAllOrderComponent } from './components/view-all-order/view-all-order.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RegistrationComponent } from './components/registration/registration.component';
import { LoginComponent } from './components/login/login.component';
import { PlantComponent } from './components/plant/plant.component';

@NgModule({
  declarations: [
    AppComponent,
    BookOrderComponent,
    ViewOrderComponent,
    ViewAllOrderComponent,
    RegistrationComponent,
    LoginComponent,
    PlantComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
