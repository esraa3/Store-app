import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CartData } from 'src/assets/Modules/CartData';
import { Products } from 'src/assets/Modules/Products';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  @Input() cartList: Products[] = [];
  @Output() showHeader: EventEmitter<Products> = new EventEmitter;
  cartData: CartData;
  Show: boolean = false;

  constructor() {
    this.cartData = {
      fullName: '',
      address: '',
      TotalAmount: 0
    };
  }

  ngOnInit(): void {
    console.log(this.cartList);
    this.calculateTotalPrice();
    this.Show = false;
  }
  calculateTotalPrice(): void {
    this.cartData.TotalAmount = 0;
    for (let index = 0; index < this.cartList.length; index++) {
      this.cartData.TotalAmount += this.cartList[index].amount * this.cartList[index].price;
    }
    console.log(this.cartData.TotalAmount);
  }
  ChangeTotalPrice(product: Products): void {
    if (product.amount == 0) {
      const index: number = this.cartList.indexOf(product);
      if (index !== -1) {
        this.cartList.splice(index, 1);
      }
      alert("Removed from Cart!");
    }
    console.log(this.cartList);
    this.calculateTotalPrice();
  }
  onSubmit(): void {
    console.log("asd");
    this.Show = true;

  }
  showCart(cart: CartData): void {
    this.showHeader.emit();
  }
  CheckNumbers(event:any): boolean {
    const charCode = (event.which) ? event.which : event.keyCode;
    console.log(charCode);
    if (charCode > 31 && (charCode < 48 || charCode > 57)) {
      return false;
    }
    return true;

  }
}


