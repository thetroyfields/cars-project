import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ShoppingComponent } from './shopping/shopping.component';
import { CartComponent } from './shopping/cart/cart.component';
import { CartItemComponent } from './shopping/cart/cart-item/cart-item.component';
import { FiltersComponent } from './shopping/filters/filters.component';
import { CarListComponent } from './shopping/car-list/car-list.component';
import { CarListItemComponent } from './shopping/car-list/car-list-item/car-list-item.component';
import { FooterComponent } from './shared/footer/footer.component';
import { NavComponent } from './shared/nav/nav.component';
import { HeaderComponent } from './shared/header/header.component';
import { CarService } from './shopping/car-list/car.service';
import { CarDetailComponent } from './shopping/car-detail/car-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    ShoppingComponent,
    CartComponent,
    CartItemComponent,
    FiltersComponent,
    CarListComponent,
    CarListItemComponent,
    FooterComponent,
    NavComponent,
    HeaderComponent,
    CarDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [CarService],
  bootstrap: [AppComponent]
})
export class AppModule { }
