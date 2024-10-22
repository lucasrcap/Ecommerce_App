import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { product } from '../components/product-view/productModule';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  public cartItemList: any = []
  public productList = new BehaviorSubject<any>([])

  constructor(private http: HttpClient) { }

  getProduct() {
    return this.http.get<product[]>("https://dummyjson.com/products")
  }

  getProductById(id: string) {
    return this.http.get("https://dummyjson.com/products/" + id)
  }

  addToCart(data: product) {
    this.cartItemList.push(data);
    this.productList.next(this.cartItemList);
    console.log(this.cartItemList)
  }

  products() {
    return this.productList.asObservable()
  }

  removeCartItem(data: product) {
    this.cartItemList.map((a: product, index: product) => {
      if (data.id === a.id) {
        this.cartItemList.splice(index, 1)
      }
    })
    this.productList.next(this.cartItemList)
  }

  //total calculation
  calculatePrice(){
    let total = 0;
    this.cartItemList.map((a:any) => {
      total +=a.price;
    })
    return total
  }
  // remove all items
  removeAllItems(){
    this.cartItemList = []
    this.productList.next(this.cartItemList)
  }
}
