function register(){


	

var nom = document.getElementById('nome');
var cognom = document.getElementById('cognome');
var utent = document.getElementById('username');
var passwor = document.getElementById('pass');
var confermapass = document.getElementById('confermapassword');
var errorsign = document.getElementById("errorsign");

if (nom.value=="" ){

	nom.style.borderColor = "red";
	
}

if (nom.value!=""){

	nom.style.borderColor = "#878787";
   
	
}if (cognom.value=="" ){
cognom.style.borderColor = "red";

}

if (cognom.value!=""){

	cognom.style.borderColor = "#878787";
    
}
	if (utent.value=="" ){
utent.style.borderColor = "red";

}

if (utent.value!=""){

	utent.style.borderColor = "#878787";
    
}
if (passwor.value=="" ){

	passwor.style.borderColor = "red";
	
}

if (passwor.value!=""){

	passwor.style.borderColor = "#878787";
   
	
}

if (confermapass.value=="" ){
confermapass.style.borderColor = "red";

}

if (confermapass.value!=""){

	confermapass.style.borderColor = "#878787";
    
}

if( nom.value=="" || cognom.value=="" || utent.value=="" ||  passwor.value=="" || confermapass.value=="" ){

	errorsign.innerText=" fill all the fields";
	errorsign.style.color = "red";

    return false;
    
}

if( nom.value!="" || cognom.value!="" || utent.value!="" ||  passwor.value!="" || confermapass.value!=""){

	

    if(passwor.value != confermapass.value){
    
    errorsign.innerText=" Password and confirm don't match";
    errorsign.style.color = "red";

    return false;
  }  
}


return true;
	

    }
