import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { FormBuilder,FormGroup } from '@angular/forms';
import { registrationModel } from './registration.model';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  formValue!: FormGroup;
  registrationModelObj: registrationModel = new registrationModel();

  constructor(
    private apiService: ApiService,
    private formBuilder: FormBuilder,
    private router: Router,
    private toastr: ToastrService
  ) { }

  ngOnInit(): void {
    this.formValue = this.formBuilder.group({
      customerName: [''],
      customerEmail: [''],
      password: [''],
    })
  }

  registration(){
    console.log(this.formValue.value.customerName);
    console.log(this.formValue.value.customerEmail);
    console.log(this.formValue.value.password);

    this.registrationModelObj.customerName = this.formValue.value.customerName;
    this.registrationModelObj.customerEmail = this.formValue.value.customerEmail;
    this.registrationModelObj.password = this.formValue.value.password;

    console.log(this.registrationModelObj)

    this.apiService
    .postRegistration(
      this.registrationModelObj
    )
    .subscribe({
      next: (response) => {
        console.log(response);
        this.toastr.success("Registration Done!")
      },
      error: (error) => {
        console.error(error);
      }
    })

  }

  // loginPage(){
  //   this.router.navigate(['/login']);
  // }

}
