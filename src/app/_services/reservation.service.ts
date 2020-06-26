import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ReservationService {

  private baseUrl = 'http://localhost:8080/api/auth/';

  constructor(private http:HttpClient) { }

  getAll() {
    return this.http.get(this.baseUrl);
  }

  get(id) {
    return this.http.get(`${(this.baseUrl)}/${id}`);
  }

  create(data) {
    return this.http.post(this.baseUrl, data);
  }

  update(id, data) {
    return this.http.put(`${(this.baseUrl)}/${id}`, data);
  }

  delete(id) {
    return this.http.delete(`${(this.baseUrl)}/${id}`);
  }

  deleteAll() {
    return this.http.delete(this.baseUrl);
  }
}
