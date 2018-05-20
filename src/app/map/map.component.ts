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
  public cameraLat: number;
  public cameraLng: number;
  public zoom: number = 12;

  constructor(private storeService: StoreService) {}

  public ngOnInit(): void {
    this.storeService.getStores()
      .subscribe((stores: GroceryStore[]) => {
        this.stores = stores;
        if (stores.length > 0) {
          this.cameraLat = this.stores[0].lat;
          this.cameraLng = this.stores[0].lng;
          this.zoom = 12;
        }
      });

    this.storeService.getSelectedStore()
      .skipWhile((n: any) => !n)
      .subscribe((store: GroceryStore) => {
        this.cameraLat = store.lat;
        this.cameraLng = store.lng;
      });
  }

  public markerClick(store: GroceryStore): void {
    this.storeService.selectStore(store);
  }
}
