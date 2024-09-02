let UserName = prompt("Enter Your Name");
let UserEmail = prompt ("Enter your Email");
let Userpassword = prompt ("Enter Your Password");
 
const  UserAarray = [
    {
      UserName: "tan",
      UserEmail: "tanveersohail@gmail.com",
      Userpass: "t123"

    },{
        UserName: "Waqas Noor",
      UserEmail: "waqasNoor@gmail.com",
      Userpass: "Waqas123"
    },{
        UserName: "Waqar Noor ",
      UserEmail: "WaqarNoor@gmail.com",
      Userpass: "Waqar123",
    },{
        UserName: "Rashid Malik",
      UserEmail: "RashidMalik@gmail.com",
      Userpass: "Rashid123",
    }]

   let isUserFound = true ;
  
    for (let i = 0; i< UserAarray.length; i++){

if(UserEmail == UserAarray[i].UserEmail && Userpassword == UserAarray[i].Userpass )

{
    console.log("Your Account Is found");
    document.write(`welcome! ${UserAarray[i].UserName}`);
    isUserFound = true;
    break;
  }
else 
{
     isUserFound = false;
    
}  
  }
    if(!isUserFound);  
    
  
  {
  console.warn("Your Account Is not found")
}

 

for(let i = 0; i< UserAarray.length; i++){
  if(UserEmail == UserAarray[i].UserEmail && Userpass == UserAarray[i].Userpass)
  {
    console.log("your Account Is Found")
  // break;
}
else 
{
  let isUserFound = false;
   break;
}
}
if(let = isUserFound)
  {  
  console.warn("your Account Is Not Found")
  }
