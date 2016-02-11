export class Part {
  private _manufacturer: string;
  private _manufacturer_id: number;

  constructor(manufacturer: string) {
    this._manufacturer = manufacturer;
    this.manufacturer_id = Math.random();
  }

  get manufacturer():string{
      return this._manufacturer;
      }

  set manufacturer(value:string){
      this._manufacturer=value;
      }

  get manufacturer_id():number{
      return this._manufacturer_id;
      }

  set manufacturer_id(value:number){
      this._manufacturer_id=value;
      }
}
