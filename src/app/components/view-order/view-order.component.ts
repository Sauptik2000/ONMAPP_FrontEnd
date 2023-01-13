import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { orderModel } from './view-order.model';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-view-order',
  templateUrl: './view-order.component.html',
  styleUrls: ['./view-order.component.css'],
})
export class ViewOrderComponent implements OnInit {
  order: any;
  formValue!: FormGroup;
  orderModelObj: orderModel = new orderModel();
  cId: any;
  oId: any;

  constructor(
    private apiService: ApiService,
    private formBuilder: FormBuilder,
    private toastr: ToastrService
  ) {}

  ngOnInit(): void {
    this.getAllData();

    //Update Order Form Control
    this.formValue = this.formBuilder.group({
      // orderId:number=0;
      // orderQuantity:number=0;
      // customerId:number=0;
      // plantName:string="";
      // coupanId:number=0;
      orderId: [''],
      orderQuantity: [''],
      customerId: [''],
      plantName: [''],
      coupanId: [''],
    });
  }

  //View Order
  getAllData() {
    this.apiService.getViewOrder().subscribe({
      next: (response) => {
        console.log(response);
        this.order = response;
      },
      error: (error) => {
        console.log(error);
      },
    });
  }

  clickEdit(orderId: any, customerId: any, plantName: any, coupanId: any) {
    this.orderModelObj.orderId = orderId;
    this.orderModelObj.customerId = customerId;
    this.orderModelObj.plantName = plantName;
    this.orderModelObj.coupanId = coupanId;
  }

  updateOrder() {
    this.orderModelObj.orderQuantity = this.formValue.value.orderQuantity;
    console.log(this.orderModelObj);
    this.oId = this.orderModelObj.orderId;
    this.cId = this.orderModelObj.customerId;

    this.apiService
      .putUpdateOrder(this.orderModelObj, this.oId, this.cId)
      .subscribe({
        next: (response) => {
          console.log(response);

          this.toastr.info('Order Updated');
          this.getAllData();
        },
      });
      this.formValue.reset();
  }

  delete(orderId: any) {
    console.log(orderId);
    this.apiService.deleteCancelOrder(orderId).subscribe({
      next: (response) => {
        console.log(response);
        this.toastr.error('Order Cancelled');
        this.getAllData();
      },
    });
  }
}
