function validate(){

var name = document.getElementById("username");
var errorlogin = document.getElementById("errorlogin");
var pass = document.getElementById("password");

if (name.value=="" && pass.value=="" ){

	
	errorlogin.innerText = "Insert username";
    errorlogin.style.color = "red";	
  
  return false;
    
}

if (name.value!="" && pass.value==""){

	

    errorlogin.innerText = "Insert password";

	errorlogin.style.color = "red";
	
    return false;
}

if (name.value=="" && pass.value!=""){

    errorlogin.innerText = "Insert username";
    errorlogin.style.color = "red";	
  

    return false;
}


return true;

    }




