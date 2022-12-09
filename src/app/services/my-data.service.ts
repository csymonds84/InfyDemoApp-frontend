import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MyDataService {

  constructor(private http: HttpClient){}


  getMenuData()
  {
    return this.http.get<any>('http://localhost:8080/menu').pipe(
      map((respone: any) =>
      {
        return respone;
      })
    );
  }

  saveOrderData(data: any): Observable<any>
  {
    console.log('inside dataService save: ' + JSON.stringify(data));
    return this.http.post<any>('http://localhost:8080/dinnerTables', JSON.stringify(data));
  }

  getReceiptData()
  {
    return this.http.get('http://localhost:8080/dinnerTables').pipe(
      map((respone: any) =>
      {
        return respone;
      })
    );
  }
}
