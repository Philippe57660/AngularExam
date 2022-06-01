import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SubscribeFormComponent } from './subscribe-form/subscribe-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { LandingComponent } from './landing/landing.component';
import { ArticleListComponent } from './article-list/article-list.component';
import { AjoutArticleComponent } from './ajout-article/ajout-article.component';
import { DetailArticleComponent } from './detail-article/detail-article.component';
import { ModifierArticleComponent } from './modifier-article/modifier-article.component';
import { AjoutCommentaireComponent } from './ajout-commentaire/ajout-commentaire.component';
import { UserListComponent } from './user-list/user-list.component';
import { DetailUserComponent } from './detail-user/detail-user.component';
@NgModule({
  declarations: [
    AppComponent,
    LoginFormComponent,
    HeaderComponent,
    FooterComponent,
    SubscribeFormComponent,
    LandingComponent,
    ArticleListComponent,
    AjoutArticleComponent,
    DetailArticleComponent,
    ModifierArticleComponent,
    AjoutCommentaireComponent,
    UserListComponent,
    DetailUserComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }