import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Login } from 'src/app/loginClass';
import { UserServiceService } from 'src/app/user-service.service';

@Component({
  selector: 'app-adminlogin',
  templateUrl: './adminlogin.component.html',
  styleUrls: ['./adminlogin.component.css']
})
export class AdminloginComponent implements OnInit {

  email:any
  password:any
  message:any

  constructor(private service: UserServiceService, private router:Router) { }

  ngOnInit(): void {
  }

  loginadmin()
  {
    var adminlogin=new Login()
    adminlogin.email=this.email
    adminlogin.password=this.password
    this.service.loginadmin(adminlogin).subscribe(
      user=>{
        if(user.status=='SUCCESS')
        {
          let adminName= user.adminNameFirst;
          let adminId= user.adminId;

          sessionStorage.setItem('adminName', adminName)
          sessionStorage.setItem('adminId', adminId)
          //this.router.navigate(['adminloginsuccess'])
        }
        else
        {
          alert(user.status)
          this.message=user.message
          this.router.navigate(['admin'])
        }
      }
    )
  }



}
