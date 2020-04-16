<?php
include ('database.php');
if(isset($_POST['accedi'])){



		$utente = (isset($_POST['username']))?mysqli_real_escape_string($db_server,($_POST['username'])):false;
		$password = (isset($_POST['password']))?($_POST['password']):false;
		$password=md5($password);
        

        $query = "SELECT* FROM users WHERE Username = '".$utente."' AND Password = '".$password."'";
        $result = mysqli_query($db_server , $query); 
        $numero = mysqli_num_rows($result);



if($numero > 0){
	    
	   
        if(mysqli_query($db_server , $query)) {
		$query = "SELECT* FROM users WHERE Username = '".$utente."'";
        $result = mysqli_query($db_server , $query);
		$row = mysqli_fetch_array($result);
		$_SESSION['utente'] = $row["Username"];
		$_SESSION['nome'] = $row["Nome"];
		$_SESSION['cognome'] = $row["Cognome"];
	    
		$_SESSION['password'] = $row["Password"];
		
		$_SESSION['loggato'] = 1;
       
        echo $_SESSION['utente'];
        echo $_SESSION['nome'];
        echo $_SESSION['cognome'];
        echo $_SESSION['password'];
		header('location: ../home.php');
		die();
	
  }
}elseif ($numero == 0){

	    header("location: login.php?err=1"); 
	    die();
	
	}
   }
   
?>


