import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Recipe } from './recipe';
import { RecipeItemComponent } from './recipe-item.component';

@Component({
  selector: 'rb-recipe-list',
  templateUrl: './recipe-list.component.html'
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [new Recipe("French Fries", "Lightly salted fries fried to a golden perfection", "http://s2.dmcdn.net/IZlI9/1280x720-ts8.jpg"),
                       new Recipe("Fried Chicken", "Crispy fried chicken marinated in secret herbs and spices","http://web.gastongazette.com/interactive/friedchicken/images/popeyeschicken.png" )
                      ];
  @Output() recipeSelected = new EventEmitter<Recipe>();

  onSelected(recipe: Recipe) {
    this.recipeSelected.emit(recipe)
  }

  constructor() { }

  ngOnInit() {
  }

}
