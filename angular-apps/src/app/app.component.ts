import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title:string = 'Welcome to angular first demo session';
  name:string="Nirmala";
  modelName:string="";
  isMobile:boolean=false;
  mycategory:string="Accessories";
  output:string="";
  showMobile(){
    this.isMobile=!this.isMobile;
  }


}
