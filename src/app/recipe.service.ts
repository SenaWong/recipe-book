import { Injectable } from '@angular/core';
import {Recipe} from './recipes/recipe';
import { Ingredient } from './shared/ingredient';

@Injectable()
export class RecipeService {

  private recipes: Recipe[] = [new Recipe("French Fries", "Lightly salted fries fried to a golden perfection", "http://s2.dmcdn.net/IZlI9/1280x720-ts8.jpg", [
                                 new Ingredient('French Fries', 2),
                                 new Ingredient('Pork', 2)]),

                              new Recipe("Fried Chicken", "Crispy fried chicken marinated in secret herbs and spices","http://web.gastongazette.com/interactive/friedchicken/images/popeyeschicken.png",[
                                 new Ingredient('Chicken', 2),
                                 new Ingredient('Special Spice', 3)])
                            ];


  getRecipes() {
    return this.recipes
  }

  constructor() { }

}
