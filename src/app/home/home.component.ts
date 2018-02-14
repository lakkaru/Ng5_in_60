import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  // itemCount:number=4;
  itemCount:number;
  btnText:string='Add New Item';
  goalText:string="My life first goal";
  golas=[];
  constructor() { }

  ngOnInit() {
    this.itemCount=this.golas.length;
  }

  addItem(){
    this.golas.push(this.goalText);
    this.goalText="";
    this.itemCount=this.golas.length;
  }

}
