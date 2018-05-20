import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';

@Component({
  selector: 'app-iniat',
  templateUrl: './iniat.component.html',
  styleUrls: ['./iniat.component.css']
})
export class IniatComponent implements OnInit {

  public myForm: FormGroup;
  constructor(private _fb: FormBuilder) { }

  ngOnInit() {
    this.myForm = this._fb.group({

        data: this._fb.array([
            this.initAddress(),
        ])
    });
}

initAddress() {
    return this._fb.group({
      kindOfPerson: ['', Validators.required],
      documentType: ['', Validators.required],
      document: ['', Validators.required],
      name: ['', Validators.required],
      secondSurname: ['', Validators.required],
      surname: ['', Validators.required],
    });
}

addAddress() {
    const control = <FormArray>this.myForm.controls['data'];
    control.push(this.initAddress());
}

removeAddress(i: number) {
    const control = <FormArray>this.myForm.controls['data'];
    control.removeAt(i);
}

save(model: Customer) {
    // call API to save
    // ...
    console.log(model);
}

}


export interface Customer {
  name: string;
  addresses: Address[];
}

export interface Address {
  street: string;
  postcode: string;
}
