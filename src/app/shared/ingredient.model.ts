export class Ingredient{
    // public name : string;
    // public qty : number;
    // constructor(name : string, qty : number){
    //     this.name = name;
    //     this.qty = qty;
    // }
    // the TypeScript short cut for the above declaration and assignment is -
    constructor(public name : string, public qty : number){}
    // this line will auto create the vars and initalise them with the values passed to the constructor
}