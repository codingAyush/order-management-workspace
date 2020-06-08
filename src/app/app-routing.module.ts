import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { UserListComponent } from './users-module/containers/user-list/user-list.component';


const routes: Routes = [
  { path:'' , redirectTo:'users', pathMatch:'full'},
  {path:'users',component:UserListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
