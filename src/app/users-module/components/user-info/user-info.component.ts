import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { ActivatedRoute } from '@angular/router';
import { User } from '../../models/userModel';
import { GeocodeService } from '../../services/geocode.service';

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.css']
})
export class UserInfoComponent implements OnInit {
      userData:User;
      address:string;
      district:string;
      email:string;
      name:string;
      phone:number;
      pincode:number;
      state:string;
      lat:number;
      long:number;
      coordinate:any;
   
  constructor(private userSer:UserService, private route:ActivatedRoute,
     private geoSer:GeocodeService) { }

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
    
    this.address=this.address+','+this.pincode+','+this.district+','+this.state;
    this.addressToCoordinates();
   }

   addressToCoordinates() {
     this.geoSer.geocodeAddress(this.address)
    .subscribe((locationData) => {
      console.log(locationData);
      this.coordinate={
      latitute:locationData.lat,
      longitude:locationData.lng
    }
      }      
    );     
  }

}
