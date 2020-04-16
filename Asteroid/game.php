<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="utf-8">
  <meta name="viewport" content="width=device-width, user-scalable=no,
initial-scale=1.0">
  <title>Asteroid Game</title>
  <link rel="stylesheet" type="text/css" href="css/homepage.css">
  <link rel="stylesheet" type="text/css" href="css/mainpage.css">
  <link rel="stylesheet" type="text/css" href="css/login.css">
  <link rel="stylesheet" type="text/css" href="css/signin.css">
  <link rel="stylesheet" type="text/css" href="css/game.css">
  
</head>
<body onkeydown="move(event)">
  <header> 
<div class="titolo">  
<h1>Asteroid</h1>
</div>
</header>



<div id="content2">

<div id="homegame">
<canvas id="canvas" style="visibility: hidden;"></canvas>
<div id="speak" style="width: 100%; height: 100%;visibility: visible;background: rgba(255, 255, 255,.2); position: absolute; top: 0;left: 0;">
  <p>Speak Recognition</p>
  <input type="submit" id="entra" class="tasti" name="invia" value="Yes" onclick="speak_recognition('yes')">
   <input type="submit" id="entra" class="tasti" name="invia" value="No" onclick="speak_recognition('no')">
  
</div>
<div id="areagame" style="float: right; visibility: hidden;">
<?php
    include('php/database.php');
    if (isset($_SESSION['loggato'])){

?> 
<a style="color: red"><?php 
echo $_SESSION['utente'];


?></a> 

<form name="gameover" action="php/classifica.php" method="post">
<input type="text" name="ajax_php"  id="score_php"><br>
<input type="submit"  name="ranking" class="tasti" value="Ranking"><br>
<input type="submit" name="rematch" class="tasti" value= "Play Again"><br>
<input type="button" name="playmusic" class="tasti" id="buttonplay" value= "Stop Music" onclick="sound_game('stop')">

</form>

<?php 
}
?> 


</div>

<audio id="music" src="music/game_music.mp3" type="audio/mpeg" loop></audio>
<audio id="gameover_music" src="music/gameover.mp3" type="audio/mpeg"></audio>
<audio id="coin_music" src="music/sound_coin.wav" type="audio/wav"></audio>



</div>
</div>

<footer>
  <p>All rights riserved.<br>Project Web and Multimedia 2019-20.<a href="infoproject.pdf"> Info project</a></p>
</footer>



<script type="text/javascript" src="js/game.js"></script>




</body>
</html>