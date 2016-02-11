import {Item} from './Item';
import {Part} from "./Part";
import {Rim} from "./Rim";
import {Tyre} from "./Tyre";

export class Wheel extends Part implements Item {
  private rim:Rim;
  private tyre:Tyre;
  private model:string;

  itemNumber:number;
  itemDescription:string;

  constructor(model:string, manufacturer:string) {
    super(manufacturer);
    this.model = model;
  }
}
