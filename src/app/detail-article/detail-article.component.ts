import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Article } from 'src/interfaces/article';
import { Commentaire } from 'src/interfaces/commentaire';
import { User } from 'src/interfaces/user';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-detail-article',
  templateUrl: './detail-article.component.html',
  styleUrls: ['./detail-article.component.css']
})
export class DetailArticleComponent implements OnInit {

  idAcharger: number = 0;
  auteurCom: Array<User> = [];
  auteurArt: User = {
    pseudo: '',
    email: '',
    password: '',
    avatar: '',
    id: -1
  }
  commentaires: Array<Commentaire> = [];
  article: Article = {
    titre: '',
    contenu: '',
    id_article: -1,
    id: -1
  }
  commentaireAddForm: any;

  constructor(private route: ActivatedRoute, public loginService: LoginService, private router:Router) { }

  supprimerArticle(id:number){
    this.loginService.deleteArticle(id).subscribe(retour => {this.router.navigate(["article-list"]);});
  }

  /* modifierArticle(id:number){

  } */

  idArticle(idArticle: any): number | undefined {
    throw new Error('Method not implemented.');
  }

  ngOnInit(): void {
    let that = this
    this.route.params.subscribe({
      next(val) {
        that.idAcharger = parseInt(val["id"])
      }
    });
    this.loginService.getCommentaires(this.idAcharger).subscribe({
      next(com) {
        console.log(com);
        that.commentaires = com;
        that.loginService.getUsers().subscribe({
          next(autComm) {
            console.log(autComm);
            for (com of that.commentaires){
              let index = autComm.findIndex((auteurComm:User) => auteurComm.id === com.id)
              that.auteurCom.push(autComm[index]);
            }
          },
          error(err){
            console.log(err);
          }
        });
      },
      error(err){
        console.log(err);
      }
      
    });
    this.loginService.getArticle(this.idAcharger).subscribe({
      next(art) {
        console.log(art);
        that.article = art;
        that.loginService.getUser(art.id).subscribe({
          next(aut) {
            console.log(aut);
            that.auteurArt = aut;
          },
          error(err){
            console.log(err);
          }
        });

      },
      error(err){
        console.log(err);
      }
    });

  }

}
