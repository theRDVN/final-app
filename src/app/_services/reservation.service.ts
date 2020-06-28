import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

const baseUrl = 'http://localhost:8080/api/reservations';

@Injectable({
  providedIn: 'root'
})
export class ReservationService {

  constructor(private http:HttpClient) { }

  getAll() {
    return this.http.get(baseUrl);
  }

  get(id) {
    return this.http.get(`${(baseUrl)}/${id}`);
  }

  create(data) {
    return this.http.post(baseUrl, data);
  }


  delete(id) {
    return this.http.delete(`${(baseUrl)}/${id}`);
  }

}
