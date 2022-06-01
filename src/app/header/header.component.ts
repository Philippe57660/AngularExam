import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  isConnected():boolean{
    return this.loginService.isConnected()
  }

  constructor(public loginService:LoginService, private router:Router) { }

deconnexion(){
  this.loginService.logOut();
  this.router.navigate(['login'])
}
  

  ngOnInit(): void {
  }

}
