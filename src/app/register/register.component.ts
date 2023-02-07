import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AuthService } from '../Services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  addloginform!: FormGroup;

  constructor(private fb: FormBuilder, private authServcie: AuthService, private modalService: NgbModal, private router: Router) { }

  ngOnInit(): void {

    this.addloginform = this.fb.group({
      'email': new FormControl('', [
        Validators.required,
        Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')
      ]),
      'password': new FormControl('', [
        Validators.required,
        Validators.minLength(6)
      ]),
    })
  }

  addData() {
    // console.log(this.addloginform.value);
    // localStorage.setItem("user", JSON.stringify(this.addloginform.value))
    // this.addloginform.reset()

    this.authServcie.registerUser(this.addloginform.value).subscribe({
      next: (res) => {
        console.log(res)
        localStorage.setItem("token", res.token)
        this.router.navigate(["/admin"])
      },
      error: err => console.log(err)
    })
    this.modalService.dismissAll();
  }

  closeModal() {
    this.modalService.dismissAll();
  }

}
