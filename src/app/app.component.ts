import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'recipe-book';
  recipeClicked : boolean = false;
  shoppingClicked : boolean = false;

  onRecipeClicked(){
    this.recipeClicked = true;
    this.shoppingClicked = false;
  }

  onShoppingClicked(){
    this.shoppingClicked = true;
    this.recipeClicked = false;
  }
}
