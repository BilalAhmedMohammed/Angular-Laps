import { Component, OnInit } from '@angular/core';
import { CounterService } from '../services/counter.service';
import { IProduct } from '../interfaces/iproduct'

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  productList: any = [];
  total:number=0;
  counter:number=0;
  constructor(private counterService: CounterService) { }
  ngOnInit(): void {
    this.productList = this.counterService.getProducts();
    this.counterService.getCounterValue().subscribe(
      (val)=>{this.counter=val}
    );
    this.counterService.calculateTotalPrice().subscribe(
      (val)=>{this.total=val}
    )
  }
  increase(quantity: any) {
    const inc: number = parseInt(quantity.value);
    quantity.value = inc + 1;
  }
  decrease(quantity: any) {
    const dec: number = parseInt(quantity.value);
    if (quantity.value > 1) {
      quantity.value = dec - 1;
    }
  }
  removeThisElement(elem: IProduct) {
    this.productList = this.counterService.clearSpecificProduct(elem);
    this.counterService.setCounterValue(--this.counter);
    this.counterService.calculateTotalPrice().subscribe(
      (val)=>{this.total=val}
    )
  }

}
