import { Component, OnInit } from '@angular/core';

import { StoreService } from '../service/store.service';
import { Store } from '../model/store';

@Component({
  selector: 'map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {
  public stores: Store[] = [];

  constructor(private storeService: StoreService) {}

  public ngOnInit(): void {
    this.storeService.getStores('77477')
      .subscribe((stores: Store[]) => this.stores = stores);
  }
}
