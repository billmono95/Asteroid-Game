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
	$erroreu="";
	if(isset($_GET['erru'])){
		$erroreu="Username already in use";
	
	
	
?>
<?php		
    	}  else   $erroreu="";
         
?>
<header> 
<div class="titolo">  
<h1>Asteroid</h1>
</div>
</header>

<div class="content">

<div id="home5">

<nav class="menulogin">
		<ul>
			<li><a href="login.php">Login</a></li><li><a href="signin.php">Signin</a>
		</ul>
</nav>

	<h1>Signin</h1>

<p>Insert all the data to complete the registration process</p>

<form name="signin" id="signin" action="signinproc.php"   method="post">
<label>
	

<input type="text" name="nome" id="nome" placeholder="Name" pattern="[a-zA-Z\s]+">
</label><br>	

<label>
	

<input type="text" name="cognome" id="cognome" placeholder="Surname" pattern="[a-zA-Z\s]+" >
</label><br>	

<label>
  

<input type="text" name="username"  id="username" placeholder="Username" pattern="[a-zA-Z\s]+" >
</label><br>

<label>
 

<input type="password" name="password" id="pass" placeholder="Password"  >
</label><br> 

<label>
	 
<input type="password" name="confermapassword"  id="confermapassword" placeholder="Confirm password"  >
	
</label><br>

	
<p style="color: red"><?php echo $erroreu ?></p>
<p id="errorsign"></p>	

<input type="submit" class="tasti" id="accedi" name="accedi" onclick ="return register();" value="signin" >
    
</form>
</div>

</div>

<footer>
  <p>All rights riserved.<br>Project Web and Multimedia 2019-20.<a href="../infoproject.pdf"> Info project</a></p>
</footer>

<script type="text/javascript" src="../js/signin.js">

</script>
</body>
</html>
