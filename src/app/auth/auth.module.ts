import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { authRouting } from './auth.routing';
import { LoginComponent } from './components/login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [LoginComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    authRouting
  ]
})
export class AuthModule { }
