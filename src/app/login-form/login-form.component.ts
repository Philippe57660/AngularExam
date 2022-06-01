import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { LoginService } from '../login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {

loginForm: FormGroup;

  constructor(private formBuilder:FormBuilder, private loginService:LoginService, private router:Router) { 
    this.loginForm = this.formBuilder.group({
      email: "" as string,
      pwd: "" as string
    })
  }

  validForm() {
    console.log(this.loginForm.value);
    let loginInfo:any = {
      email:this.loginForm.value.email,
      password:this.loginForm.value.pwd
    };
    this.loginService.login(loginInfo).subscribe(loginFetch => {this.loginService.token = loginFetch.token; this.loginService.currentUserId = loginFetch.id; this.router.navigate(["article-list"]);} );
    
  }

  ngOnInit(): void {
  }

}
