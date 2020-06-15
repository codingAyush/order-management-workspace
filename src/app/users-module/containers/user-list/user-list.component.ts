import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { Router } from '@angular/router';
import { UserService } from '../../services/user.service';
import { User } from '../../models/userModel';
import { AuthService } from 'src/app/auth/services/auth.service';
import { MatDialog } from '@angular/material/dialog';
import { UserDialogComponent } from '../../dialogs/user-dialog/user-dialog.component';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  userData:User[]=[];
  displayedColumns:string[]=['name', 'phone', 'email','actions'];
  dataSource= new MatTableDataSource(this.userData);
  isAdding=false;
  hasAddedFlag=false;
  

  @ViewChild(MatPaginator, {static:false})paginator:MatPaginator;

  constructor(private router:Router, private userSer:UserService, private authSer:AuthService,
     private dialogRef:MatDialog) { }

  applyFilter(event: Event) {
    console.log(event);
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  ngOnInit(): void {
    this.dataSource.paginator=this.paginator;
    this.getUser();


    // var geocoder = new google.maps.Geocoder();
    // var address = "new york";

    // geocoder.geocode( { 'address': address}, function(results, status) {

    //   if (status == google.maps.GeocoderStatus.OK) {
    //     var latitude = results[0].geometry.location.lat();
    //     var longitude = results[0].geometry.location.lng();
    //     alert(latitude);
    //   } 
    // });
  }
  
  //will set is Adding to true and load the add user component

  addUser():void{
    this.isAdding=true;
  }

  userAddedFlag(flag):void{
    if(flag){
      this.isAdding=false;
      this.hasAddedFlag=true;
      this.getUser();
      setTimeout(()=>{
        this.hasAddedFlag=false;
      },3000)
    }
  }

  orderItem(element):void{
    if(this.authSer.isAuthenticated){
       const queryData=this.getUserParams(element);
       this.router.navigate(['/orders/itemList'],{queryParams:queryData});
    }else{
      this.openDialog();
    }
   
  }


  openDialog():void{
      const dialogRef = this.dialogRef.open(UserDialogComponent, {
        width: "400px"      
      });
  }

  getUser():void{
    
    this.userSer.getUsers().subscribe({
      next:data=>{
        const arrKeys=Object.keys(data);
        // this.userData=[];
        arrKeys.forEach(elem=>{
          this.userData.push(data[elem]);
        })
      },
      complete:()=>{
        this.userData.reverse();
        this.dataSource=new MatTableDataSource(this.userData);
        this.dataSource.paginator=this.paginator;
      }
    })
  }

  viewUserDetails(element:User):void{
    const queryData=this.getUserParams(element);
    this.router.navigate(['/viewUser'], {queryParams:queryData})
  }

  getUserParams(element):any{
     const queryData={
      address:element.address,
      district:element.district,
      email:element.email,
      name:element.name,
      phone:element.phone,
      pincode:element.pincode,
      state:element.state,
      lat:element.lat,
      long:element.long
    };
    return queryData;
  }

}
