import { Component, OnInit,Input } from '@angular/core';
import { Router } from '@angular/router';
import { CounterService } from 'src/app/services/counter.service';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss']
})
export class ProductCardComponent implements OnInit {
  @Input() product:any;
  constructor(private router:Router,private counterService:CounterService) {
   }
  counter=0;
  ngOnInit(): void {
    this.counterService.getCounterValue().subscribe(
      (val) => {this.counter = val}
    );
  }
  navigateToProductDetails() {
    this.router.navigate(['' , this.product.id])
  }
  increaseCounterCart(){
    this.counterService.setCounterValue(++this.counter);
    this.counterService.addToCart(this.product);
  }

}
