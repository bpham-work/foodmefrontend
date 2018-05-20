import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';

import { StoreService } from '../service/store.service';
import { GroceryStore } from '../model/grocerystore';
import { Item } from '../model/item';
import { ItemOutOfStockReport } from '../model/itemoutofstockreport';
import { ItemInStockReport } from '../model/iteminstockreport';

@Component({
  selector: 'report-modal',
  templateUrl: 'reportmodal.component.html',
  styleUrls: ['reportmodal.component.css']
})
export class ReportModalComponent implements OnInit {
  public store: GroceryStore;
  public items: Item[] = [];
  public outOfStockItems: ItemOutOfStockReport[] = [];
  public inStockItems: ItemInStockReport[] = [];

  constructor(public dialogRef: MatDialogRef<ReportModalComponent>,
              private storeService: StoreService) {}

  public ngOnInit(): void {
    this.storeService.getSelectedStore()
      .skipWhile((n: any) => !n)
      .switchMap((store: GroceryStore) => {
        this.store = store;
        return this.storeService.getItems(store.id);
      })
      .subscribe((items: Item[]) => {
        this.items = items;
        this.items.forEach((item: Item) => {
          this.outOfStockItems.push(new ItemOutOfStockReport(item));
          this.inStockItems.push(new ItemInStockReport(item));
        });
      });
  }

  public submit(): void {
    this.storeService.setOutOfStock(this.outOfStockItems);
    this.storeService.setInStock(this.inStockItems);
    this.dialogRef.close();
  }

  public cancel(): void {
    this.dialogRef.close();
  }
}
