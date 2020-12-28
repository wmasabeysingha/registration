function validate(){
    var guest= document.getElementById('uname').value;
    var address= document.getElementById('uaddress').value;
    var country= document.getElementById('ucountry').value;
    var telephone= document.getElementById('tel').value;
    var email= document.getElementById('email').value;
    var request= document.getElementById('request').value;
    var number= document.getElementById('num').value;
    var cname= document.getElementById('CHname').value;
    var emailformat = /^[a-zA-Z0-9.!#$%&'+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)$/;

     if(guest==""){
         alert("Please enter your name");
         return false;
     }
     
     if(address==""){
         alert("Please enter your address");
         return false;
     }
    
     if(country==""){
         alert("Please enter your country name");
         return false;
     }
    
     if(telephone==""){
         alert("Telephone number is missing");
         return false;
     }
     else if(telephone.length=10 && !isNaN(telephone)){
        alert("valid number");
    }
    else{
        alert("Invalid number");
    }
    if(email==""){
        alert("Please enter your email");
        return false;
    }
    else if(email.match(emailformat)){
        alert("email is valid");
    }
    else{
        alert("Email is invalid");
        return false;
    }
    if(request==""){
        alert("Please add special request");
        return false;
    }
    if(number==""){
        alert("Please enter your credit card number");
        return false;
    }
    
    if(cname==""){
        alert("Please enter card holder's name");
        return false;
    }

}