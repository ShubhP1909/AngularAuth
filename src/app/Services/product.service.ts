import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private admin = "http://localhost:4000/api/admin";

  constructor(private http: HttpClient) { }

  LatestProduct() {
    return this.http.get<any>(this.admin);
  }
}
