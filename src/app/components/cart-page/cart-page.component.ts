import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ApiService } from '../../shared/api.service';
import { CommonModule } from '@angular/common';
import { product } from '../product-view/productModule';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-cart-page',
  standalone: true,
  imports: [CommonModule, RouterModule, ReactiveFormsModule],
  templateUrl: './cart-page.component.html',
  styleUrl: './cart-page.component.scss'
})
export class CartPageComponent implements OnInit {

  showProduct: any = []
  public totalAmount: number = 0
  public addressForm = false;
  myForm: FormGroup|any

  constructor(private api: ApiService) { }

  ngOnInit(): void {
    this.api.products().subscribe(res => {
      this.showProduct = res;
      this.totalAmount = this.api.calculatePrice()
      console.log("total amount is", this.totalAmount)
    })
    //form 
    this.myForm = new FormGroup({
      email: new FormControl ('', Validators.required), 
      name: new FormControl ('', Validators.required),
      mobile: new FormControl ('', Validators.required),
      address: new FormControl ('', Validators.required),
    })
  }

  deleteItem(item: product) {
    this.api.removeCartItem(item)
  }

  empty() {
    this.api.removeAllItems()
  }

  cancel() {
    this.addressForm = false
    this.myForm.reset()
  }

  onSubmit(){
    this.myForm.value
    console.log(this.myForm.value)
    this.myForm.reset()
  }
}
