import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  myname:string='';
  
  constructor() { }

  ngOnInit(): void {
  }
  mysubmit(value){
    console.log(value);
  }
onclear(form){
  console.log(form);
  form.resetform();
}
}
