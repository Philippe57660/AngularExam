import { Component, OnInit } from '@angular/core';
import { LoginService } from '../login.service';
import { User } from 'src/interfaces/user';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  users: Array<User> = [];

  constructor(private loginService:LoginService) { 

  }

  ngOnInit(): void {
    let that = this;
    this.loginService.getUsers().subscribe({
      next(ret) {
        console.log(ret);
        that.users = ret;
      },
      error(err){
        console.log(err);
      }

    });
  }

}
