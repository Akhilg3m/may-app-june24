import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent implements OnInit {

  public userForm:FormGroup = new FormGroup({
    name: new FormControl(null, [Validators.required, Validators.minLength(3), Validators.maxLength(10)]),
    age: new FormControl(null, [Validators.required,Validators.min(0), Validators.max(100)]),
    phone: new FormControl(null, [Validators.required,Validators.min(1000000000), Validators.max(9999999999)]),
    email: new FormControl(null, [Validators.required,Validators.email]),
    address: new FormGroup({
      city: new FormControl(null, [Validators.required]),
      pincode: new FormControl()
    }),
    type: new FormControl(),
    // busFee: new FormControl(),
    // hostelFee: new FormControl(),
    cards: new FormArray([])
  })

  get cardsFormArray(){
    return this.userForm.get('cards') as FormArray;
  }

  addCard(){
    this.cardsFormArray.push(
      new FormGroup({
        number: new FormControl(null, [Validators.required]),
        expiry: new FormControl(),
        cvv: new FormControl()
      })
    )
  }

  deleteCard(i:number){
    this.cardsFormArray.removeAt(i);
  }


  constructor() { 

    this.userForm.get('type')?.valueChanges.subscribe(
      (data:any)=>{
        if(data=='dayScholor'){
          // add busfee
          this.userForm.addControl('busFee', new FormControl(null, [Validators.min(10000)]));
          this.userForm.removeControl('hoselFee');
        }
        else if(data=='residential'){
          // add hostel fee
          this.userForm.addControl('hostelFee', new FormControl());
          this.userForm.removeControl('busFee');
        }
      }
    )

  }

  ngOnInit(): void {
  }

  submit(){
    this.userForm.markAllAsTouched();
    console.log(this.userForm);
  }

}
