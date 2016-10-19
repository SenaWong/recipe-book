import { Component, OnInit } from '@angular/core';
import { Recipe } from './recipe';

@Component({
  selector: 'rb-recipe-list',
  templateUrl: './recipe-list.component.html'
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [];
  rez = new Recipe("French Fries", "Lightly salted fries fried to a golden perfection", "http://s2.dmcdn.net/IZlI9/1280x720-ts8.jpg")

  constructor() { }

  ngOnInit() {
  }

}
