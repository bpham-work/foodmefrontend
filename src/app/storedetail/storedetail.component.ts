import { Component, OnInit } from '@angular/core';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/skipWhile';

import { StoreService } from '../service/store.service';
import { GroceryStore } from '../model/grocerystore';
import { Item } from '../model/item';

@Component({
  selector: 'store-detail',
  templateUrl: './storedetail.component.html',
  styleUrls: ['./storedetail.component.css']
})
export class StoreDetailComponent implements OnInit {
  public store: GroceryStore;
  public items: Item[];

  constructor(private storeService: StoreService) {}

  public ngOnInit(): void {
    this.storeService.getSelectedStore()
      .skipWhile((n: any) => !n)
      .switchMap((store: GroceryStore) => {
        this.store = store;
        return this.storeService.getItems(store.id);
      })
      .subscribe((items: Item[]) => this.items = items);
  }
}
