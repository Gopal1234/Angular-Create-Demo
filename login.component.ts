import { Component, OnInit } from '@angular/core';
import { ComponentFactoryResolver } from '@angular/core/src/render3';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  userName:string="";
  userPassword:string=""
  msg:string="Welcome to Portal";
  errorMsg:string="Error in Login"
  invalidMsg:boolean=false;
  constructor(private router:Router) { }

  ngOnInit() {
  console.log("welcome");
  }

  public handleLogin():void
  {
if(this.userName=="admin" && this.userPassword=="cap@123")
{
  console.log("welcome"+ ""+this.userName);
  this.router.navigate(['welcome',this.userName])
  this.invalidMsg=false;
}
else{
  this.invalidMsg=true;
}


  }




}
