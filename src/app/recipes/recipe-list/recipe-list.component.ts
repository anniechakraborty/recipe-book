import { Component } from '@angular/core';
// we have to import the class of the Recipe model to be able to use the model and its properties
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent {
  // the values stored in the recipes array will be objects of the Recipe model we have created
  recipesList : Recipe[] = [
    new Recipe('Demo', 'We have created a demo recipe for our testing purposes', 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Biryani_of_Lahore.jpg/800px-Biryani_of_Lahore.jpg')
  ];
  constructor(){

  }
}
