import { Component, Inject, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DialogRef } from '@angular/cdk/dialog';
import { FormGroup, FormBuilder, Validators, FormControl, ReactiveFormsModule } from '@angular/forms';
import { FoodService } from '../../services/food.service';
import { InputContainerComponent } from '../../components/input-container/input-container.component';
import { HomeService } from '../../services/website/home.service';
import {MatDialogModule} from '@angular/material/dialog';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
@Component({
  selector: 'app-update-food',
  standalone: true,
  imports: [CommonModule,ReactiveFormsModule,MatDialogModule,InputContainerComponent,],
  templateUrl: './update-food.component.html',
  styleUrls: ['./update-food.component.scss']
})
export class UpdateFoodComponent {
  updateForm!: FormGroup;
  #fb = inject(FormBuilder);
  #dialogRef=inject(DialogRef)
  #foodServicde = inject(FoodService);
  #homeService=inject(HomeService);

  // constructor(@Inject(MAT_DIALOG_DATA) public data: {id: string}) { }
  constructor(@Inject(MAT_DIALOG_DATA) public data: any) {
    console.log(data); // Now you can access the data object here
  }
  
  ngOnInit(): void {
    this.updateForm = this.#fb.group({
      name: ['', Validators.required],
      price: ['', Validators.required],
      cookTime: ['', Validators.required],
      tag: ['', Validators.required],
      imgUrl: ['', Validators.required],


    })


    // this.#homeService.getFoodById(this.data.id).subscribe((res)=>{
    //   console.log('food',res);
    // })
  }

  getFormControl(control: string): FormControl {
    return this.updateForm.get(`${control}`) as FormControl;
  }

  updateFood() {
    if (this.updateForm.invalid) {
      this.updateForm.markAllAsTouched();
      return;
    }

  }

  closeDialog() {
    this.#dialogRef.close('Pizza!');
  }
}
