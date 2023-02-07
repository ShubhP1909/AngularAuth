import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { LoginComponent } from '../login/login.component';
import { RegisterComponent } from '../register/register.component';
import { AuthService } from '../Services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private modalService: NgbModal, public service: AuthService, private route: Router) { }

  ngOnInit(): void {
  }


  openLogin() {
    this.modalService.open(LoginComponent, { centered: true })
  }
  openSignUp() {
    this.modalService.open(RegisterComponent, { centered: true })
  }

  LogoutUser() {
    localStorage.removeItem("token")
    this.route.navigate([''])
    this.modalService.open(LoginComponent, { centered: true })
  }
}
