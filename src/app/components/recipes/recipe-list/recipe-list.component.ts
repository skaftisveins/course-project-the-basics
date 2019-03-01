import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Recipe } from '../recipe.model';
@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  @Output() recipeWasSelected = new EventEmitter<Recipe>();

  recipes: Recipe[] = [
    new Recipe('Alien 1979', 'First Movies', 'https://i.imgur.com/pIan4G8.jpg'),
    new Recipe('Aliens 1986', 'Second Movie', 'https://i.ebayimg.com/images/g/jiEAAOSwHMJYKvHx/s-l300.jpg'),
    new Recipe('Alien 3 1992', 'Third Movie', 'https://bmoviesbreviewed.files.wordpress.com/2015/04/alien-poster.jpg')
  ];

  constructor() { }

  ngOnInit() {
  }

  onRecipeSelected(recipe: Recipe) {
    this.recipeWasSelected.emit(recipe);
  }

}
