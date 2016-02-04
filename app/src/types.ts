declare class Item {
  private itemNumber: number;
  private itemDescription: string;

  mojaFunkcja(): void {
    console.log('smth');
  }
}

declare function addItem(item: Item, name: string, functionalities: () => string): boolean;


var myItem = new Item();
    myItem.mojaFunkcja();
