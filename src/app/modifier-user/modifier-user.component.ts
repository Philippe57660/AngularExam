import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'src/interfaces/user';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-modifier-user',
  templateUrl: './modifier-user.component.html',
  styleUrls: ['./modifier-user.component.css']
})
export class ModifierUserComponent implements OnInit {

  updateProfilForm: FormGroup;
  user: User = {
    pseudo: '',
    email: '',
    password: '',
    avatar: '',
    id: -1
  };
  idAcharger: number = 0;

  constructor(private formBuilder: FormBuilder, private loginService: LoginService, private router:Router, private route: ActivatedRoute, ) { 
    this.updateProfilForm = this.formBuilder.group({
      avatar: "" as string,
      pseudo: "" as string
    });

  }

  validUpdateProfilForm(){
    console.log(this.updateProfilForm.value);
    let updateInfo: User = {
      email: this.user.email,
      password: "",
      pseudo: this.updateProfilForm.value.pseudo,
      avatar: this.updateProfilForm.value.avatar,
      id: this.idAcharger
  };
  this.loginService.updateProfil(updateInfo).subscribe(retour => {this.router.navigate([`modifier-user/${this.idAcharger}`]);});
}

  ngOnInit(): void {
    let that = this
    this.route.params.subscribe({
      next(val) {
        that.idAcharger = parseInt(val["id"])
      }
    });
    this.loginService.getUser(this.idAcharger).subscribe({
      next(ret) {
        console.log(ret);
        that.user = ret;
        that.updateProfilForm.setValue({
          pseudo:that.user.pseudo,
          avatar:that.user.avatar
        })
      },
      error(err){
        console.log(err);
      }
    });


  }

}
