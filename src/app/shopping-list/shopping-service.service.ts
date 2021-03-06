import {Ingredient} from "../shared/ingredient";

export class ShoppingServiceService {

  private items: Ingredient[] = [];

  constructor() { }

  getItems() {
    return this.items;
  }

  addItems(items: Ingredient[]) {
    Array.prototype.push.apply(this.items, items);
  }

}
