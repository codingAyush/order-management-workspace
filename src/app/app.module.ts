import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OrdersModule } from './orders-module/orders-module.module';
import { UsersModule } from './users-module/users-module.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatIconModule} from '@angular/material/icon';
import { AuthModule } from './auth/auth.module';
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
    OrdersModule,
    UsersModule,
    AuthModule,
    BrowserAnimationsModule,
    OrderMgmtMaterialModule,
  ], 
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
