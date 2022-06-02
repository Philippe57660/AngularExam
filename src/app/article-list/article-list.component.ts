import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Article } from 'src/interfaces/article';
import { User } from 'src/interfaces/user';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-article-list',
  templateUrl: './article-list.component.html',
  styleUrls: ['./article-list.component.css']
})
export class ArticleListComponent implements OnInit {

  articles: Array<Article> = [];
  idAcharger: number = 0;
  user: User = {
    pseudo: '',
    email: '',
    password: '',
    avatar: '',
    id: -1
  };
  auteurArticles: Array<User> = [];

  constructor(private loginService:LoginService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    let that = this;
    this.loginService.getArticles().subscribe({
      next(ret) {
        console.log(ret);
        that.articles = ret;
        that.loginService.getUsers().subscribe({
          next(autArt) {
            console.log(autArt);
            for (ret of that.articles){
              let index = autArt.findIndex((auteurArticle:User) => auteurArticle.id === ret.id)
              that.auteurArticles.push(autArt[index]);
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
  }

}
