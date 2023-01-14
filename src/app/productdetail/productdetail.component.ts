import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Products } from 'src/assets/Modules/Products';


@Component({
  selector: 'app-productdetail',
  templateUrl: './productdetail.component.html',
  styleUrls: ['./productdetail.component.css']
})
export class ProductdetailComponent implements OnInit {
  @Input() product: Products;
  @Input() cartList: Products[] = [];
  oldAmount: number = 0;
  AmountArr: number[] = [];

  @Output() showProductList: EventEmitter<Products> = new EventEmitter;
  selectedAmount: number = 0;
  constructor() {
    this.product = {
      id: 0,
      name: '',
      price: 0,
      url: '',
      description: '',
      amount: 0
    };
  }

  ngOnInit(): void {
    this.AmountArr = Array.from({ length: 100 }, (_, i) => i + 1);
    console.log(this.cartList);


  }
  onOptionsSelected(value: string) {
    console.log(value);
    this.product.amount = Number.parseInt(value);
  }
  LoadProductList(): void {
    this.showProductList.emit();
  }
  AddToCart(product: Products): void {
    if (this.cartList.indexOf(product) === -1) {
      this.cartList.push(product);
      this.oldAmount = product.amount;
      console.log(this.oldAmount);

    }
    else {
      product.amount = product.amount + this.oldAmount;
      console.log(product);
      this.oldAmount = product.amount;

    }
    console.log(this.cartList);

    alert('Added To Cart!');
  }
}
