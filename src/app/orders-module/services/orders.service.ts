import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OrdersService {

  constructor(private httpClient:HttpClient) { }

  saveUserOrder(orderData):Observable<any>{
    return this.httpClient.post("https://my-burger-app-3869d.firebaseio.com/order.json",orderData)
  }

  getUsersOrder():Observable<any>{
    return this.httpClient.get("https://my-burger-app-3869d.firebaseio.com/order.json");
  }

}
