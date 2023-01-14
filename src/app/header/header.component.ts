import { Component, OnInit } from '@angular/core';
import { Products } from 'src/assets/Modules/Products';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  productList :boolean=false;
  cart : boolean= false;
  cartList: Products[] = [];

  constructor() { }

  ngOnInit(): void {
    this.productList=true;
    this.cart=false;  

  }
  ChangeProduct():void{
    this.productList=true;
    this.cart=false;  

  }
ChangeCart():void{
  this.productList=false
  this.cart=true;  
}
}
