import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { loginModel } from './login.model';
import { ToastrService } from 'ngx-toastr';
import { UserAuthService } from 'src/app/services/user-auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  formValue!: FormGroup;
  loginModelObj: loginModel = new loginModel();

  constructor(
    private apiService: ApiService,
    private formBuilder: FormBuilder,
    private userAuth: UserAuthService,
    private toastr: ToastrService
  ) {}

  ngOnInit(): void {
    this.formValue = this.formBuilder.group({
      customerEmail: [''],
      password: [''],
    });
  }

  login() {
    //console.log(this.formValue.value.customerEmail);
    //console.log(this.formValue.value.password);

    this.loginModelObj.customerEmail = this.formValue.value.customerEmail;
    this.loginModelObj.password = this.formValue.value.password;

    // console.log(this.loginModelObj)

    this.apiService.postLogin(this.loginModelObj).subscribe({
      next: (res: any) => {
        console.log(res);
        // let resSTR = JSON.stringify(res);
        // let resJSON = JSON.parse(resSTR);
        // console.log(resJSON.customerType);
        // localStorage.setItem('customerId', res.customerId);
        // localStorage.setItem('customerType', resJSON.customerType);

        this.userAuth.setRole(res.customerType);
        this.userAuth.setId(res.customerId);

        console.log(this.userAuth.getId());
        console.log(this.userAuth.getRole());
      },
      error: (error) => {
        let errorSTR = JSON.stringify(error.message);
        let errorJSON = JSON.parse(errorSTR);
        console.log(errorJSON);
      }
    });
  }
  
  //console.log()
}
