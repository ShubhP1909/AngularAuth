import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class AuthService {
  url = "https://authbackend-i4x1.onrender.com"

  constructor(private http: HttpClient, private route: Router) { }

  registerUser(user: FormGroup<any>) {
    return this.http.post<any>(this.url + "/api/register", user)
  }

  loginUser(user: any) {
    return this.http.post<any>(this.url + "/api/login", user)
  }

  loggedIn() {
    return !!localStorage.getItem("token")
  }

  getToken() {
    return localStorage.getItem("token")
  }

}
