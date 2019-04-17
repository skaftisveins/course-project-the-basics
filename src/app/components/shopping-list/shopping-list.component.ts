import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

import { Ingredient } from 'src/app/shared/ingredient.model';
import { ShoppingListService } from '../../services/shopping-list.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit, OnDestroy {
  ingredients: Ingredient[];
  private subscription: Subscription;

  constructor(private shoppingListService: ShoppingListService) { }

  ngOnInit() {
    this.ingredients = this.shoppingListService.getIngredients();
    this.subscription = this.shoppingListService.ingredientsChanged
      .subscribe(
        (ingredient: Ingredient[]) => {
          this.ingredients = ingredient;
        }
      );
  }

  ngOnDestroy() {
    this.subscription.unsubscribe(); // prevent memory leaks
  }

  onEditItem(index: number) {
    this.shoppingListService.startedEditing.next(index);
  }

}
