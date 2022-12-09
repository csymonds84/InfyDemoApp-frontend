import { ReceiptComponent } from './receipt/receipt.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { CartComponent } from './cart-page/cart-page.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {path:'', component: HomeComponent},
  {path: 'cart-page', component: CartComponent},
  {path: 'checkout', component: CheckoutComponent},
  {path: 'receipt', component: ReceiptComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
