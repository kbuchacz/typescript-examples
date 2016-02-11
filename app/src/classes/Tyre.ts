import {Item} from "./Item";
export class Tyre implements Item {
  itemNumber:number;
  itemDescription:string;

  private gumType: string;
  private tireType: TireType;
}

enum TireType {
  Winter, Summer, AllYear
}
