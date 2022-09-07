import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Recipe } from '../../recipe.model';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styles: [],
})
export class RecipeItemComponent implements OnInit {
  @Input() recipeItem: Recipe;
  @Output() recipeSelected = new EventEmitter<void>();
  constructor() {}

  ngOnInit(): void {}

  onSelected() {
    this.recipeSelected.emit();
  }
}
