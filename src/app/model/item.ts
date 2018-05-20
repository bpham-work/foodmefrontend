export class Item {
  public itemId: string;
  public storeId: string;
  public name: string;
  public availability: boolean;
  public quantity: number;

  public static from(json: any) {
    return new Item(json.itemId, json.storeId, json.name, json.availability, json.quantity);
  }

  constructor(itemId: string, storeId: string, name: string,
              availability: boolean, quantity: number) {
    this.itemId = itemId;
    this.storeId = storeId;
    this.name = name;
    this.availability = availability;
    this.quantity = quantity;
  }
}
