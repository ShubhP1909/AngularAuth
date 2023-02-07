import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { RegisterComponent } from '../register/register.component';
import { ProductService } from '../Services/product.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {
  LProducts: any;

  constructor(private service: ProductService, private modalService: NgbModal) { }

  ngOnInit(): void {
    this.service.LatestProduct().subscribe({
      next: res => this.LProducts = res,
      error: err => {
        if (err instanceof HttpErrorResponse) {
          if (err.status === 401) {
            this.modalService.open(RegisterComponent, { centered: true })
          }
        }
      }
    })
  }

}
