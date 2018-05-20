import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { Store } from '../model/store';
import { Item } from '../model/item';

@Injectable()
export class StoreService {
  constructor(private http: HttpClient) {}

  public getStores(zip: string): Observable<Store[]> {
    const uri = 'http://54.210.246.115:8080/store/' + zip;
    return this.http.get(uri)
      .map((json: any[]) => json.map((elem) => Store.from(elem)) as Store[]);
  }

  public getItems(storeId: string): Observable<Item[]> {
    const uri = 'http://54.210.246.115:8080/store/' + storeId + '/items';
    return this.http.get(uri)
      .map((json: any[]) => json.map((elem) => Item.from(elem)) as Item[]);
  }
}
