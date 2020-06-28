import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

const API_URL = 'http://localhost:8080/api/test/';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private user_id;
  private username;
  private user_roles;

  constructor(private http: HttpClient) { }

  getPublicContent(): Observable<any> {
    return this.http.get(API_URL + 'all', { responseType: 'text' });
  }

  setUser(user){
    this.user_roles = user.role;
    this.user_id = user.id;
    this.username = user.username;
  }

  getUserId(){
    return this.user_id;
  }

  saveRoles(_roles){
    this.user_roles = _roles;
  }

  getUsername(){
    return this.username;
  }

  getUserRoles(){
    return this.user_roles;
  }
}
