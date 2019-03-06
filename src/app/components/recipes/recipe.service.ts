import { Injectable, EventEmitter } from '@angular/core';
import { Recipe } from './recipe.model';
import { Ingredient } from 'src/app/shared/ingredient.model';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();

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

  getRecipes() {
    return this.recipes.slice();
  }

  constructor() { }
}
