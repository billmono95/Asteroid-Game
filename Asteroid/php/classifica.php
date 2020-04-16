


<?php

	include('database.php');
			
if(isset($_POST['ranking']) || isset($_POST['rematch'])){



		$score = (isset($_POST['ajax_php']))?mysqli_real_escape_string($db_server,($_POST['ajax_php'])):false;
        $utente = $_SESSION['utente'];




     
		$query = "INSERT INTO classifica(Username , Score) VALUES ( '$utente' ,'$score')";

		if(mysqli_query($db_server , $query)){

          
          if (isset($_POST['ranking'])) {

          	header('Location: gameover.php');
          	
          }

           if (isset($_POST['rematch'])) {

          	header('Location: ../game.php');
          	
          }


          


		}else{

			echo "DOES NOT WORK"; 
	           die();
	
		}


	}			

		
?>