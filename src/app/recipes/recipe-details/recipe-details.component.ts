import { Component, OnInit, Input } from '@angular/core';
import { Recipe } from '../recipe';
import {ShoppingServiceService} from '../../shopping-list/shopping-service.service';

@Component({
  selector: 'rb-recipe-details',
  templateUrl: './recipe-details.component.html',
  styles: []
})
export class RecipeDetailsComponent implements OnInit {
  @Input() selectedRecipe: Recipe;

  constructor(private sss: ShoppingServiceService) { }

  ngOnInit() {
  }

  onAddToShoppingList(){
    this.sss.addItems(this.selectedRecipe.ingredient);

  }
}
