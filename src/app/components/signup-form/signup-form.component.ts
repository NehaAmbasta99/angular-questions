import { Component, AfterViewInit, OnInit, } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { pipe } from 'rxjs';
import { filter } from "rxjs/operators";
import { User } from 'src/app/models/user';


@Component({
  selector: 'app-signup-form',
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.less']
})
export class SignupFormComponent {
  userModel = new User('Neha', 'abc', 'abc', 'abc@gmail.com', 'female', 'toronto', ['art', 'coding']);
  genders = [{ 'name': 'male', 'selected': false }, { 'name': 'female', 'selected': false }];
  locations = ['toronto', 'ottawa', 'new york'];
  hobbies = [{ name: 'art', selected: false }, { name: 'coding', selected: false }, { name: 'singing', selected: false }, { name: 'reading', selected: false }];
  submitted = false;


  constructor() {
    console.log(this.userModel.hobbies);
    console.log(this.hobbies);
  }
  ngAfterViewInit() {

  }
  submit() {
    this.submitted = true;
    console.log(this.genders.filter((item: any) => {
      return item.selected === true;
    }).map(item=>item.name));

    this.userModel.hobbies  = this.hobbies.filter((item: any) => {
      return item.selected === true;
    }).map(item=>item.name);
  }


  reset() {

  }
}
