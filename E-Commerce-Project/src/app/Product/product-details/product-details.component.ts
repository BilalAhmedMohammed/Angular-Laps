import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IProduct } from 'src/app/interfaces/iproduct';
import productList from '../../../assets/products.json'
@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {
  productDetails :any;
  products : IProduct[]=productList;
  constructor(private activatedRoute : ActivatedRoute) { 
    const activeID = this.activatedRoute.snapshot.params['id']
    this.productDetails = this.products.find(product => product.id == activeID);
  }
  ngOnInit(): void {
  }

}
