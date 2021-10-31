import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, FormArray} from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  contactUsForm: FormGroup
  showAddHighSchool= false;
  
  highschool = ['McCracken', 'Tilghman', 'Ballard', 'Marshall', 'Graves', 'Other'  ] ;

  

  constructor() {
    this.contactUsForm = new FormGroup({
      'fname' : new FormControl('', Validators.required),
      'lname' : new FormControl('',Validators.required),
      'phone' : new FormControl('',Validators.required),
      'bdate' : new FormControl(),
      'experience' : new FormControl(),
      'highschool' : new FormControl(), 
      'otherHighschools' : new FormArray([])
    });

   }
   onSubmit(){
     console.log(this.contactUsForm)
   }
   onAddHighschool(){
    this.showAddHighSchool = !this.showAddHighSchool; 

   }

  ngOnInit() {}

}