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
  <link rel="stylesheet" type="text/css" href="../css/signin.css">
</head>
<body>


	<?php
	         include('database.php');
			if(isset($_GET['err'])){
				
	              $errore="Username and password don't match";
?>		
		
<?php		
    	}  else   $errore="";
         
?>
<header> 
<div class="titolo">  
<h1>Asteroid</h1>
</div>
</header>

<div class="content">

<div id="home4">
	
	<nav class="menulogin">
		<ul>
			<li><a href="login.php">Login</a></li><li><a href="signin.php">Signin</a>
		</ul>
	</nav>


 <h1>I'm already a Asteroid player</h1> 

<p>Insert your username and password to log in.</p>


<form name="login" action="loginproc.php" method="post">	

<label>
	
<input type="text" id="username" name="username" placeholder="User" >
</label> <br>
<label>
	
<input type="password"  id="password" name="password" placeholder="Password">
</label> <br>
                                                            
<input type="submit" id="tastiaccedi" class="tasti" name="accedi" onclick="return validate();" value="Enter">
<p id="errorlogin"></p>   
</form>

<p style="color: red"><?php echo $errore ?></p>
</div>
</div>


<footer>
  <p>All rights riserved.<br>Project Web and Multimedia 2019-20.<a href="../infoproject.pdf"> Info project</a></p>
</footer>


<script type="text/javascript" src="../js/login.js"></script>



</body>
</html>
