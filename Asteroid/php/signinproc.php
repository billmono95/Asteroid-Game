<?php
include ('database.php');


if(isset($_POST['accedi'])) {
	 $utente = isset($_POST['username'])?mysqli_real_escape_string($db_server,($_POST['username'])):false;
     $nome = isset($_POST['nome'])?mysqli_real_escape_string($db_server,($_POST['nome'])):false;
     $cognome = isset($_POST['cognome'])?mysqli_real_escape_string($db_server,($_POST['cognome'])):false;   
     $password = isset($_POST['password'])?($_POST['password']):false;
     $confermapassword = isset($_POST['confermapassword'])?($_POST['confermapassword']):false;
	 
     $query1 = "SELECT* FROM users WHERE Username = '".$utente."'";
     $result = mysqli_query($db_server , $query1); 
     $numero = mysqli_num_rows($result);


	 if($numero> 0) {
			header("location: signin.php?erru=1");
			die();
		}

     
       $password = md5($password);



		$query = "INSERT INTO users(Nome , Cognome , Username ,Password) VALUES ( '$nome' ,'$cognome','$utente' ,'$password')";
		
           //$query = "SELECT* FROM users WHERE Username = '".$utente."'";  

		if(mysqli_query($db_server , $query)){

			    $_SESSION['utente'] = $utente;
				$risultato=mysqli_query($conn, "SELECT * FROM users WHERE Username LIKE '$utente'");
				$read=mysqli_fetch_array($risultato, MYSQLI_ASSOC);
			
 	            $_SESSION['utente'] = $read["Username"];
				$_SESSION['nome'] = $read["Nome"];
		        $_SESSION['cognome'] = $read["Cognome"];
		        
				$_SESSION['loggato'] = 1;

              

		       		header('Location: login.php');
		}else {
				echo " DOES NOT WORK"; 
	           die();
	
			}
		 //}
         
		}
?>