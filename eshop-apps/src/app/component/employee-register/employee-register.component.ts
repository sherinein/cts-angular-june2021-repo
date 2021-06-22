import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup,Validators} from '@angular/forms';
import { Employee } from 'src/app/model/employee';
@Component({
  selector: 'app-employee-register',
  templateUrl: './employee-register.component.html',
  styleUrls: ['./employee-register.component.css']
})
export class EmployeeRegisterComponent implements OnInit {
 employee:Employee=new Employee();
 registerForm:FormGroup;
 submitted:boolean=false;
constructor(private formBuilder:FormBuilder) { }

  ngOnInit(): void {
    this.registerForm=this.formBuilder.group(
    {
      employeeid:['',Validators.required],
      employeename:['',Validators.required]
     }
    );
  }



onSubmit(){
  this.submitted=true;
  this.employee=this.registerForm;
  console.log(this.employee);
}

}
