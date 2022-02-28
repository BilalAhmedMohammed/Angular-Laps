import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import {IProduct} from '../interfaces/iproduct'

@Injectable({
  providedIn: 'root'
})
export class CounterService {
  private counter = new BehaviorSubject(0);
  // private cartObject = new BehaviorSubject({});
  private products:IProduct[]=[];
  addToCart(product:IProduct){
    this.products.push(product);
  }
  getProducts(){
   return this.products;
  }
  clearSpecificProduct(elem:IProduct){
    const result = this.products.filter(product => product!==elem);
    this.products=result;
    return this.products;

   }
  // getCartObjectValue(){
  //   return this.cartObject;
  // }
  // setCartObjectValue(newcartObject : {}){
  //   this.cartObject.next(newcartObject);
  // }
  getCounterValue(){
    return this.counter;
  }

  setCounterValue(newCounterVal : number){
    this.counter.next(newCounterVal);
  }
}
