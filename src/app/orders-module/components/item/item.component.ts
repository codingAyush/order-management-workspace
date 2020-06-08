import { Component, OnInit, Output ,EventEmitter} from '@angular/core';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {
  @Output() buyEvent=new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }

  buyItem():void{
    this.buyEvent.emit(true);
  }

}
