import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { RecipesComponent } from './recipes/recipes.component';
import { RecipeItemComponent } from './recipes/recipe-item.component';
import { RecipeListComponent } from './recipes/recipe-list.component';
import { RecipeDetailsComponent } from './recipes/recipe-details/recipe-details.component';
import { DropdownDirective } from './dropdown.directive';
import { RecipeService } from './recipe.service';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { ShoppingAddComponent } from './shopping-list/shopping-add.component';
import { ShoppingServiceService } from './shopping-list/shopping-service.service';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RecipesComponent,
    RecipeItemComponent,
    RecipeListComponent,
    RecipeDetailsComponent,
    DropdownDirective,
    ShoppingListComponent,
    ShoppingAddComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [RecipeService, ShoppingServiceService],
  bootstrap: [AppComponent, ShoppingListComponent]
})
export class AppModule { }
