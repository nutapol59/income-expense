import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'tableDetail',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  checkType:number = 0;
  isClick:boolean=false;

  constructor() { }

  ngOnInit() {
    
  }

  checkAddClick(){
    this.isClick = true;
  }



}
