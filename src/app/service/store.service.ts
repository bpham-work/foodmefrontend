import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Store, select } from '@ngrx/store';
import 'rxjs/add/operator/map';

import { GroceryStore } from '../model/grocerystore';
import { Item } from '../model/item';
import { STORE_SAVE, STORE_SELECT } from '../reducer/store.reducer';

@Injectable()
export class StoreService {
  constructor(private http: HttpClient, private store: Store<any>) {}

  public getStores(): Observable<GroceryStore[]> {
    return this.store.pipe(select('store'));
  }

  public loadStores(zip: string): void {
    // const uri = 'http://54.210.246.115:8080/store/' + zip;
    const uri = 'http://localhost:8080/store/' + zip;
    this.http.get(uri)
      .map((json: any[]) => json.map((elem) => GroceryStore.from(elem)) as GroceryStore[])
      .subscribe((stores: GroceryStore[]) =>
        this.store.dispatch({type: STORE_SAVE, payload: stores}));
  }

  public selectStore(store: GroceryStore): void {
    this.store.dispatch({type: STORE_SELECT, payload: store});
  }

  public getSelectedStore(): Observable<GroceryStore> {
    return this.store.pipe(select('selectedStore'));
  }

  public getItems(storeId: string): Observable<Item[]> {
    // const uri = 'http://54.210.246.115:8080/store/' + storeId + '/items';
    const uri = 'http://localhost:8080/store/' + storeId + '/items';
    return this.http.get(uri)
      .map((json: any[]) => json.map((elem) => Item.from(elem)) as Item[]);
  }
}
