import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component'
import { UsersModule } from './users-module/users-module.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatIconModule} from '@angular/material/icon'
@NgModule({
  exports:[
    MatIconModule
  ]

})

export class OrderMgmtMaterialModule{}

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    UsersModule,
    BrowserAnimationsModule,
    OrderMgmtMaterialModule,
  ], 
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
