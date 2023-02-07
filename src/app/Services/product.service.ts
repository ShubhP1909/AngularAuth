import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  url = "https://authbackend-i4x1.onrender.com/"

  constructor(private http: HttpClient) { }

  LatestProduct() {
    return this.http.get<any>(this.url + "/api/admin");
  }
}
