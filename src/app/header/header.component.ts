import { Component, EventEmitter, Output } from "@angular/core";

@Component({
    selector : 'app-header',
    templateUrl : './header.component.html',
    styleUrls : ['./header.component.css']
})
export class HeaderComponent{
    collapsed = true;
    @Output() recipeClick = new EventEmitter();
    @Output() shoppoingList = new EventEmitter();

    onRecipeClick(){
        this.recipeClick.emit();
    }

    onShoppingClick(){
        this.shoppoingList.emit();
    }
}