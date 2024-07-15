import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { InputContainerComponent } from '../../components/input-container/input-container.component';
import { FoodService } from '../../services/food.service';
import { DialogRef } from '@angular/cdk/dialog';

@Component({
  selector: 'add-food',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, InputContainerComponent],
  templateUrl: './add-food.component.html',
  styleUrls: ['./add-food.component.scss']
})
export class AddFoodComponent implements OnInit {
  addFoodForm!: FormGroup;
  #fb = inject(FormBuilder);
  #dialogRef=inject(DialogRef)
  #foodServicde = inject(FoodService);

  ngOnInit(): void {
    this.addFoodForm = this.#fb.group({
      name: ['', Validators.required],
      price: ['', Validators.required],
      cookTime: ['', Validators.required],
      tag: ['', Validators.required],
      imgUrl: ['', Validators.required],


    })
  }

  getFormControl(control: string): FormControl {
    return this.addFoodForm.get(`${control}`) as FormControl;
  }

  addFood() {
    if (this.addFoodForm.invalid) {
      this.addFoodForm.markAllAsTouched();
      return;
    }
    this.#foodServicde.addFood(this.addFoodForm.value).subscribe((res)=>{
      console.log('add food response',res);
      if(res){
        this.addFoodForm.reset();
        this.closeDialog();
        window.location.reload()
      }
      
    })

  }

  closeDialog() {
    this.#dialogRef.close('Pizza!');
  }

}
