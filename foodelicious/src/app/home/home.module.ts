import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { OrderComponent } from './order/order.component';
import { ListOfProductsComponent } from './list-of-products/list-of-products.component';

@NgModule({
  declarations: [
    HomeComponent,
    OrderComponent,
    ListOfProductsComponent,
  ],
  imports: [
    CommonModule,
  ],
})
export class HomeModule { }
