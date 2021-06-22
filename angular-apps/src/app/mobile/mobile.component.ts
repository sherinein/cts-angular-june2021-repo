import { Component, Input, OnInit, Output,EventEmitter } from '@angular/core';


@Component({
  selector: 'app-mobile',
  templateUrl: './mobile.component.html',
  styleUrls: ['./mobile.component.css']
})
export class MobileComponent implements OnInit {
  @Input("usercategory")
  userCategories:string="";
  constructor() {
    this.loadbrandNames();
   }


  brandNames:string[]=[];
  
  mobileSpecification:string="Samsung 128GB Ram";
  
  @Output()
  eventEmitter:EventEmitter<string>=new EventEmitter();

  sendOutput(){
    this.eventEmitter.emit(this.mobileSpecification);
  }

  loadbrandNames(){
    this.brandNames.push('Samsung');
    this.brandNames.push('Apple');
    this.brandNames.push('RealMe');
    this.brandNames.push('MI');
  }
 

  ngOnInit(): void {
  }

}
