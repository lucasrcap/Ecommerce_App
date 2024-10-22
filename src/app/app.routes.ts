import { Routes } from '@angular/router';
import { ProductViewComponent } from './components/product-view/product-view.component';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';
import { CartPageComponent } from './components/cart-page/cart-page.component';
import { OrderPageComponent } from './components/order-page/order-page.component';


export const routes: Routes = [
    {path:'', component: ProductViewComponent},
    {path:'product-detail/:productId', component: ProductDetailComponent},
    {path: 'cart-page', component: CartPageComponent},
    {path: 'order-page', component: OrderPageComponent}
];
