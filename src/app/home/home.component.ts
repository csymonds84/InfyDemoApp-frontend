import { MyDataService } from '../services/my-data.service';
import { Component, OnInit } from '@angular/core';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit 
{
  public menuList: any;

  constructor(private dataService: MyDataService,
              private cartService: CartService) {}
  
  ngOnInit(): void
  {
  this.dataService.getMenuData().subscribe(results => 
  {
    this.menuList = results;
            
    this.menuList.forEach((a: any) => 
    {
      Object.assign(a, {quantity:1, total: a.cost})
    })
            
  });
  }
            
  addToCart(item: any)
  {
    this.cartService.addToCart(item);
  }


}
