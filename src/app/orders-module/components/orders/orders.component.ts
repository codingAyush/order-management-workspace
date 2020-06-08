import { Component, OnInit } from '@angular/core';
import { OrdersService } from '../../services/orders.service';
import { Order } from '../../models/orderModel';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {
  orders:Order[]=[];
  constructor(private orderSer:OrdersService) { }

  ngOnInit(): void {
    this.getAllUserOrder();
  }

  getAllUserOrder():void{
    this.orderSer.getUsersOrder().subscribe({
      next:orders=>{
        const orderKeys=Object.keys(orders);
        orderKeys.forEach(order=>{
          this.orders.push(orders[order]);
        })
         },
      complete:()=>{
        this.orders.reverse();
      }
    });
  }

}
