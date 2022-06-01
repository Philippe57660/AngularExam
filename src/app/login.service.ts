import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

urlBase:string = "https://reseau.jdedev.fr/api/";
token:string ="";
currentUserId:number = -1;


login(login:any):Observable<any>{
 return this.http.post(this.urlBase + "user/connect", login)
}

isCurrentUserId(id:number):boolean{
  return this.currentUserId == id;
}

isConnected():boolean{
  if(this.token==""){
    return false;
  }
  else{
    return true;
  }
}

logOut(){
  this.token = "";
}

getUsers():Observable<any>{
    const headers = new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${this.token}`
  })
  return this.http.get(this.urlBase + "user", {headers:headers});
}

getUser(id:number):Observable<any>{
  const headers = new HttpHeaders({
  'Content-Type': 'application/json',
  'Authorization': `Bearer ${this.token}`
})
return this.http.get(this.urlBase + "user/" + id, {headers:headers});
}

subscribe(newUser:any):Observable<any>{
  return this.http.post(this.urlBase + "user", newUser );
}

getArticles():Observable<any>{
  const headers = new HttpHeaders({
  'Content-Type': 'application/json',
  'Authorization': `Bearer ${this.token}`
})
return this.http.get(this.urlBase + "article", {headers:headers});
}

getArticle(id:number):Observable<any>{
  const headers = new HttpHeaders({
  'Content-Type': 'application/json',
  'Authorization': `Bearer ${this.token}`
})
return this.http.get(this.urlBase + "article/" + id, {headers:headers});
}

getCommentaires(id:number):Observable<any>{
  const headers = new HttpHeaders({
  'Content-Type': 'application/json',
  'Authorization': `Bearer ${this.token}`
})
return this.http.get(this.urlBase + `article/${id}/comment` , {headers:headers});
}

getUserArticles(id:number):Observable<any>{
  const headers = new HttpHeaders({
  'Content-Type': 'application/json',
  'Authorization': `Bearer ${this.token}`
})
return this.http.get(this.urlBase + `user/${id}/article` , {headers:headers});
}

getUserCommentaire(id:number):Observable<any>{
  const headers = new HttpHeaders({
  'Content-Type': 'application/json',
  'Authorization': `Bearer ${this.token}`
})
return this.http.get(this.urlBase + `user/${id}/comment` , {headers:headers});
}

addArticle(newArticle:any):Observable<any>{
  const headers = new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${this.token}`
  })
  return this.http.post(this.urlBase + "article", newArticle, {headers:headers});
}

addCommentaire(newCommentaire:any):Observable<any>{
  const headers = new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${this.token}`
  })
  return this.http.post(this.urlBase + "comment", newCommentaire, {headers:headers});
}

deleteArticle(id:number):Observable<any>{
  const headers = new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${this.token}`
  })
  return this.http.delete(this.urlBase + "article/" + id, {headers:headers});
}

deleteProfil(id:number):Observable<any>{
  const headers = new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${this.token}`
  })
  return this.http.delete(this.urlBase + "user/" + id, {headers:headers});
}

updateProfil(upUser:any):Observable<any>{
  const headers = new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${this.token}`
  })
  return this.http.put(this.urlBase + "user/" + upUser.id, upUser, {headers:headers});
}

updateArticle(upArticle:any):Observable<any>{
  const headers = new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${this.token}`
  })
  return this.http.put(this.urlBase + "article/" + upArticle.id_article, upArticle, {headers:headers});
}



  constructor(private http:HttpClient) { }
}
