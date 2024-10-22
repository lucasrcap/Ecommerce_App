import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../shared/api.service';
import { product } from './productModule';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';


@Component({
  selector: 'app-product-view',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './product-view.component.html',
  styleUrl: './product-view.component.scss'
})
export class ProductViewComponent implements OnInit {

  data: any | product[]
  constructor(private api: ApiService) { }
  ngOnInit(): void {
    this.displayProducts()
  }
  displayProducts() {
    this.api.getProduct().subscribe(res => {
      this.data = res
      console.log(res)
    })
  }

  addToCart(item: product) {
    this.api.addToCart(item)
  }

  removeItem(item:product){
    this.api.removeCartItem(item)
  }
}
