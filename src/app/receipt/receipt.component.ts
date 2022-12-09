import { MyDataService } from './../services/my-data.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-receipt',
  templateUrl: './receipt.component.html',
  styleUrls: ['./receipt.component.css']
})
export class ReceiptComponent
{
  public receipt: any;

  constructor(private dataService: MyDataService) {}

  ngOnInit()
  {
    this.dataService.getReceiptData().subscribe(results =>
      {
        this.receipt = results;
      });
  }

}
