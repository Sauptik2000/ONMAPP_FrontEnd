import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { PlantUpdateModel } from './plantUpdate.model';
import { PlantAddModel } from './plantAdd.model';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-plant',
  templateUrl: './plant.component.html',
  styleUrls: ['./plant.component.css']
})
export class PlantComponent implements OnInit {

  allPlant: any;
  formValue !: FormGroup;
  plantAddModelObj: PlantAddModel = new PlantAddModel();

  constructor(
    private apiService : ApiService,
    private formBuilder : FormBuilder,
    private toastr : ToastrService
  ) { }

  ngOnInit(): void {
    // view Plant
    this.getAllPlant();

    //Add Plant Form Control
    this.formValue = this.formBuilder.group({
      plantName : [''],
      plantDesccription : [''],
      plantCost : [''],
    })
  }

  getAllPlant(){
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
  }

  addPlant(){
    console.log(this.formValue.value.plantCost);

    this.plantAddModelObj.plantName = this.formValue.value.plantName;
    this.plantAddModelObj.plantDesccription = this.formValue.value.plantDesccription;
    this.plantAddModelObj.plantCost = this.formValue.value.plantCost;

    console.log(this.plantAddModelObj);

    this.apiService
    .postAddPlant(
      this.plantAddModelObj
    )
    .subscribe({
      next: (response) => {
          console.log(response);
          this.toastr.success('Plant Added');
          this.getAllPlant();
        },
        error: (error) => {
          console.error(error);
        },
    });
    this.formValue.reset();
  }

}
