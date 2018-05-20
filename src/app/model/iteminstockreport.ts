import { Item } from './item';

export class ItemInStockReport {
  public itemId: string;
  public storeId: string;
  public name: string;
  public inStock: boolean;

  constructor(item: Item) {
    this.itemId = item.itemId;
    this.storeId = item.storeId;
    this.name = item.name;
    this.inStock = false;
  }
}
