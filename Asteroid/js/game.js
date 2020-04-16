           var canvas = document.getElementById("canvas");
           var score_php = document.getElementById("score_php");
           var canvasdisp = document.getElementById("canvas");
           var areadisp = document.getElementById("areagame");
           var speak = document.getElementById("speak");
           canvas.width = 700;
           canvas.height = 600;
           canvas.style.border = "1px solid black";
           var ctx = canvas.getContext("2d");
           var imm1 = new Image();
           var imm2 = new Image();
           var imm3 = new Image();
           var imm4 = new Image();
           var enemy = new Image();
           var space1 = new Image();
           var sound;
           var sound_coin;
           var sound_gameover;
           var space3 = new Image();
           var space4 = new Image();
           var coin = new Image();
           var coin2 = new Image();
           var spaceclock = new Image();
           var diamond = new Image();
           diamond.src = "img_game/diamond.png"
           spaceclock.src = "img_game/time2.png";
           coin.src = "img_game/coin.png";
           coin2.src = "img_game/redcoin.png";
           space1.src = "img_game/space1.jpg";
           space3.src = "img_game/space3.jpg";
           space4.src = "img_game/space4.jpg";
           imm1.src = "img_game/spaceship.png";
           imm2.src = "img_game/spaceship2.png";
           imm3.src = "img_game/spaceship3.png";
           imm4.src = "img_game/spaceship4.png";
           enemy.src = "img_game/asteroidi.png";
           var score = 0;
           var pos_x = 300;
           var pos_y = 500;
           var dim_x = 90;
           var dim_y = 10;
           var x_enemy_position = [0, 0, 0, 0, 0, 0, 0];
           var y_enemy_position = [50, 50, 50 , 50 , 50 ,50 ,50];
           var dim_enemy_x = 60;
           var dim_enemy_y = 60;
           var x_coin_position = [0, 0, 0, 0, 0, 0, 0];
           var y_coin_position = [50, 50, 50 , 50 , 50 ,50 ,50];
           var dim_coin_x = 30;
           var dim_coin_y = 30;
           var MAX_LIMIT = 640;
           var MIN_LIMIT = 0;
           var random = 0;
           var clock;
           var random_y = [0, 0, 0, 0, 0, 0, 0];
           var time = 0;
           var game = true;
           var contenitore = new Array();
           var object = new Array();
           var box_imm = new Array();
           var random_object = [0, 0, 0, 0, 0, 0, 0];
           var features = [0, 0, 0, 0, 0, 0, 0];
           var myReq;
           var speed = 2;
           var block = false;
           var control;
           var randomship = 0;
           var lose = false;
           var buttonplay = document.getElementById("buttonplay");
           var buttonstop = document.getElementById("buttonstop");

	         contenitore =[0,space1,space3,space3,space4];
           box_imm = [imm1,imm2,imm3,imm4];

           randomship = Math.floor(Math.random()*4);

     //ARRAY CONTENENTE GLI ELEMENTI DEL GIOCO CON PROBABILITA DIVERSA DI ESSERE PESCATI
        function full_object(){

        for (var i = 0; i < 40; i++) {

          object[i] = coin;
               }

       for (var i =40; i < 47; i++) {

          object[i] = coin2;
               }

        for (var i =47; i < 49; i++) {

          object[i] = spaceclock;

               } 

        for (var i =49; i < 51; i++) {

          object[i] = diamond;

               }              


        }

//VIENE RIEMPITO L'ARRAY RANDOM_OBJECT CON GLI ELEMENTI DELL' ARRAY CONTENENTE GLI ELEMENTI DEL GIOCO , PRESI IN MANIERA RANDOM

        function random_choice(){

        for (var i = 0;i< random_object.length;i++){
          random =   Math.floor(Math.random()*50);

          if (random < 40) {

            features[i] = 1;
          }

          if ( random >= 40 ) {

            features[i] = 2;
          }
          
           if ( random >= 47 ) {

            features[i] = 3;
          }   

           if ( random >= 49 ) {

            features[i] = 4;
          } 

         random_object[i] = object[random];
        
           } 


        }

        //FUNZIONE CHE ABILITA O DISABILITA LA MUSICA NEL GIOCO 
  
       sound = document.getElementById("music");

       function sound_game(control){

        
        if (control == 'stop'){

           sound.pause();
          
         }else{

         sound.play(); 
      
      }
    }

	     

        bg = Math.floor(Math.random()*4)+1;

       //FUNZIONE CHE ASSEGNA IN MANIERA CASUALE LA POSIZIONE X E Y DEI NEMICI
        function enemy_position(){
        
        for (var i = 0;i<x_enemy_position.length;i++){
          random =   Math.floor(Math.random()*640)+1;
         x_enemy_position[i] = random;
        
           }   

         for (var i = 0;i<y_enemy_position.length;i++){
          random =   Math.floor(Math.random()*15)+2;
        y_enemy_position[i] = random;
        
           }     

        }

        //FUNZIONE CHE ASSEGNA IN MANIERA CAUSUALE LA POSIZIONE X E Y DELLE MONETE    
         
         function coin_position(){
        
        for (var i = 0;i<x_coin_position.length;i++){
          random =   Math.floor(Math.random()*640)+1;
         x_coin_position[i] = random;
        
           }   

         for (var i = 0;i<y_coin_position.length;i++){
          random =   Math.floor(Math.random()*55)+25;
        y_coin_position[i] = random;
        
           }     

        }
           function random_coin(){
          for (var i = 0;i<x_coin_position.length;i++){
          random_y[i] =   Math.floor(Math.random()*170)+120;
         
             }        
           } 


          
        //AGGIORNAMENTO DELLA POSIZIONE DEI NEMICI

        function enemy_update_cordinate(){

          ctx.drawImage(enemy,x_enemy_position[0],y_enemy_position[0],dim_enemy_x,dim_enemy_y);
          y_enemy_position[0] = y_enemy_position[0]+speed;
          if(y_enemy_position[0] > 150){
          	ctx.drawImage(enemy,x_enemy_position[1],y_enemy_position[1],dim_enemy_x,dim_enemy_y);
          	y_enemy_position[1] = y_enemy_position[1]+speed;{
          		if(y_enemy_position[1] > 150){
          	ctx.drawImage(enemy,x_enemy_position[2],y_enemy_position[2],dim_enemy_x,dim_enemy_y);
          	y_enemy_position[2] = y_enemy_position[2]+speed;{
          	 	if(y_enemy_position[2] > 150){
          	ctx.drawImage(enemy,x_enemy_position[3],y_enemy_position[3],dim_enemy_x,dim_enemy_y);
          	y_enemy_position[3] = y_enemy_position[3]+speed;{
          		if(y_enemy_position[3] > 150){
          	ctx.drawImage(enemy,x_enemy_position[4],y_enemy_position[4],dim_enemy_x,dim_enemy_y);
          	y_enemy_position[4] = y_enemy_position[4]+speed;
          	if(y_enemy_position[4] > 150){
          	ctx.drawImage(enemy,x_enemy_position[5],y_enemy_position[5],dim_enemy_x,dim_enemy_y);
          	y_enemy_position[5] = y_enemy_position[5]+speed;
            if(y_enemy_position[5] > 150){
          	ctx.drawImage(enemy,x_enemy_position[6],y_enemy_position[6],dim_enemy_x,dim_enemy_y);
          	y_enemy_position[6] = y_enemy_position[6]+speed;
          	if(y_enemy_position[6] > 550){

                 x_enemy_position = [0, 0, 0, 0, 0, 0, 0];
                 y_enemy_position = [50, 50, 50 , 50 , 50 ,50 ,50];

                 enemy_position();
          	
                    }
                   }
          	      }
          	     }
          	    }
               }
              }
             }
            }
           }   
          }

      //AGGIORNAMENTO DELLA POSIZIONE DELLE MONETE

      function coin_update_cordinate(){

          ctx.drawImage(random_object[0],x_coin_position[0],y_coin_position[0],dim_coin_x,dim_coin_y);
          y_coin_position[0] = y_coin_position[0]+speed;
          if(y_coin_position[0] > random_y[0]){

          	ctx.drawImage(random_object[1],x_coin_position[1],y_coin_position[1],dim_coin_x,dim_coin_y);
          	y_coin_position[1] = y_coin_position[1]+speed;{
          		if(y_coin_position[1] > random_y[1]){
          	ctx.drawImage(random_object[2],x_coin_position[2],y_coin_position[2],dim_coin_x,dim_coin_y);
          	y_coin_position[2] = y_coin_position[2]+speed;{

          	 	if(y_coin_position[2] > random_y[2]){
          	ctx.drawImage(random_object[3],x_coin_position[3],y_coin_position[3],dim_coin_x,dim_coin_y);
          	y_coin_position[3] = y_coin_position[3]+speed;{
          		if(y_coin_position[3] > random_y[3]){
          	ctx.drawImage(random_object[4],x_coin_position[4],y_coin_position[4],dim_coin_x,dim_coin_y);
          	y_coin_position[4] = y_coin_position[4]+speed;
          	if(y_coin_position[4] > random_y[4]){
          	ctx.drawImage(random_object[5],x_coin_position[5],y_coin_position[5],dim_coin_x,dim_coin_y);
          	y_coin_position[5] = y_coin_position[5]+speed;
            if(y_coin_position[5] > random_y[5]){
          	ctx.drawImage(random_object[6],x_coin_position[6],y_coin_position[6],dim_coin_x,dim_coin_y);
          	y_coin_position[6] = y_coin_position[6]+speed;
          	if(y_coin_position[6] > 570){

                 x_coin_position = [0, 0, 0, 0, 0, 0, 0];
                 y_coin_position = [50, 50, 50 , 50 , 50 ,50 ,50];
                 random_choice();
                 random_coin();
                 coin_position();
          	
                    }
                   }
          	      }
          	     }
          	    }
               }
              }
             }
            }
           }  
          }


     //FUNZIONE DI COLLISIONE PER I NEMICI    

        
        function enemy_collision(){

        
         if((x_enemy_position[0] + dim_enemy_x / 2 > pos_x && x_enemy_position[0] +dim_enemy_x / 2 < pos_x + dim_x)){
         if (y_enemy_position[0] + dim_enemy_y/2 > pos_y && y_enemy_position[0] < pos_y + dim_enemy_y){
                cancelAnimationFrame(myReq); 
               myReq = undefined;

               pos_x = -300000;
               pos_y = -400000;
                 block = true;
                 lose = true;
              

                 sound.pause();

                 sound_gameover = document.getElementById("gameover_music"); 
                 sound_gameover.play();
               
            
              }
             }
        

         if ((x_enemy_position[1] + dim_enemy_x / 2 > pos_x && x_enemy_position[1] +dim_enemy_x / 2 < pos_x + dim_x)){
        if (y_enemy_position[1] + dim_enemy_y/2 > pos_y && y_enemy_position[1] < pos_y + dim_enemy_y){

                  cancelAnimationFrame(myReq); 
               myReq = undefined;

              
               pos_x = -300000;
               pos_y = -400000;
               block = true;
               lose = true;
               sound.pause();
               sound_gameover = document.getElementById("gameover_music"); 
                 sound_gameover.play();
             
              }
             }
          

         if ((x_enemy_position[2] + dim_enemy_x / 2 > pos_x && x_enemy_position[2] +dim_enemy_x / 2 < pos_x + dim_x)){
        if (y_enemy_position[2] + dim_enemy_y/2 > pos_y && y_enemy_position[2] < pos_y + dim_enemy_y){

                  cancelAnimationFrame(myReq); 
               myReq = undefined;

                pos_x = -300000;
               pos_y = -400000;
                block = true;
                lose = true;
                 sound.pause();
                 sound_gameover = document.getElementById("gameover_music"); 
                 sound_gameover.play();
            
              }
             }
         

         if ((x_enemy_position[3] + dim_enemy_x / 2 > pos_x && x_enemy_position[3] +dim_enemy_x / 2 < pos_x + dim_x)){
        if (y_enemy_position[3] + dim_enemy_y/2 > pos_y && y_enemy_position[3] < pos_y + dim_enemy_y){

                 cancelAnimationFrame(myReq); 
               myReq = undefined;

                pos_x = -300000;
               pos_y = -400000;
                block = true;
                lose = true;
                 sound.pause();
                 sound_gameover = document.getElementById("gameover_music"); 
                 sound_gameover.play();
           
              }
             }


         if ((x_enemy_position[4] + dim_enemy_x / 2 > pos_x && x_enemy_position[4] +dim_enemy_x / 2 < pos_x + dim_x)){
        if (y_enemy_position[4] + dim_enemy_y/2 > pos_y && y_enemy_position[4] < pos_y + dim_enemy_y){

                  cancelAnimationFrame(myReq); 
               myReq = undefined;

                pos_x = -300000;
               pos_y = -400000;
                block = true;
                lose = true;
                 sound.pause();
                 sound_gameover = document.getElementById("gameover_music"); 
                 sound_gameover.play();
               
              }
             }
                      
           
         if ((x_enemy_position[5] + dim_enemy_x / 2 > pos_x && x_enemy_position[5] +dim_enemy_x / 2 < pos_x + dim_x)){
        if (y_enemy_position[5] + dim_enemy_y/2 > pos_y && y_enemy_position[5] < pos_y + dim_enemy_y){

                cancelAnimationFrame(myReq); 
               myReq = undefined;

               pos_x = -300000;
               pos_y = -400000;
                block = true;
                lose = true;
                 sound.pause();
                 sound_gameover = document.getElementById("gameover_music"); 
                 sound_gameover.play();
                 
              }
             }

          
         if ((x_enemy_position[6] + dim_enemy_x / 2 > pos_x && x_enemy_position[6] +dim_enemy_x / 2 < pos_x + dim_x)){
        if (y_enemy_position[6] + dim_enemy_y/2 > pos_y && y_enemy_position[6] < pos_y + dim_enemy_y){

                  cancelAnimationFrame(myReq); 
               myReq = undefined;

                pos_x = -300000;
               pos_y = -400000;
                block = true;
                lose = true;
                 sound.pause();
                 sound_gameover = document.getElementById("gameover_music"); 
                 sound_gameover.play();
              
              }
             }   

        }


        //FUNZIONE DI COLLISIONE PER LE MONETE
        function coin_collision(){

         if ((x_coin_position[0] + dim_coin_x / 2 > pos_x && x_coin_position[0] +dim_coin_x / 2 < pos_x + dim_x)){
        if (y_coin_position[0] + dim_coin_y/2 > pos_y && y_coin_position[0] < pos_y + dim_coin_y){
                 
                 if (no_sound == 0) {
                 sound_coin = document.getElementById("coin_music"); 
                 sound_coin.play();
                }

                 if (features[0] == 1) {
                  
                  score++;
                 } 
                 if (features[0] == 2) {
                  
                  score+=5;
                 }

                 if (features[0] == 3) {
                  
                   
                   random =   Math.floor(Math.random()*10)+1;
                  if (random >= 9) {
                   
                   time = time/2 - 1000;

                   if (time <= 0) {

                    time = 300;
                   }

                  }else{

                    time = time*2 + 1000;
                  }
                 }

                 if (features[0] == 4) {
                  
                  score+=50;
                 }

                 
                 x_coin_position[0] = -200;
                  
              }
             } 

         if ((x_coin_position[1] + dim_coin_x / 2 > pos_x && x_coin_position[1] +dim_coin_x / 2 < pos_x + dim_x)){
        if (y_coin_position[1] + dim_coin_y/2 > pos_y && y_coin_position[1] < pos_y + dim_coin_y){
                
                  if (no_sound == 0) {
                 sound_coin = document.getElementById("coin_music"); 
                 sound_coin.play();
                }
                 
                  if (features[1] == 1) {
                  
                  score++;
                 } 
                 if (features[1] == 2) {
                  
                  score+=5;
                 }

                 if (features[1] == 3) {
                  
                    
                   random =   Math.floor(Math.random()*10)+1;
                  if (random >= 9) {
                   
                   time = time/2 - 1000;

                   if (time <= 0) {

                    time = 300;
                   }

                  }else{

                    time = time*2 + 1000;
                  }
                 }

                 if (features[1] == 4) {
                  
                  score+=50;
                 }



                 x_coin_position[1] = -200;
                  
              }
             } 
             
          if ((x_coin_position[2] + dim_coin_x / 2 > pos_x && x_coin_position[2] +dim_coin_x / 2 < pos_x + dim_x)){
        if (y_coin_position[2] + dim_coin_y/2 > pos_y && y_coin_position[2] < pos_y + dim_coin_y){
                 
                 if (no_sound == 0) {
                 sound_coin = document.getElementById("coin_music"); 
                 sound_coin.play();
                }
                 
                 if (features[2] == 1) {
                  
                  score++;
                 } 
                 if (features[2] == 2) {
                  
                  score+=5;
                 }

                 if (features[2] == 3) {
                  
                   
                   random =   Math.floor(Math.random()*10)+1;
                  if (random >= 9) {
                   
                   time = time/2 - 1000;

                   if (time <= 0) {

                    time = 300;
                   }

                  }else{

                    time = time*2 + 1000;
                  }
                 }

                 if (features[2] == 4) {
                  
                  score+=50;
                 }


                 x_coin_position[2] = -200;
                  
              }
             } 
         
         if ((x_coin_position[3] + dim_coin_x / 2 > pos_x && x_coin_position[3] +dim_coin_x / 2 < pos_x + dim_x)){
        if (y_coin_position[3] + dim_coin_y/2 > pos_y && y_coin_position[3] < pos_y + dim_coin_y){
                 
                 if (no_sound == 0) {
                 sound_coin = document.getElementById("coin_music"); 
                 sound_coin.play();
                }

                 if (features[3] == 1) {
                  
                  score++;
                 } 
                 if (features[3] == 2) {
                  
                  score+=5;
                 }

                 if (features[3] == 3) {
                   
                   random =   Math.floor(Math.random()*10)+1;
                  if (random >= 9) {
                   
                   time = time/2 - 1000;

                   if (time <= 0) {

                    time = 300;
                   }

                  }else{

                    time = time*2 + 1000;
                  }
                 }

                 if (features[3] == 4) {
                  
                  score+=50;
                 }


                 x_coin_position[3] = -200;
                  
              }
             } 
         if ((x_coin_position[4] + dim_coin_x / 2 > pos_x && x_coin_position[4] +dim_coin_x / 2 < pos_x + dim_x)){
        if (y_coin_position[4] + dim_coin_y/2 > pos_y && y_coin_position[4] < pos_y + dim_coin_y){
                 
                 if (no_sound == 0) {
                 sound_coin = document.getElementById("coin_music"); 
                 sound_coin.play();
                }

                 if (features[4] == 1) {
                  
                  score++;
                 } 
                 if (features[4] == 2) {
                  
                  score+=5;
                 }

                 if (features[4] == 3) {
                  
                    
                   random =   Math.floor(Math.random()*10)+1;
                  if (random >= 9) {
                   
                   time = time/2 - 1000;

                   if (time <= 0) {

                    time = 300;
                   }

                  }else{

                    time = time*2 + 1000;
                  }
                 }

                 if (features[4] == 4) {
                  
                  score+=50;
                 }


                 x_coin_position[4] = -200;
                  
              }
             } 
             
          if ((x_coin_position[5] + dim_coin_x / 2 > pos_x && x_coin_position[5] +dim_coin_x / 2 < pos_x + dim_x)){
        if (y_coin_position[5] + dim_coin_y/2 > pos_y && y_coin_position[5] < pos_y + dim_coin_y){
                 
                 if (no_sound == 0) {
                 sound_coin = document.getElementById("coin_music"); 
                 sound_coin.play();
                }
                 
                 if (features[5] == 1) {
                  
                  score++;
                 } 
                 if (features[5] == 2) {
                  
                  score+=5;
                 }

                 if (features[5] == 3) {
                  
                   random =   Math.floor(Math.random()*10)+1;
                  if (random >= 9) {
                   
                   time = time/2 - 1000;

                   if (time <= 0) {

                    time = 300;
                   }

                  }else{

                    time = time*2 + 1000;
                  }
                 }

                 if (features[5] == 4) {
                  
                  score+=50;
                 }


                 x_coin_position[5] = -200;
                  
              }
             } 
          
          if ((x_coin_position[6] + dim_coin_x / 2 > pos_x && x_coin_position[6] +dim_coin_x / 2 < pos_x + dim_x)){
        if (y_coin_position[6] + dim_coin_y/2 > pos_y && y_coin_position[6] < pos_y + dim_coin_y){

              if (no_sound == 0) {
                 sound_coin = document.getElementById("coin_music"); 
                 sound_coin.play();
                }
                 if (features[6] == 1) {
                  
                  score++;
                 } 
                 if (features[6] == 2) {
                  
                  score+=5;
                 }

                 if (features[6] == 3) {
                  
                  
                   random =   Math.floor(Math.random()*10)+1;
                  if (random >= 9) {
                   
                   time = time/2 - 1000;

                   if (time <= 0) {

                    time = 300;
                   }

                  }else{

                    time = time*2 + 1000;
                  }
                  
                 }

                 if (features[6] == 4) {
                  
                  score+=50;
                 }


                 x_coin_position[6] = -200;
                  
              }
             }                        
        }


       //FUNZIONE CHE AUMENTA LA DIFFICOLTA DEL GIOCO A SECONDA DEL TEMPO TRASCORSO    

        function difficulty(){
        if (no_sound == 1) {
       
          speed = 1;

        }

        if (no_sound == 0) {
         if (time > 300) {

          speed = 3;
        }
        
        if (time > 600) {

          speed = 4;
        }

        if (time > 1200) {

          speed = 5;
        }

        
        if (time > 2400) {

          speed = 6;
        }

        if (time > 5000) {

          speed = 6.7;
        }

         if (time > 10000) {

          speed = 7;
        }

        if (time > 15000) {

          speed = 8;
        }

  
        if (time > 20000) {

          speed = 9;
        }
       
       }

        }





      





        //INTERAZIONE CON IL CANVAS

        function draw(){

     

         ctx.clearRect(0,0,canvas.width,canvas.height);
        
         ctx.drawImage(contenitore[bg],0,0,canvas.width,canvas.height);  
         ctx.drawImage(box_imm[randomship],pos_x,pos_y,60,60);
         enemy_update_cordinate();
         coin_update_cordinate();
         enemy_collision();
         coin_collision();
         difficulty();
         score_php.value = score;
         ctx.font = ' 35px arial';
          ctx.fillStyle = 'white';
          ctx.fillText('Score:'+score, 50, 50); 

          if (lose == true) {

               ctx.font = ' 85px verdana';
                 ctx.fillStyle = 'red';
                 ctx.fillText('GAME OVER', 100, 300); 
         

          }
         
         
         //console.log(score);
         myReq = requestAnimationFrame(draw);
         
         time++;
         //console.log(time);
         
       

        }
          


     //MOVIMENTO DELLA NOSTRA NAVICELLA
		 function move(e){
        
           if (block == false){ 

          if(e.keyCode == 37){

          	

            pos_x  = pos_x -30;
            if(pos_x <= MIN_LIMIT){
            	pos_x = MIN_LIMIT;
            }
            ctx.drawImage(box_imm[randomship],pos_x,pos_y,60,60);
            
          }
       
         
       
           if(e.keyCode == 39){

          	
            pos_x  = pos_x+30;
            if(pos_x >= MAX_LIMIT){
            	pos_x = MAX_LIMIT;
            }
            ctx.drawImage(box_imm[randomship],pos_x,pos_y,60,60);
          }
       
          
         }
         
		 }


var check;
var no_sound;

var recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition || window.mozSpeechRecognition || window.msSpeechRecognition)();
recognition.lang = 'en-US';
recognition.continuous = true;

function speak_recognition(check){

if (check == 'yes') {

speak.style.visibility = "hidden";
no_sound = 1;
block = true;
canvasdisp.style.visibility = "visible";
areadisp.style.visibility = "visible";
full_object();
random_choice();
random_coin();
coin_position();
enemy_position();
difficulty();
draw();


}if (check == 'no') {


speak.style.visibility = "hidden";
no_sound = 0;
canvasdisp.style.visibility = "visible";
areadisp.style.visibility = "visible";

 sound_game('music');
 
full_object();
random_choice();
random_coin();
coin_position();
enemy_position();
difficulty();
draw();
  
}



}



recognition.onend = function() {

  

    recognition.start();

}



recognition.onresult = function(event) {

    var current = event.resultIndex;

    var transcript = event.results[current][0].transcript;
    
    console.log('You said: ', transcript);

    if (transcript == 'left' || transcript == ' '+'left') {

       if (block == true) {
            pos_x  = pos_x -30;
            if(pos_x <= MIN_LIMIT){
              pos_x = MIN_LIMIT;
            }
            ctx.drawImage(box_imm[randomship],pos_x,pos_y,60,60);

           } 
    }
     
     if (transcript == 'right' || transcript == ' '+'right' ) {

            if (block == true) {
             pos_x  = pos_x+30;
            if(pos_x >= MAX_LIMIT){
              pos_x = MAX_LIMIT;
            }
            ctx.drawImage(box_imm[randomship],pos_x,pos_y,60,60);

          }  

    }
     
      if (transcript == 'yes' || transcript == ' '+'yes' ) {

     speak_recognition('yes');

    }
  
     if (transcript == 'no' || transcript == ' '+'no' ) {

     speak_recognition('no');    

    }
  
    if (transcript == 'stop' || transcript == ' '+'stop' ) {

    
      sound_game('stop');

     }

     if (transcript == 'ranking' || transcript == ' '+'ranking' ) {

    
      window.location.assign("php/gameover.php");

     }

      if (transcript == 'game' || transcript == ' '+'game' ) {

    
      window.location.assign("game.php");

     }

}

recognition.start();






