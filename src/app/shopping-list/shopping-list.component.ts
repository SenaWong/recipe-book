import { Component, OnInit } from '@angular/core';
import {ShoppingAddComponent} from './shopping-add.component'
import {ShoppingServiceService} from './shopping-service.service'; 
import {Ingredient} from '../shared/ingredient';

@Component({
  selector: 'rb-shopping-list',
  templateUrl: './shopping-list.component.html'
})
export class ShoppingListComponent implements OnInit {

  items: Ingredient[] = [];

  constructor(private sss: ShoppingServiceService) { }

  ngOnInit() {
    this.items = this.sss.getItems();
  }

}
