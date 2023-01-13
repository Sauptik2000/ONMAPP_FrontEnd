import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserAuthService {

  constructor() { }

  public setRole( customerType : any ){
    localStorage.setItem('customerType', customerType);
  }

  public getRole() : any {
    return localStorage.getItem('customerType');
  }

  public setId( customerId : any ){
    localStorage.setItem('customerId', JSON.stringify(customerId));
  }

  public getId() : any {
    return JSON.parse(localStorage.getItem('customerId')|| 'null'||'{}')
  }

}
