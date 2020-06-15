import { Routes, RouterModule } from "@angular/router";
import { OrdersComponent } from './components/orders/orders.component';
import { ItemListComponent } from './containers/item-list/item-list.component';

const orderRoutes:Routes=[ 
    { path:'', component:OrdersComponent} ,
    {path:'itemList', component:ItemListComponent}
];

export const OrderRouting= RouterModule.forChild(orderRoutes);
