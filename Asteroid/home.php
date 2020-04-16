<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="utf-8">
  <meta name="viewport" content="width=device-width, user-scalable=no,
initial-scale=1.0">
  <title>Asteroid Game</title>
  
<script type="text/javascript" src="js/home.js"></script>
  <link rel="stylesheet" type="text/css" href="css/homepage.css">
  <link rel="stylesheet" type="text/css" href="css/mainpage.css">
  <link rel="stylesheet" type="text/css" href="css/login.css">
  <link rel="stylesheet" type="text/css" href="css/signin.css">
</head>




<body onload="home_animation()">
<header> 
<div class="titolo">  
<h1>Asteroid</h1>
</div>
</header>




<div class="content">
<div id="home3">
<p id="text" class="text" style=" color: white;">Asteroid game is a game set in space. We are in 2100, terrestrial technologies have evolved, resources in the planets are scarce, therefore we must move towards space in search of new riches. We start with our spaceship in search of these riches hidden in  space. During our journey we will have to be careful to avoid all the asteroids, which will arise in our path. Are you ready to start this new adventure? </p>
 <?php
    include('php/database.php');
    if (isset($_SESSION['loggato'])){

?> <input type="submit" id="entra" class="tasti" name="invia" value="Game" onclick="entry_game()">
   <input type="submit" id="entra" class="tasti" name="invia" value="Exit" onclick="quit()">
 <?php
 } else{
?> <input type="submit" id="entra" class="tasti" name="invia" value="Login" onclick="entry_login()">

 <?php
 } 
?>

</div>

</div>



<footer>
  <p>All rights riserved.<br>Project Web and Multimedia 2019-20.<a href="infoproject.pdf"> Info project</a></p>
</footer>



</body>
</html>