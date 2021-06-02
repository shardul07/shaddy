interface IPerson { 
   name:string;
   sayHi: ()=>string 
} 
 
var customer:IPerson = { 
   name:"Tom",
   sayHi: ():string =>{return "Hi there"} 
} 
 
console.log(customer.name) 
console.log(customer.sayHi())