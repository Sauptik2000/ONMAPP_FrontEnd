import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-view-all-order',
  templateUrl: './view-all-order.component.html',
  styleUrls: ['./view-all-order.component.css']
})
export class ViewAllOrderComponent implements OnInit {
  allOrder : any;

  constructor(private apiService : ApiService) { }

  ngOnInit(): void {
    
    //View All Order
    this.apiService.getViewAllOrder().subscribe({
      next: (response) => {
        console.log(response);
        this.allOrder = response;
      },
      error: (error) => {
        console.log(error);
      }
    });
  }


}
