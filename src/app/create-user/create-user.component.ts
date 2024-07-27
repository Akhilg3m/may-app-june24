import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent implements OnInit {

  public userForm:FormGroup = new FormGroup({
    name: new FormControl(),
    age: new FormControl(),
    phone: new FormControl(),
    email: new FormControl(),
    address: new FormGroup({
      city: new FormControl(),
      pincode: new FormControl()
    }),
    type: new FormControl(),
    // busFee: new FormControl(),
    // hostelFee: new FormControl()
  })

  constructor() { 

    this.userForm.get('type')?.valueChanges.subscribe(
      (data:any)=>{
        if(data=='dayScholor'){
          // add busfee
          this.userForm.addControl('busFee', new FormControl());
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
    console.log(this.userForm);
  }

}
