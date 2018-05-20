import { Component, OnInit } from '@angular/core';

import { GroceryStore } from '../model/grocerystore';
import { StoreService } from '../service/store.service';
import { Store } from '@ngrx/store';

@Component({
  selector: 'store-list',
  templateUrl: './storelist.component.html',
  styleUrls: ['storelist.component.css']
})
export class StorelistComponent implements OnInit {
  public stores: GroceryStore[] = [];
  public storeSelected: boolean = false;

  constructor(private storeService: StoreService) {}

  public ngOnInit(): void {
    this.storeService.getStores()
      .subscribe((stores: GroceryStore[]) => this.stores = stores);
    this.storeService.getSelectedStore()
      .skipWhile((n: any) => !n)
      .subscribe((store: GroceryStore) => {
        this.storeSelected = true;
      });
  }

  public selectStore(store: GroceryStore): void {
    this.storeService.selectStore(store);
    this.storeSelected = true;
  }

  public hideStoreDetails(): void {
    this.storeSelected = false;
  }
}
