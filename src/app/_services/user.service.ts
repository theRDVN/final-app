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
  private user_role;

  constructor(private http: HttpClient) { }

  getPublicContent(): Observable<any> {
    return this.http.get(API_URL + 'all', { responseType: 'text' });
  }

  setUser(user){
    this.user_role = user.role;
    this.user_id = user.id;
    this.username = user.username;
  }

  getUserId(){
    return this.user_id;
  }

  getUsername(){
    return this.username;
  }

  getUserRole(){
    return this.user_role;
  }
}
