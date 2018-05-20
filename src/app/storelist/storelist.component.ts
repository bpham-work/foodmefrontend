import { Component, OnInit } from '@angular/core';

import { GroceryStore } from '../model/grocerystore';
import { StoreService } from '../service/store.service';

@Component({
  selector: 'store-list',
  templateUrl: './storelist.component.html',
  styleUrls: ['storelist.component.css']
})
export class StorelistComponent implements OnInit {
  public stores: GroceryStore[] = [];

  constructor(private storeService: StoreService) {}

  public ngOnInit(): void {
    this.storeService.getStores()
      .subscribe((stores: GroceryStore[]) => this.stores = stores);
  }
}
