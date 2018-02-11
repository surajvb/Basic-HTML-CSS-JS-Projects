function Car(){
    this.carName = "indica"; //public variables
    this.no = "890";   
    this.color = "green";
    this.maker = "BMW"
    this.owner = "suraj"
    
    var _avgspeed = "20kmph"; // private variables
  
    var _mileage = function(){   // private function
       console.log("this is private");
      return "20kmph";
     }
  
  this.mileage= _mileage(); // making private variables public
}

console.dir(Car); 

Car.prototype.drive = function(){
    console.log(` I am driving ${this.maker} ,owned by ${this.owner}`);
    
}

Car.prototype.carinfo= function(){
  
    console.log(`name of the car: ${this.carName}`);
    console.log(`car number: ${this.no}`);
    console.log(`color:${this.color}`);
    console.log(`average speed of car is ${this.mileage}`);
}

var car = new Car();
car.drive();
car.carinfo();
