import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup , Validators, FormBuilder} from '@angular/forms';
import { UserService } from '../../services/user.service';
import { User } from '../../models/userModel';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {
  @Output() addUserEvent=new EventEmitter();
  userForm:FormGroup;
  user:User
  constructor(private formBuilder:FormBuilder, private userSer:UserService) { }

  ngOnInit(): void {
    this.userForm=this.formBuilder.group({
      name:['', Validators.required],
      phone:['',[Validators.required, Validators.minLength(10)]],
      email:['',[Validators.required,Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$")]],
      address:['',Validators.required],
      pincode:['',Validators.required],
      state:['',Validators.required],
      district:['',Validators.required]
    })
    // this.addUserSerCall();
  }

  userInfoSubmit=()=>{
    var userInfo=this.getUserInfo();
    this.addUserSerCall(userInfo);
  }

  getUserInfo():any{
    var userInfo={
    name:this.userForm.value.name,
    phone:this.userForm.value.phone,
    email:this.userForm.value.email,
    address:this.userForm.value.address,
    pincode:this.userForm.value.pincode,
    state:this.userForm.value.state,
    district:this.userForm.value.district,
    lat:0,
    long:0
    }
    return userInfo;
  }

  addUserSerCall(userInfo):void{
    this.userSer.addUser(userInfo).subscribe({
      next:data=>{
      console.log(data);
    },
      complete:()=>{
        this.addUserEvent.emit(true);
      }
    })
  }
}
