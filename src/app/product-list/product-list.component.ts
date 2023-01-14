import { Component,  Input,  OnInit } from '@angular/core';
import { Products } from 'src/assets/Modules/Products';
import { HttpServiceService } from '../services/http-service.service';


@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  productList: Products[] = [];
  selectedAmount: number = 0;
  Show: boolean = false;
  childProduct: Products;
  @Input() cartList: Products[] = [];
  oldAmount: number = 0;
  AmountArr: number[] = [];

 
  constructor(private httpService: HttpServiceService) {
    this.childProduct = {
      id: 0,
      name: '',
      price: 0,
      url: '',
      description: '',
      amount: 1

    };
  }

  ngOnInit(): void {
    this.AmountArr = Array.from({ length: 100 }, (_, i) => i + 1);

    this.GetProducts();
  }
  GetProducts(): void {
    this.httpService.getProducts().subscribe(res => {
      console.log(res);
      this.productList = res;
      console.log(this.productList);
    });

  }
  LoadDeatis(Childproduct: Products): void {
    this.Show = true;
    this.childProduct = Childproduct;
    
  }
  showProductList(product: Products): void {
    console.log(product);
    this.Show = false;

  }
  AddToCart(product: Products): void {
    if (this.cartList.indexOf(product) === -1) {
      this.cartList.push(product);
      console.log(this.cartList);
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
