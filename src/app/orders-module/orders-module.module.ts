import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrderRouting } from './orders-routing';
import { OrdersComponent } from './components/orders/orders.component';
import { ItemComponent } from './components/item/item.component';
import { ItemListComponent } from './containers/item-list/item-list.component';



@NgModule({
  declarations: [OrdersComponent, ItemListComponent, ItemComponent],
  imports: [
    CommonModule,
    OrderRouting
  ]
})
export class OrdersModule { }
