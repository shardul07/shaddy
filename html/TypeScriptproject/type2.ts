function display(id:number,name:string,mailid?:string) { 
    console.log("ID:", id); 
    console.log("Name",name); 
    if(mailid!=undefined)  
    console.log("Email Id",mailid); 
 }

 display(123,"John");
 display(111,"mary","abc@xyz.com");