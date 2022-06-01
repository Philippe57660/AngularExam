import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/interfaces/user';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-subscribe-form',
  templateUrl: './subscribe-form.component.html',
  styleUrls: ['./subscribe-form.component.css']
})
export class SubscribeFormComponent implements OnInit {

  subscribeForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private loginService: LoginService, private router:Router) {
    this.subscribeForm = this.formBuilder.group({
      pseudo: "" as string,
      avatar: "" as string,
      email: "" as string,
      pwd: "" as string
    })
  }

  validForm() {
    console.log(this.subscribeForm.value);
    let subscribeInfo: User = {
      email: this.subscribeForm.value.email,
      password: this.subscribeForm.value.pwd,
      pseudo: this.subscribeForm.value.pseudo,
      avatar: this.subscribeForm.value.avatar,
      id: -1
    };
    this.loginService.subscribe(subscribeInfo).subscribe(retour => {this.router.navigate(["login"]);});
  }

  ngOnInit(): void {
  }

}
