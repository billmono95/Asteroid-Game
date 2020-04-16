var blur_home = 9;
var clock_home;
var text;
function updatehome(){

text = document.getElementsByTagName("p")[0];

text.style.filter = "blur("+blur_home+"px)";

blur_home = blur_home-0.25;


if (blur_home <= -1) {

  clearInterval(clock_home);

 
}


}  



function home_animation(){


    
clock_home =  setInterval("updatehome()",50);

}



var recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition || window.mozSpeechRecognition || window.msSpeechRecognition)();
recognition.lang = 'en-US';
recognition.continuous = true;

recognition.onend = function() {

    recognition.start();

}



recognition.onresult = function(event) {

    var current = event.resultIndex;

    var transcript = event.results[current][0].transcript;
    
    console.log('You said: ', transcript);

    if (transcript == 'game' || transcript == ' '+'game') {

 
       window.location.assign("game.php");
    }
     
     if (transcript == 'login' || transcript == ' '+'login' ) {

       window.location.assign("php/login.php");
    }
  
     if (transcript == 'home' || transcript == ' '+'home' ) {

       window.location.assign("php/logout.php");
    }


}

recognition.start();

function entry_game(){


window.location.assign("game.php");


}

function entry_login(){


window.location.assign("php/login.php");


}

function quit(){


window.location.assign("php/logout.php");


}

