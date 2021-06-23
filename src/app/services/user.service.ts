import { Injectable } from '@angular/core';
import { Global } from '../Global';
import { HttpClient } from '@angular/common/http';
import { UserLoginModel } from '../Models/UserLoginModel';
import { UserRegisterModel } from '../Models/UserRegisterModel';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpClient:HttpClient) { 
    
  }

  public login(loginModel:UserLoginModel):Observable<any> {
    return this.httpClient.post(Global.baseUrl+"StudentAccount/login",loginModel);
  }

  public register(registerModel: UserRegisterModel):Observable<any> {
    return this.httpClient.post(Global.baseUrl+"StudentAccount/register",registerModel);
  }

  isAuthenticated(){
    return localStorage.getItem("token")?.length > 0;
  }

  setUserLocal(username, token, id, fullname){
    localStorage.setItem("username", username);
    localStorage.setItem("token", token);
    localStorage.setItem("id", id);
    localStorage.setItem("fullname", fullname);
  }

  logout(){
    localStorage.clear();
  }
}
