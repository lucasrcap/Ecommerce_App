import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink, RouterModule, RouterOutlet } from '@angular/router';
import { ProductViewComponent } from '../product-view/product-view.component';
import { ApiService } from '../../shared/api.service';
import { product } from '../product-view/productModule';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product-detail',
  standalone: true,
  imports: [RouterModule, RouterLink, RouterOutlet, ProductViewComponent, RouterModule, CommonModule],
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.scss'
})
export class ProductDetailComponent implements OnInit {

  productData: any | product;
  showAdd: boolean = true;
  showRemove: boolean = false;

  constructor(private api: ApiService, private activatedroute: ActivatedRoute) { }

  ngOnInit(): void {

    let productId = this.activatedroute.snapshot.paramMap.get('productId')
    //console.log("product id is:", productId)

    productId && this.api.getProductById(productId).subscribe((res) => {
      this.productData = res;
      console.log(res)
    })
  }

  addToCart(productData: product) {
    this.showAdd = false;
    this.showRemove = true;
    this.api.addToCart(productData)
  }

  removeItem(productData: product) {
    this.showAdd = true;
    this.showRemove = false;
    this.api.removeCartItem(productData)
  }

}
