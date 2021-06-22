import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.css']
})
export class PipesComponent implements OnInit {

  empname:string="sherine";
  salary:number=40000.324;
  todayDate:Date=new Date();
  username:string="Nirmala";
  num:number=0.09;
  fees:number=200;
 names:string[]=["antony","renisha","nirmala","colette"];

  constructor() { }

  ngOnInit(): void {
  }

}
