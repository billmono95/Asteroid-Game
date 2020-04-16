var letters = new Array();


for (var i = 0; i  <8; i++) {
	letters[i]  = document.getElementsByTagName("li")[i];
	
}


var blur_mode = 9;
var clock;

function update(){

for (var i = 0; i<8; i++) {
	
	
	letters[i].style.filter = "blur("+blur_mode+"px)";
	
}
blur_mode = blur_mode-0.25;


if (blur_mode <= -1) {

	clearInterval(clock);
	window.location.assign("home.php");
 
}

}

function animation(){


    
clock =  setInterval("update()",50);

}
