import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class AuthService {
  private registerURL = "http://localhost:4000/api/register";
  private loginURL = "http://localhost:4000/api/login";

  constructor(private http: HttpClient, private route: Router) { }

  registerUser(user: FormGroup<any>) {
    return this.http.post<any>(this.registerURL, user)
  }

  loginUser(user: any) {
    return this.http.post<any>(this.loginURL, user)
  }

  loggedIn() {
    return !!localStorage.getItem("token")
  }

  getToken() {
    return localStorage.getItem("token")
  }

}
