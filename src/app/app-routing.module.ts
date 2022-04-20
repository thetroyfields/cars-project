import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExampleComponent } from './example/example.component';
import { CarDetailComponent } from './shopping/car-detail/car-detail.component';
import { CarListComponent } from './shopping/car-list/car-list.component';
import { ShoppingComponent } from './shopping/shopping.component';

const routes: Routes = [
  {
    path: 'shopping',
    component: ShoppingComponent,
    children: [
      { path: ':index', component: CarDetailComponent },
      { path: '', component: CarListComponent },
    ],
  },
  { path: '', redirectTo: '/shopping', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
