import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OrdersService } from '../../services/orders.service';

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.css']
})
export class ItemListComponent implements OnInit {

      address:string;
      district:string;
      email:string;
      name:string;
      phone:number;
      pincode:number;
      state:string;
      lat:number;
      long:number;
  constructor(private route:ActivatedRoute, private orderSer:OrdersService) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params=>{
      this.address=params['address'];
      this.district=params['district'];
      this.email=params['email'];
      this.lat=params['lat'];
      this.long=params['long'];
      this.name=params['name'];
      this.phone=params['phone'];
      this.state=params['state'];
      this.pincode=params['pincode'];
    });
  }

  placeOrder(flag):void{
    if(flag){
      var payLoad=this.getOrderPayload();
      this.callSaveOrderApi(payLoad);
    }
  }

  callSaveOrderApi(payLoad){
    this.orderSer.saveUserOrder(payLoad).subscribe({
      next:resData=>{
        if(resData.name){
          alert("order placed successfully")
        }
      }
    });
  }

  getOrderPayload():any{
    const payLoad={
      soldTo:this.name,
      email:this.email,
      itemName:'Mi -Band 5',
      quantity:'1',
      price:'$200',
      soldBy:'Amazon',
      deliveredOn:'9th June 2020'
    }
    return payLoad;
  }
}
