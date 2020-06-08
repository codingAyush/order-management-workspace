import { Routes, RouterModule } from "@angular/router";
import { LoginComponent } from './components/login/login.component';


const authRoutes:Routes=[
    {path:'login', component:LoginComponent}
];

export const authRouting=RouterModule.forChild(authRoutes);