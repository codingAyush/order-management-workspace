import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-location-detect',
  templateUrl: './location-detect.component.html',
  styleUrls: ['./location-detect.component.css']
})
export class LocationDetectComponent implements OnInit {
  lat: number=12.9 ;
  lng: number=77 ;
  @Input() location;
  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges():void{
   
    if(this.location){
       this.lat=this.location.latitude;
       this.lng=this.location.longitude;
    }
    
  }

}
