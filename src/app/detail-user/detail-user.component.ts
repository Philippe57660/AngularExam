import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Article } from 'src/interfaces/article';
import { Commentaire } from 'src/interfaces/commentaire';
import { User } from 'src/interfaces/user';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-detail-user',
  templateUrl: './detail-user.component.html',
  styleUrls: ['./detail-user.component.css']
})
export class DetailUserComponent implements OnInit {

  idAcharger: number = 0;
  user: User = {
    pseudo: '',
    email: '',
    password: '',
    avatar: '',
    id: -1
  }
  userArticles: Array<Article> = [];
  userCommentaires: Array<Commentaire> = [];

  constructor(private route: ActivatedRoute, public loginService: LoginService, private router:Router) { }

  supprimerProfil(id:number){
    let that = this
    this.loginService.deleteProfil(id).subscribe({
      next(res) {
        that.router.navigate(['login']).then(() => {
          that.loginService.logOut();
        });
      }
    });
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
      },
      error(err){
        console.log(err);
      }
    });
      this.loginService.getUserArticles(this.idAcharger).subscribe({
        next(art) {
          console.log(art);
          that.userArticles = art.slice(0,5);
        },
        error(err){
          console.log(err);
        },
    });
    this.loginService.getUserCommentaire(this.idAcharger).subscribe({
      next(comm) {
        console.log(comm);
        that.userCommentaires = comm.slice(0,5);
      },
      error(err){
        console.log(err);
      },

  });
  }

}
