import { Item } from './item';

export class ItemOutOfStockReport {
  public itemId: string;
  public storeId: string;
  public name: string;
  public outOfStock: boolean;

  constructor(item: Item) {
    this.itemId = item.itemId;
    this.storeId = item.storeId;
    this.name = item.name;
    this.outOfStock = false;
  }
}
