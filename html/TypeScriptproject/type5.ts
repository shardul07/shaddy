class Car { 
  engine:string; 
  constructor(x:string) { 
      this.engine = x 
   }  
   disp():void { 
      console.log("Engine is  :   "+this.engine) 
   } 
}

let car:Car = new Car("XXSY1");
console.log(car.engine);
car.disp();
