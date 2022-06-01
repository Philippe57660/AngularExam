import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { Article } from 'src/interfaces/article';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-modifier-article',
  templateUrl: './modifier-article.component.html',
  styleUrls: ['./modifier-article.component.css']
})
export class ModifierArticleComponent implements OnInit {

  articleUpForm: FormGroup;
  idAcharger: number = 0;
  article: Article = {
    titre: '',
    contenu: '',
    id_article: -1,
    id: -1
  };

  constructor(private formBuilder: FormBuilder, private loginService: LoginService, private router:Router, private route: ActivatedRoute) { 
    this.articleUpForm = this.formBuilder.group({
      titre: "" as string,
      contenu: "" as string
    })
  }

  validFormUpArticle() {
    console.log(this.articleUpForm.value);
    let articleInfo: Article = {
      titre: this.articleUpForm.value.titre,
      contenu: this.articleUpForm.value.contenu,
      id_article: this.article.id_article,
      id: this.article.id
    };
    this.loginService.updateArticle(articleInfo).subscribe(retour => {this.router.navigate([`article-list`]);} );
  }

  ngOnInit(): void {
    let that = this
    this.route.params.subscribe({
      next(val) {
        that.idAcharger = parseInt(val["id"])
      }
    });
    this.loginService.getArticle(this.idAcharger).subscribe({
      next(ret) {
        console.log(ret);
        that.article = ret;
        that.articleUpForm.setValue({
          titre:that.article.titre,
          contenu:that.article.contenu
        })
      },
      error(err){
        console.log(err);
      }
    });
  }

}