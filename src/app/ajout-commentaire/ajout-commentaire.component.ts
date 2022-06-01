import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { LoginService } from '../login.service';
import { Router } from '@angular/router';
import { Commentaire } from 'src/interfaces/commentaire';

@Component({
  selector: 'app-ajout-commentaire',
  templateUrl: './ajout-commentaire.component.html',
  styleUrls: ['./ajout-commentaire.component.css']
})
export class AjoutCommentaireComponent implements OnInit {

  commentaireAddForm: FormGroup;

  @Input() idArticle: string ='-1';

  constructor(private formBuilder:FormBuilder, private loginService:LoginService, private router:Router) {
    this.commentaireAddForm = this.formBuilder.group({
      contenu: "" as string
    })
  }

  validFormAddCommentaire() {
    console.log(this.commentaireAddForm.value);
    let commentaireInfo: Commentaire = {
      contenu: this.commentaireAddForm.value.contenu,
      idArt: parseInt(this.idArticle)
    };
    let that = this;
    this.loginService.addCommentaire(commentaireInfo).subscribe({
      next(res) {
        that.router.navigate(['/']).then(() => {
          that.router.navigate(['detail-article/' + res.id_article]);
        });
      }
    });
  }

  ngOnInit(): void {
  }

}