
var msg = function() { return 12*2;  } 
 
var foo1 = (x:number)=>10 + x 
   
var foo2 = (x:number)=> {    
   x = 10 + x ;
   console.log(x) ; 
} 
 
console.log(msg());
console.log(msg());
console.log(foo1(100)) ;
foo2(100);