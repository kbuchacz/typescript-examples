import {Item} from "./Item";
export class Rim implements Item {
  itemNumber:number;
  itemDescription:string;

  get material():string{
      return this._material;
      }

  set material(value:string){
      this._material=value;
      }

  get size():number{
      return this._size;
      }

  set size(value:number){
      this._size=value;
      }

  private _material: string;
  private _size: number;
}
