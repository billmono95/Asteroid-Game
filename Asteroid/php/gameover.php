<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="utf-8">
  <meta name="viewport" content="width=device-width, user-scalable=no,
initial-scale=1.0">
  <title>Asteroid Game</title>
  <link rel="stylesheet" type="text/css" href="../css/homepage.css">
  <link rel="stylesheet" type="text/css" href="../css/mainpage.css">
  <link rel="stylesheet" type="text/css" href="../css/login.css">
  
  <link rel="stylesheet" type="text/css" href="../css/ranking.css">
</head>


<body>
<header> 
<div class="titolo">  
<h1>Asteroid</h1>
</div>
</header>
<?php
   include('database.php');
  if(isset($_SESSION['loggato'])){

    
?>

<div class="content">
<div id="home6">



<h5>GENERAL RANKING</h5>
<?php


$utente = $_SESSION['utente'];



    $query = "SELECT * FROM classifica  ORDER BY Score DESC LIMIT 4";
    
    $i = 1;
    
    $result = mysqli_query($db_server , $query);
    while($row= mysqli_fetch_array($result, MYSQLI_ASSOC)){
  
  
  
?> 

 <div id="classificagenerale">

    <a><?php echo "$i"?>
      <?php echo $row['Username']?>
    <?php echo $row['Score']?>
    
    </a>
    
    </div>


 

<?php
   $i++;  }
?>
     <h5>PERSONAL RECORDS</h5>
<?php


$utente = $_SESSION['utente'];



    $query = "SELECT * FROM classifica WHERE Username = '$utente' ORDER BY Score DESC LIMIT 3";
    
    $t = 1;
    
    $result = mysqli_query($db_server , $query);
    while($row= mysqli_fetch_array($result, MYSQLI_ASSOC)){
  
  
  
?> 

 <div id="classificapersonale">

    <a><?php echo "$t"?>
    <?php echo $row['Username']?>
    <?php echo $row['Score']?>
    
    </a>
    
    </div>

<?php
  $t++;    }

} 
?>
<input type="submit" id="entra" class="tasti" name="playagain" value="Play Again" onclick="play_again()">
   <input type="submit" id="entra" class="tasti" name="gotohome" value=" Go to Home" onclick="go_to_home()">

</div>
</div>




<footer>
	<p>All rights riserved.<br>Project Web and Multimedia 2019-20.<a href="../infoproject.pdf"> Info project</a></p>
</footer>

<script type="text/javascript" src="../js/gameover.js"></script>

</body>
</html>