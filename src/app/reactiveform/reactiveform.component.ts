import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-reactiveform',
  templateUrl: './reactiveform.component.html',
  styleUrls: ['./reactiveform.component.css']
})
export class ReactiveformComponent implements OnInit {
  contactUs: FormGroup;
  school = ['McCracken', 'Tilghman','Marshall','Graves','Mayfield','Ballard', 'Other']

  constructor() { }

  ngOnInit() {
    this.contactUs= new FormGroup({
      'fname': new FormControl(),
      'lname': new FormControl(),
      'email': new FormControl(),
      'phone': new FormControl(),
      'school': new FormControl(),
    

    })
  }
  onSubmit(){
    console.log(this.contactUs)
  }

}