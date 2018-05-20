export class Store {
  public id: string;
  public name: string;
  public lat: number;
  public lng: number;

  public static from(json: any) {
    return new Store(json.id, json.name, json.geometry.location.lat, json.geometry.location.lng);
  }

  constructor(id: string, name: string, lat: number, lng: number) {
    this.id = id;
    this.name = name;
    this.lat = lat;
    this.lng = lng;
  }
}
