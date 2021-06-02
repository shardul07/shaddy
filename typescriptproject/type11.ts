console.log('hello');
let a:number = 12;
let b:string ='india';
var c = 'india';
console.log(a);
console.log(b);
function display(id:number,name:string,mailid?:string) { 
    console.log("ID:", id); 
    console.log("Name",name); 
    if(mailid!=undefined)  
    console.log("Email Id",mailid); 
 }
 
 display(123,"John");
 display(111,"mary","abc@xyz.com");