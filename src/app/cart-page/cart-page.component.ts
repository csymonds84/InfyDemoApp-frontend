import { CartService } from '../services/cart.service';
import { Component } from '@angular/core';
import { MyDataService } from '../services/my-data.service';

@Component({
  selector: 'app-cart-page',
  templateUrl: './cart-page.component.html',
  styleUrls: ['./cart-page.component.css']
})

export class CartComponent 
{
  public cartList: any = [];
  public grandTotal!: number;

  constructor(private cartService: CartService,
              private dataService: MyDataService) {}

  ngOnInit(): void
  {
    this.cartService.getMenuItems().subscribe(result =>
      {
        this.cartList = result;
        this.grandTotal = this.cartService.getTotalPrice();
      })
  }

  removeFromCart(item: any)
  {
    this.grandTotal = this.grandTotal - item.cost;
    this.cartService.removeCartItem(item);
  }

  emptyCart()
  {
    this.cartService.emptyCart();
  }

  checkout()
  {
    console.log('list from clicking checkout btn: ' + JSON.stringify(this.cartList));
    this.dataService.saveOrderData(this.cartList);

  }
}