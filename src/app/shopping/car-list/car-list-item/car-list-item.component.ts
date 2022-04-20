import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CartService } from '../../cart/cart.service';
import { Car } from '../car.model';

@Component({
  selector: 'app-car-list-item',
  templateUrl: './car-list-item.component.html',
  styleUrls: ['./car-list-item.component.css']
})
export class CarListItemComponent implements OnInit {
  @Input() car!: Car;
  @Input() index!: number;

  constructor( private cartService: CartService,
          private router: Router,
          private route: ActivatedRoute ) { }

  ngOnInit() {

  }

  onViewItem() {
    this.router.navigate([''], {relativeTo: this.route});
  }
  onAddToCart(car: Car){
    this.cartService.addToCart(this.car);
  }

  onRemoveFromCart() {

  }


  handleNavigate(index:number){
    this.router.navigateByUrl(`shopping/${index}`);
  }
}
