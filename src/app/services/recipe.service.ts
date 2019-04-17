import { Injectable } from '@angular/core';
import { Recipe } from '../components/recipes/recipe.model';
import { Ingredient } from 'src/app/shared/ingredient.model';
import { ShoppingListService } from './shopping-list.service';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {
  recipesChanged = new Subject<Recipe[]>();

  private recipes: Recipe[] = [
    new Recipe(
      'Alien 1979',
      'First Movies',
      'https://i.imgur.com/pIan4G8.jpg',
      [
        new Ingredient('Very Good', 5)
      ]),
    new Recipe(
      'Aliens 1986',
      'Second Movie',
      'https://i.ebayimg.com/images/g/jiEAAOSwHMJYKvHx/s-l300.jpg',
      [
        new Ingredient('Good', 4)
      ]),
    new Recipe(
      'Alien 3 1992',
      'Third Movie',
      'https://bmoviesbreviewed.files.wordpress.com/2015/04/alien-poster.jpg',
      [
        new Ingredient('Average', 3)
      ])
  ];

  constructor(private slService: ShoppingListService) {}

  getRecipes() {
    return this.recipes.slice();
  }

  getRecipe(index: number) {
    return this.recipes[index];
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.slService.addIngredients(ingredients);
  }

  addRecipe(recipe: Recipe) {
    this.recipes.push(recipe);
    this.recipesChanged.next(this.recipes.slice());
  }

  updateRecipe(index: number, newRecipe: Recipe) {
    this.recipes[index] = newRecipe;
    this.recipesChanged.next(this.recipes.slice());
  }

  deleteRecipe(index: number) {
    this.recipes.splice(index, 1);
    this.recipesChanged.next(this.recipes.slice());
  }

}
