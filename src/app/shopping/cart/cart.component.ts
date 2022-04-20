import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Car } from '../car-list/car.model';
import { CartService } from './cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  subscription!: Subscription;
  cart!: Car[];
  constructor( private cartService: CartService) { }

  ngOnInit() {
    this.subscription = this.cartService.cartChanged.subscribe((cars: Car[]) => {
      this.cart = cars;
    })
    this.cart = this.cartService.getCart();
  }

}
