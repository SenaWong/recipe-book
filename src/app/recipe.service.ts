import { Injectable } from '@angular/core';
import {Recipe} from './recipes/recipe';

@Injectable()
export class RecipeService {

  private recipes: Recipe[] = [new Recipe("French Fries", "Lightly salted fries fried to a golden perfection", "http://s2.dmcdn.net/IZlI9/1280x720-ts8.jpg"),
                       new Recipe("Fried Chicken", "Crispy fried chicken marinated in secret herbs and spices","http://web.gastongazette.com/interactive/friedchicken/images/popeyeschicken.png" )
                      ];


  getRecipes() {
    return this.recipes
  }

  constructor() { }

}
