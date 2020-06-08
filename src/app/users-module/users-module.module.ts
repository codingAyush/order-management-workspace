import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersRouting } from './users-routing';
import { UserListComponent } from './containers/user-list/user-list.component';
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
import { AddUserComponent } from './components/add-user/add-user.component';
import { UserInfoComponent } from './components/user-info/user-info.component'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LocationDetectComponent } from './components/location-detect/location-detect.component';
import { HttpClientModule } from '@angular/common/http';
import { AgmCoreModule } from '@agm/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { UserDialogComponent } from './dialogs/user-dialog/user-dialog.component';
import {MatDialogModule} from '@angular/material/dialog';

@NgModule({
  declarations: [UserListComponent, 
    AddUserComponent, UserInfoComponent, 
    LocationDetectComponent],
  imports: [
    CommonModule,  
    UsersRouting,
    MatPaginatorModule,
    MatTableModule,
    MatFormFieldModule,
    MatDialogModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
     AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDECS1ZRoiOdUcbSkwtPPEBSMgcfhPIquQ'
    })
  ],
  entryComponents:[UserDialogComponent],
  exports:[]
})
export class UsersModule { }
