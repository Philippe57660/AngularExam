import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginFormComponent } from './login-form/login-form.component';
import { LandingComponent } from './landing/landing.component';
import { SubscribeFormComponent } from './subscribe-form/subscribe-form.component';
import { ArticleListComponent } from './article-list/article-list.component';
import { AjoutArticleComponent } from './ajout-article/ajout-article.component';
import { DetailArticleComponent } from './detail-article/detail-article.component';
import { ModifierArticleComponent } from './modifier-article/modifier-article.component';
import { AjoutCommentaireComponent } from './ajout-commentaire/ajout-commentaire.component';
import { UserListComponent } from './user-list/user-list.component';
import { DetailUserComponent } from './detail-user/detail-user.component';
import { ModifierUserComponent } from './modifier-user/modifier-user.component';

import { ConnectGuardGuard } from './connect-guard.guard';

const routes: Routes = [
    { path: "login", component: LoginFormComponent },
    { path: "subscribe", component: SubscribeFormComponent },
    { path: "", component: LandingComponent },
    { path: "article-list", component: ArticleListComponent, canActivate: [ConnectGuardGuard] },
    { path: "ajout-article", component: AjoutArticleComponent, canActivate: [ConnectGuardGuard] },
    { path: "detail-article/:id", component: DetailArticleComponent, canActivate: [ConnectGuardGuard] },
    { path: "modifier-article/:id", component: ModifierArticleComponent, canActivate: [ConnectGuardGuard] },
    { path: "ajout-commentaire", component: AjoutCommentaireComponent, canActivate: [ConnectGuardGuard] },
    { path: "user-list", component: UserListComponent, canActivate: [ConnectGuardGuard] },
    { path: "detail-user/:id", component: DetailUserComponent, canActivate: [ConnectGuardGuard] },
    { path: "modifier-user/:id", component: ModifierUserComponent, canActivate: [ConnectGuardGuard] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
