import { Component, OnInit } from '@angular/core';

import { StoreService } from '../service/store.service';
import { GroceryStore } from '../model/grocerystore';

@Component({
  selector: 'map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {
  public stores: GroceryStore[] = [];

  constructor(private storeService: StoreService) {}

  public ngOnInit(): void {
    this.storeService.getStores()
      .subscribe((stores: GroceryStore[]) => this.stores = stores);
  }
}
