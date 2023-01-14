import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CartData } from 'src/assets/Modules/CartData';
@Component({
  selector: 'app-order-confirmation',
  templateUrl: './order-confirmation.component.html',
  styleUrls: ['./order-confirmation.component.css']
})
export class OrderConfirmationComponent implements OnInit {
 @Input() cartData :CartData;
@Output () showCart :EventEmitter<CartData>=new EventEmitter;
  constructor() {
    this.cartData ={
      fullName:'',
      address:'',
      TotalAmount:0
    }
   }

  ngOnInit(): void {
  }
  LoadProductList(){
    this.showCart.emit();
  }
}
