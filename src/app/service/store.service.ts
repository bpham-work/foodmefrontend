import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Store, select } from '@ngrx/store';
import 'rxjs/add/operator/map';

import { GroceryStore } from '../model/grocerystore';
import { Item } from '../model/item';
import { STORE_SAVE, STORE_SELECT } from '../reducer/store.reducer';
import { ItemOutOfStockReport } from '../model/itemoutofstockreport';
import { ItemInStockReport } from '../model/iteminstockreport';

@Injectable()
export class StoreService {
  private HOST: string = 'http://18.236.129.219:8080';

  constructor(private http: HttpClient, private store: Store<any>) {}

  public getStores(): Observable<GroceryStore[]> {
    return this.store.pipe(select('store'));
  }

  public loadStores(zip: string): void {
    const uri = this.HOST + '/store/' + zip;
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
    const uri = this.HOST + '/store/' + storeId + '/items';
    return this.http.get(uri)
      .map((json: any[]) => json.map((elem) => Item.from(elem)) as Item[]);
  }

  public setOutOfStock(outOfStockItems: ItemOutOfStockReport[]): void {
    for (const item of outOfStockItems) {
      if (item.outOfStock) {
        const uri = this.getOutOfStockUri(item);
        this.http.get(uri)
          .subscribe(() => {
            // empty body
          });
      }
    }
  }

  public setInStock(inStockReport: ItemInStockReport[]): void {
    for (const item of inStockReport) {
      if (item.inStock) {
        const uri = this.getInStockUri(item);
        this.http.get(uri)
          .subscribe(() => {
            // empty body
          });
      }
    }
  }

  private getOutOfStockUri(item: ItemOutOfStockReport): string {
    return this.HOST + '/item/' + item.itemId + '/unavailable';
  }

  private getInStockUri(item: ItemInStockReport): string {
    return this.HOST + '/item/' + item.itemId + '/available';
  }
}
