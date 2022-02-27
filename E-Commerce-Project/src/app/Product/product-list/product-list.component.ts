import { Component, OnInit } from '@angular/core';
import {IProduct} from '../../interfaces/iproduct';
import productList from '../../../assets/products.json';
@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {

  products:IProduct[] =productList;
  constructor() { }

  ngOnInit(): void {
  }

}
