import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import {IProduct} from '../interfaces/iproduct'

@Injectable({
  providedIn: 'root'
})
export class CounterService {
  private counter = new BehaviorSubject(0);
  private totalPrice=new BehaviorSubject(0);
  private products:IProduct[]=[];
  addToCart(product:IProduct){
    if (!this.products.includes(product))
    {
        this.products.push(product);
        return true;
    }
    return false;
  }
  getProducts(){
   return this.products;
  }
  calculateTotalPrice(){
    const products=this.products;
    var total:number=0;
    for (const iterator of products) {
        total+=iterator.price;
    }
    this.totalPrice.next(total);
    return this.totalPrice;
  }
  clearSpecificProduct(elem:IProduct){
    const result = this.products.filter(product => product!==elem);
    this.products=result;
    return this.products;
   }
  getCounterValue(){
    return this.counter;
  }

  setCounterValue(newCounterVal : number){
    this.counter.next(newCounterVal);
  }
}
