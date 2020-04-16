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

       window.location.assign("../game.php");
    }
     
     if (transcript == 'home' || transcript == ' '+'home') {

       window.location.assign("../home.php");
    }
  
  


}

recognition.start();
function play_again(){


window.location.assign("../game.php");


}

function go_to_home(){


window.location.assign("../home.php");


}
