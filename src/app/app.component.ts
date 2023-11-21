import { Component, OnChanges, OnInit } from '@angular/core';
import employeesData from './employees.json';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { from } from 'rxjs';

interface Employees {
  id: Number;
  name: String;
  email: String;
  gender: String;
  location: String
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'task';

  //modal!: Employees | [];
  // modal!: {
  //   id: Number;
  //   name: String;
  //   email: String;
  //   gender: String;
  //   location: String;
  // };

  modal: any

  RegisterForm: FormGroup<{
    id: FormControl<string | null>; name: FormControl<string | null>; email: FormControl<string | null>; gender: FormControl<string | null>;
    location: FormControl<string | null>
  }>;
  id: any;


  constructor(public fb: FormBuilder) {

    this.RegisterForm = this.fb.group({
      id: [""],
      name: [""],
      email: [""],
      location: [""],
      gender: [""],
    })

    //  var modal = {} as Employees

  }

  ngOnInit(): void { }


  employees: Employees[] = employeesData;

  AddUser() {

    console.log(typeof this.employees)


    // this.modal = this.RegisterForm.value
    // console.log(this.modal)
    this.modal = [this.RegisterForm.value];
    console.log(this.modal.id)

  }



}

