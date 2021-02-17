//LINK THE KEYBOARD WITH THE PAD
window.onkeydown = function (event) {
  if (event.keyCode == 65) {
    document.getElementById("kick").play();
  }
  if (event.keyCode == 90) {
    document.getElementById("kick-2").play();
  }
  if (event.keyCode == 69) {
    document.getElementById("snare").play();
  }
  if (event.keyCode == 82) {
    document.getElementById("snap").play();
  }
  if (event.keyCode == 84) {
    document.getElementById("rim-1").play();
  }
  if (event.keyCode == 89) {
    document.getElementById("clap").play();
  }
  if (event.keyCode == 85) {
    document.getElementById("snare-2").play();
  }
  if (event.keyCode == 73) {
    document.getElementById("vox").play();
  }
  if (event.keyCode == 81) {
    document.getElementById("808").play();
  }
  if (event.keyCode == 83) {
    document.getElementById("open-hat").play();
  }
  if (event.keyCode == 68) {
    document.getElementById("hat").play();
  }
  if (event.keyCode == 70) {
    document.getElementById("hat-2").play();
  }
  if (event.keyCode == 71) {
    document.getElementById("FX1").play();
  }
  if (event.keyCode == 72) {
    document.getElementById("FX2").play();
  }
  if (event.keyCode == 74) {
    document.getElementById("FX3").play();
  }
  if (event.keyCode == 75) {
    document.getElementById("FX4").play();
  }
};

//MY VARIABLE
var score = document.getElementById("score");
const start = document.getElementById("start");
const kick = document.getElementById("kick");
const kickL = document.getElementById("kick-light");
var kick2 = document.getElementById("kick-2");
const snare = document.getElementById("snare");
const snareL = document.getElementById("kick-light");
var snap = document.getElementById("snap");
var rim = document.getElementById("rim-1");
var clap = document.getElementById("clap");
var snare2 = document.getElementById("snare-2");
var vox = document.getElementById("vox");
var bass = document.getElementById("808");
var openhat = document.getElementById("open-hat");
var hat = document.getElementById("hat");
var hat2 = document.getElementById("hat-2");
var fx1 = document.getElementById("FX1");
var fx2 = document.getElementById("FX2");
var fx3 = document.getElementById("FX3");
var fx4 = document.getElementById("FX4");

//Create objet seq 

const seq = {
seq1 :["kick","snare","kick","kick" ], //0
      // 0        1      2    3
seq2 : ["kick", "kick" , "kick"], //1
     //   0       1         2  
}

console.log(seq.seq1[0]);

//check
//index
document.querySelectorAll(".box").forEach(box => {
    box.onclick = (evt) => {
        console.log(evt.target)
        const instrument = box.getAttribute("data-instrument");
        console.log(instrument);
        if (instrument)
        document.getElementById(instrument).play();
        
    }
})

//START BUTTON
console.log(start);
start.onclick = function go(){
  console.log('go');
  start.innerHTML="LET'S GOOOOOOO";
  start.classList.add("stop");
  start.classList.remove("start");
  fx3.play();
  lighting();
}
//SET TiME OUT - CHANGE CLASS OF KICK
function lighting(){
  console.log("function light is called" )
   setTimeout(function(){ console.log("inside setTimeout"); checkStep();kickL.classList.add("light");}, 4000);
  }  
//PERMET DE CHECKER SI SEQ CORRESPOND AU CLICK DU PAD
function checkStep(){
  console.log("function check is called");
  if (kick===seq.seq1[0]){
    console.log("inside if");
    addScore();
  }
  else 
    start.innerHTML="GAME OVER"; 
}    

//var index = 0


//ADDING 1 TO SCORE
function addScore(){
  score.innerHTML +=1;
}
//REMOVE LIGHT KICK 
function stopKickL(){
  kickL.classList.remove("light");
}
// REMOVE LIGHT OF SNARE
function stopSnareL(){
  snareL.classList.remove("light");
}

//ADD LIGHT OF SNARE
function addSnareL(){
  snareL.classList.add("light");
}



  //  kickL.classList.remove("light");
  //  score += 1;
    // setTimeout(function(){console.log("inside setTimeout 2"); snareL.classList.add("light");}, 8000);

// IF USER CLICK SUR KICK < 2000ms= TRUE (score +1 && snare setTimeout)
// IF USER NOT CLICK SUR KICK> 2000ms = FALSE (GAME OVER)

// IF USER CLICK SUR SNARE< 2000ms = TRUE(score +1 &&)
// IF USER NOT CLICK SUR KICK> 2000ms = FALSE (GAME OVER)
// function SecondStep(){
//   if(snare.oneclick===true){
//     score +=1;
//     kick.addEventListener("light", setTimeout);
//     setTimeout(function(){kick.classList.add("light");}, 4000);
//     snare.classList.remove("light");
//   }
//   else (snare.onclick ===false)
//     start.innerHTML="GAME OVER"; 
// }
//LOGIC
//BUTTON PLAY FUNCTION 
//GameRunning()
//SET TIME OUT DU CHANGEMENT DE CLASSE CSS DE KICK DANS 1sec SUITE A CE PREMIER PLAY
//IF USER CLICK SUR KICK AVANT 2sec - TRUE
// TRUE RETURN - +1 SCORE && LIGHT BUTTON SNARE() IN 500MS
//IF USER CLICK SUR KICK APRES 2sec - FALSE
//FALSE RETURN - "GAME OVER" AND SCORE BLOCKED
//LIGHT BUTTON SNARE() = changement de class CSS (lighting)
//IF USER CLICK SUR SNARE AVANT 2 SEC - TRUE
// TRUE RETURN - +1 SCORE && LIGHT BUTTON HAT() IN 500MS
//IF USER CLICK SUR SNARE APRES 2sec - FALSE
//FALSE RETURN - GAME OVER AND SCORE BLOCKED

  
// function lighting(callback){
//  //if(start.classList.contains("stop")){
//   start.addEventListener("click, setTimeout")
//   callback()
//    setTimeout(function(){ alert("Hello"); }, 3000);
//  }




//var starting = function gameRunning(){

//}


// start.addEventListener('click', () =>{
//   if (start.classList.contains("start")){
//     start.innerHTML="STOP"
//     start.classList.add("stop")
//   }
// })

// function letstart(){
//   if (start.onclick) {
//     return "lol";

//   } 

// }

// function GameRunning(){
//     start.addEventListener("click, setTimeout")
//     setTimeout(function(){ alert("Hello"); }, 3000);
// }
 








//var score = Number
//let kick = function play(){document.getElementById('kick').play()}
//var kick = document.getElementById('kick').addEventListener("click", setTimeout);
//setTimeout(function(){ 
   // kick.classList.add("stop");
//}, 1000);
// const kick = document.getElementById('kick');
// function play() { 
//  kick.play();
// } 
//onclick="document.getElementById('rim 1').play()"

//function play(){
//    kick.play();
//    return "lol"
//}
//var Snare = document.getElementById('Snare').play()
//var snap = document.getElementById('snap').play()

//var FX = document.getElementById('FX1').play()
//let kick = function(){document.getElementById("kick").play()}
//var vid = document.getElementById("kick"); 
//function play() { 
//    vid.play(); 
//  }

// const MidiParser = window.Midi;

// const noteToInstrument = {
//   C4: 'kick-box',
  
// }

// async function parseMidiFile() {
//   const midi = await MidiParser.fromUrl("../seq.mid");
//   const track = midi.tracks[0];
//   const notes = track.notes

//   function readNote(notes, noteNumber) {
//     if (notes.length - 1 < noteNumber) {
//       return;
//     }
//     document.getElementById(noteToInstrument[notes[noteNumber].name]).style.backgroundColor = "red";
//     setTimeout(() => {
//       document.getElementById(noteToInstrument[notes[noteNumber].name]).style.backgroundColor = "grey";
//       setTimeout(() => {
//         readNote(notes, noteNumber + 1)
//       }, 200)
//     }, notes[noteNumber].duration * 1000)
//   }
//   readNote(notes, 0);
// }
// parseMidiFile()
//        kick.addEventListener("click", setTimeout){
//            setTimeout(){
//                kick.classList.add("stop");}, 1000);
//        }
//    }

// let midiParser  = require('midi-parser-js');
// let fs = require('fs')
// // read a .mid binary (as base64)
// fs.readFile('seq.mid', 'base64', function (err,data) {
//   // Parse the obtainer base64 string ...
//   const midiArray = midiParser.parse(data);
//   // done!
//   console.log(midiArray);
// });

//onclick=document.getElementById('kick').play()