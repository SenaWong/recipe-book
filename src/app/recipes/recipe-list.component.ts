import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Recipe } from './recipe';
import { RecipeItemComponent } from './recipe-item.component';

@Component({
  selector: 'rb-recipe-list',
  templateUrl: './recipe-list.component.html'
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [];
  @Output() recipeSelected = new EventEmitter<Recipe>();
  rez = new Recipe("French Fries", "Lightly salted fries fried to a golden perfection", "http://s2.dmcdn.net/IZlI9/1280x720-ts8.jpg")

  onSelected(recipe: Recipe) {
    this.recipeSelected.emit(recipe)
  }

  constructor() { }

  ngOnInit() {
  }

}
