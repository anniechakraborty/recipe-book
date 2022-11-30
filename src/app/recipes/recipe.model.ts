// we have created this TypeScript as a model / blueprint for all the recipes we will be creating.

// a model helps define the structre of how data shall be stored and since we will be using recipes a lot,
// so we have created a model here

export class Recipe{
    // declaring a variable to store the recipe name. we have declared it as public to make it accessible 
    // outside of the class wheneevr we create objects of this class for different recipes.
    public recipeName : string;
    public recipeDescription : string;
    public impagePath : string;

    constructor(name : string, desc : string, path : string){
        this.recipeName = name;
        this.recipeDescription = desc;
        this.impagePath = path;
    }
}