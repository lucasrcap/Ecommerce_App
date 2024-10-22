import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../shared/api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-order-page',
  standalone: true,
  imports: [],
  templateUrl: './order-page.component.html',
  styleUrl: './order-page.component.scss'
})
export class OrderPageComponent implements OnInit{

  totalAmount: number = 0

  constructor (private api: ApiService, private router:Router){}

  ngOnInit(): void {
    setTimeout(() => {
      this.router.navigate(["/"])
      this.api.removeAllItems()
    }, 4000);

    //total amount
    this.totalAmount = this.api.calculatePrice()
  }

}
