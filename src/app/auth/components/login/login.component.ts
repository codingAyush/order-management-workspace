import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UserService } from 'src/app/users-module/services/user.service';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm:FormGroup;
  users:string[]=[];
  isNotAuth=false;
  constructor(private fb:FormBuilder, private userSer:UserService, private authSer:AuthService,
    private router:Router) { }

  ngOnInit(): void {

    this.loginForm=this.fb.group({
      username:['', Validators.required],
      password:['', [Validators.required,Validators.minLength(6)]]
    });
  }

  submit(){
    this.callUsersDetails();
  }


  checkUserAuthentic() {
    if(this.users.indexOf(this.loginForm.value.username) != -1){
        this.authSer.isAuthenticated=true;
        this.isNotAuth=false;
        this.router.navigate(['/users'])
       }else{
         this.isNotAuth=true;

         setTimeout(()=>{
          this.isNotAuth=false;
         },2000)
       }
  }

  callUsersDetails():void{
      this.userSer.getUsers().subscribe({
      next:data=>{
        const arrKeys=Object.keys(data);
        // this.userData=[];
        arrKeys.forEach(elem=>{
          this.users.push((data[elem].name).toLowerCase().trim());
        })
      },
      complete:()=>{
        this.checkUserAuthentic();
        }
    })
  }

}
