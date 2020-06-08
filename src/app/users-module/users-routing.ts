import { Routes, RouterModule } from "@angular/router";
import { UserListComponent } from './containers/user-list/user-list.component';
import { UserInfoComponent } from './components/user-info/user-info.component'

const userRoutes:Routes=[
    {path:'users', component:UserListComponent},
    {path:'viewUser', component:UserInfoComponent}
];

export const UsersRouting= RouterModule.forChild(userRoutes)