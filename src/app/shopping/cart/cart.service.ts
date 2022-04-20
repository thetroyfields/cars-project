import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Car } from '../car-list/car.model';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  cartChanged = new Subject<Car[]>();
  cart: Car[] = [
    new Car(
      'Subaru Outback',
      'Designed for unlimited adventure and uncompromising safety, the 2022 Outback features the confidence of standard Symmetrical All-Wheel Drive with up to 33 MPG** and the advanced protection of both standard EyeSight® Driver Assist Technology and the available DriverFocus® Distraction Mitigation System. And it’s engineered to last, with 97% of Outback vehicles sold in the last 10 years still on the road today. For 2022, an even higher level of Outback capability is now available: the all-new Subaru Outback Wilderness, featuring extensive all-terrain upgrades including an even more surefooted drivetrain, increased ground clearance, rugged exterior cladding, and a stylish, unique interior.',
      27145,
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgU1R1jKLinA_qln0f7oMsO6oNOEtbBgi-hw&usqp=CAU'
    )
  ];

  constructor() { }

  getCart(){
    return this.cart.slice();
  }
  
  addToCart(car: Car) {
    this.cart.push(car);
    this.cartChanged.next(this.cart.slice());
  }
}
