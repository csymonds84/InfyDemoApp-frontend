import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';



@Injectable({
  providedIn: 'root'
})

export class CartService 
{
  public cartItemList: any = [];
  public menuList = new BehaviorSubject<any>([]);

  constructor() { }

  getMenuItems()
  {
    this.menuList.asObservable();
    return this.menuList;
  }

  setMenuItem(item: any)
  {
    this.cartItemList.push(...item);
    this.cartItemList.next(item);
  }

  getTotalPrice(): number
  {
    let grandTotal = 0;
    this.cartItemList.map((a: any) =>
    {
      grandTotal += a.total;
    })
    return grandTotal;
  }

  addToCart(item: any)
  {
    this.cartItemList.push(item);
    this.menuList.next(this.cartItemList);
    this.getTotalPrice();
  }

  removeCartItem(item: any)
  {
    this.cartItemList.map((a: any, index: any) =>
    {
      if(item.id === a.id)
      {
        this.cartItemList.splice(index, 1);
      }
    })
    this.cartItemList.next(this.cartItemList);
    
  }

  emptyCart()
  {
    this.cartItemList = [];
    this.menuList.next(this.cartItemList);
    this.cartItemList.next(this.cartItemList);
  }

}