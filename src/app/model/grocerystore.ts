export class GroceryStore {
  public id: string;
  public name: string;
  public lat: number;
  public lng: number;
  public rating: number;

  public static from(json: any) {
    return new GroceryStore(json.id, json.name, json.geometry.location.lat,
      json.geometry.location.lng, json.rating);
  }

  constructor(id: string, name: string, lat: number, lng: number, rating: number) {
    this.id = id;
    this.name = name;
    this.lat = lat;
    this.lng = lng;
    this.rating = rating;
  }
}
