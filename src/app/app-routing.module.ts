import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserListComponent } from './users-module/containers/user-list/user-list.component';


const routes: Routes = [
  { path:'' , redirectTo:'users', pathMatch:'full'},
  {path:'users',component:UserListComponent},
  // {path:'users', loadChildren:()=>import('../app/users-module/users-module.module').then(m=>m.UsersModule)}
  { path:'orders' ,loadChildren:()=>import('../app/orders-module/orders-module.module')
      .then(m=>m.OrdersModule)},
  {path:'login', loadChildren:()=>import('../app/auth/auth.module').then(m=>m.AuthModule)},
  // {path:'**', component:UserListComponent}
]
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
