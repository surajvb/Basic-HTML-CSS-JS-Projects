function Fruit(){
    this.weight = "2kg";
    this.name = "Apple";   //public variables declaration
    this.price = "199";
}

console.dir(Fruit); 

Fruit.prototype.buy = function(){
    console.log(`Buying ${this.name} for ${this.price}`);
    this.name = "orange"; //resetting public variables
}

Fruit.prototype.eat = function(){
    console.log("Eating " + this.name );
}


var fruit = new Fruit();
fruit.buy();
fruit.buy();
fruit.eat();
