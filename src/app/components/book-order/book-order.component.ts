import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { dataModel } from './book-order.model';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-book-order',
  templateUrl: './book-order.component.html',
  styleUrls: ['./book-order.component.css'],
})
export class BookOrderComponent implements OnInit {
  allPlant: any;
  customer: any;
  formValue!: FormGroup;
  dataModelObj: dataModel = new dataModel();

  constructor(
    private apiService: ApiService,
    private formBuilder: FormBuilder,
    private toastr: ToastrService
  ) {}

  ngOnInit(): void {
    // view Plant
    this.apiService.getViewPlant().subscribe({
      next: (response) => {
        console.log(response);
        this.allPlant = response;
      },
      error: (error) => {
        console.error(error);
      },
    });

    // Book Order Form Control
    this.formValue = this.formBuilder.group({
      plantId: [''],
      coupanId: [''],
      orderQuantity: [''],
    });
  }

  bookOrder() {
    console.log(this.formValue.value.plantId);
    console.log(this.formValue.value.coupanId);
    console.log(this.formValue.value.orderQuantity);

    this.dataModelObj.orderQuantity = this.formValue.value.orderQuantity;
    console.log(this.dataModelObj);

    this.apiService
      .postBookOrder(
        this.formValue.value.plantId,
        this.formValue.value.coupanId,
        this.dataModelObj
      )
      .subscribe({
        next: (response) => {
          console.log(response);
          this.toastr.success('Plant Ordered');
        },
        error: (error) => {
          console.error(error);
        },
      });
      this.formValue.reset();
  }

  // clear(){
  //   this.formValue.reset();
  // }
}
