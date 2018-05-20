import { Component } from '@angular/core';
import { StoreService } from '../service/store.service';

@Component({
  selector: 'topbar',
  templateUrl: 'topbar.component.html',
  styleUrls: ['topbar.component.css']
})
export class TopbarComponent {
  constructor(private storeService: StoreService) {}

  public onEnter(value: string): void {
    this.storeService.loadStores(value);
  }
}
