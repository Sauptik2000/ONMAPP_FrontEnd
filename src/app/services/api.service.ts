import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { UserAuthService } from './user-auth.service';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  custId: any = this.userAuth.getId();

  constructor(
    private http: HttpClient,
    private userAuth: UserAuthService
    ) { }

  getViewPlant(){
    return this.http.get('http://localhost:8080/viewPlant');
  }

  postBookOrder(plantId: any,coupanId: any,orderQuantity:any){
    return this.http.post(`http://localhost:8080/bookOrder/${7}/${plantId}/${coupanId}`,orderQuantity);
  }

  getViewOrder(){
    return this.http.get(`http://localhost:8080/viewOrder/${7}`);
  }

  getViewAllOrder(){
    return this.http.get(`http://localhost:8080/viewAllOrder/admin/${7}`);
  }

  deleteCancelOrder(orderId:any){
    return this.http.delete(`http://localhost:8080/cancelOrder/${orderId}/${7}`);
  }

  putUpdateOrder(data: any, orderId: any, customerId: any){
    return this.http.put(`http://localhost:8080/updateOrder/${orderId}/${customerId}`,data)
  }

  postRegistration(data: any){
    return this.http.post('http://localhost:8080/register',data);
  }

  postLogin(data: any){
    return this.http.post('http://localhost:8080/login',data);
  }

  postAddPlant(data: any){
    return this.http.post(`http://localhost:8080/addPlant/${7}`,data);
  }
}
