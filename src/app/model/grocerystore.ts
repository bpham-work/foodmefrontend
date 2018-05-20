export class GroceryStore {
  public id: string;
  public name: string;
  public address: string;
  public lat: number;
  public lng: number;
  public rating: number;
  public photoUrl: string;

  public static from(json: any) {
    return new GroceryStore(json.googleId, json.name, json.lat,
      json.lng, json.rating, json.address, json.photoUrl);
  }

  constructor(id: string, name: string, lat: number,
              lng: number, rating: number, address: string, photoUrl: string) {
    this.id = id;
    this.name = name;
    this.lat = lat;
    this.lng = lng;
    this.rating = rating;
    this.address = address;
    this.photoUrl = photoUrl;
  }
}
