import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Product } from 'src/app/common/product';
import { ProductService } from 'src/app/service/product.service';


@Component({
  selector: 'app-register-product',
  templateUrl: './register-product.component.html',
  styleUrls: ['./register-product.component.css']
})
export class RegisterProductComponent implements OnInit {
  product:Product=new Product;
  submitted = false;
  product1:Product[]=[];
  registerForm:FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    private productService:ProductService,
    private router:Router) { }
 
  ngOnInit(): void {
   /* this.registerForm =new FormGroup({
      productname:new FormControl('',Validators.required),
      quantity:new FormControl('',Validators.required),
      price:new FormControl('',Validators.required)
    });*/
    this.registerForm=this.formBuilder.group({
      productname:['',Validators.required,],
      quantity:['',Validators.required],
      price:['',Validators.required]
    });
  }
 get registerFormControl(){
    return this.registerForm.controls;
  }
  onSubmit(){
    this.submitted = true;
    console.log(this.registerForm);
   // this.product=registerForm;
this.product.productName=this.registerForm.value.productname;
this.product.quantity=this.registerForm.value.quantity;
this.product.price=this.registerForm.value.price;
    this.productService.saveProduct(this.product).subscribe(
      positiveResponse=>{
        this.product1=positiveResponse;
        this.router.navigate(['products']);
      },
      negativeResponse=>{
        console.log(negativeResponse);
      }
    )
  }

  
}
