import { Component, OnInit } from '@angular/core';
import { CounterService } from '../services/counter.service';
import { IProduct } from '../interfaces/iproduct'
import { Observable } from 'rxjs';
import { of } from 'rxjs';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  productList: any = [];
  counter: Observable<number> = of(0);
  constructor(private counterService: CounterService) {
    console.log('constructor');
  }
  ngOnInit(): void {
    console.log('On init');
    this.productList = this.counterService.getProducts();
    this.counter = this.counterService.getCounterValue();
  }
  increase(quantity: any) {
    const inc: number = parseInt(quantity.value);
    quantity.value = inc + 1;
  }
  decrease(quantity: any) {
    const dec: number = parseInt(quantity.value);
    if (quantity.value > 0) {
      quantity.value = dec - 1;
    }
  }
  removeThisElement(elem: IProduct) {
    this.productList = this.counterService.clearSpecificProduct(elem);
  }

}
