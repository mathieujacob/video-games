//MY VARIABLE
var score = document.getElementById("score");
const start = document.getElementById("start");
const kick = document.getElementById("kick");
const kickL = document.getElementById("kick-light");
const kick2 = document.getElementById("kick-2");
const kick2L = document.getElementById("kick2-light");
const snare = document.getElementById("snare");
const snareL = document.getElementById("snare-light");
const snap = document.getElementById("snap");
const snapL = document.getElementById("snap-light");
const rim = document.getElementById("rim-1");
const rimL = document.getElementById("rim-light");
const clap = document.getElementById("clap");
const clapL = document.getElementById("clap-light");
const snare2 = document.getElementById("snare-2");
const snare2L = document.getElementById("snare2-light");
const vox = document.getElementById("vox");
const voxL = document.getElementById("vox-light");
const bass = document.getElementById("808");
const bassL = document.getElementById("808-light");
const openhat = document.getElementById("open-hat");
const openhatL = document.getElementById("open-hat-light");
const hat = document.getElementById("hat");
const hatL = document.getElementById("hat-light");
const hat2 = document.getElementById("hat-2");
const hat2L = document.getElementById("hat-2-light");
var fx1 = document.getElementById("FX1");
var fx2 = document.getElementById("FX2");
var fx3 = document.getElementById("FX3");
var fx4 = document.getElementById("FX4");

//Create objet seq
const seq = {
  seq1: ["kick-light", "snare-light", "kick-light", "snare-light",
         "kick-light", "snare-light", "kick-light", "snare-light",
         "kick2-light", "snare2-light", "kick2-light", "kick2-light",  "snare2-light" ], //0
  // 0        1      2    3
  seq2: ["kick-light", "kick-light", "kick-light"], //1
  //   0       1         2
};
let currentScore = 0

let currentSeq = 0;
//console.log(seq.seq1[currentSeq] === "kick-light");

//INSTRUMENTS CAN BE  PLAY
function checkButton() {
  document.querySelectorAll(".box").forEach((box) => {
    box.onclick = (evt) => {
      console.log(evt.target);
      checkStep(currentSeq, evt.target);
      const instrument = box.getAttribute("data-instrument");
      console.log(instrument);
      if (instrument) document.getElementById(instrument).play();
    };
  });
}
const boxes =document.querySelectorAll(".box")
document.onkeydown = e => boxes.forEach(box=>e.keyCode == box.dataset.key ? box.click(): "")


//START GAME BUTTON
console.log(start);
start.onclick = function go() {
  console.log("go");
  start.innerHTML = "LET'S GOOOOOOO";
  start.classList.add("stop");
  start.classList.remove("start");
  fx3.play();
  lighting(currentSeq);
};
//SET TiME OUT - CHANGE CLASS OF KICK
function lighting(index) {
  checkButton();
  lightseq();
  console.log("function light is called");
  // setTimeout(function () {
  //   console.log("inside setTimeout");
  //   document.getElementById(seq.seq1[index]).classList.add("light");
  // }, 12000);
}
//PERMET DE CHECKER SI SEQ CORRESPOND AU CLICK DU PAD
function checkStep(index, button) {
  console.log("function check is called");
  if (seq.seq1[index] === button.id) {
    console.log(button.id);
    console.log("inside if");
    currentSeq = currentSeq+1;
    addScore();
  } else start.innerHTML = "GAME OVER";
}


//ADDING 1 TO SCORE
function addScore() {
  score.innerHTML = "YOUR KANYE RATE IS " + currentScore;
  currentScore = currentScore+1;
  
}
let inputtoclick =+ 0

function lightseq(){
  controlLight(kickL,11800);
  controlLight(kickL,13500,false);
  controlLight(snareL,13500);
  controlLight(snareL,14000,false);
  controlLight(kickL,14800);
  controlLight(kickL,16000,false);
  controlLight(snareL,16300);
  controlLight(snareL,17500,false); 
  controlLight(kickL,17800);
  controlLight(kickL,19000,false);
  controlLight(snareL,19300);
  controlLight(snareL,20500, false);
  controlLight(kickL,20800);
  controlLight(kickL,22000,false);
  controlLight(snareL,22300);
  controlLight(snareL,23500, false);
  controlLight(kick2L,23800);
  controlLight(kick2L,25000,false);
  controlLight(snare2L,25300);
  controlLight(snare2L,26500,false);
  // controlLight(hatL,26000);
  // controlLight(hatL,26800,false);
  controlLight(kick2L,26800);
  controlLight(kick2L,27500,false);
  controlLight(kick2L,27800);
  controlLight(kick2L,28200,false);
  controlLight(snare2L,28300);
  controlLight(snare2L,30000,false);

}

let intervals = [];

function controlLight(element,delay,isOn=true) {
  intervals.push(setTimeout( ()=>isOn ? element.classList.add("light") : element.classList.remove("light"), delay));
}
//stopAllSetTimeout()ddd
function stopAllSetTimeout(){
  intervals.forEach(clearTimeout);
  console.log(intervals);
}


//LINK THE KEYBOARD WITH THE PAD
// window.onkeydown = function (event) {
//   if (event.keyCode == 65) {
//     document.getElementById("kick").play();
//     console.log("kickclavier");
//   }
//   if (event.keyCode == 90) {
//     document.getElementById("kick-2").play();
//   }
//   if (event.keyCode == 69) {
//     document.getElementById("snare").play();
//   }
//   if (event.keyCode == 82) {
//     document.getElementById("snap").play();
//   }
//   if (event.keyCode == 84) {
//     document.getElementById("rim-1").play();
//   }
//   if (event.keyCode == 89) {
//     document.getElementById("clap").play();
//   }
//   if (event.keyCode == 85) {
//     document.getElementById("snare-2").play();
//   }
//   if (event.keyCode == 73) {
//     document.getElementById("vox").play();
//   }
//   if (event.keyCode == 81) {
//     document.getElementById("808").play();
//   }
//   if (event.keyCode == 83) {
//     document.getElementById("open-hat").play();
//   }
//   if (event.keyCode == 68) {
//     document.getElementById("hat").play();
//   }
//   if (event.keyCode == 70) {
//     document.getElementById("hat-2").play();
//   }
//   if (event.keyCode == 71) {
//     document.getElementById("FX1").play();
//   }
//   if (event.keyCode == 72) {
//     document.getElementById("FX2").play();
//   }
//   if (event.keyCode == 74) {
//     document.getElementById("FX3").play();
//   }
//   if (event.keyCode == 75) {
//     document.getElementById("FX4").play();
//   }
// };



//controlLight(kick2L)

// //REMOVE LIGHT KICK
// function stopKickL() {
//   setTimeout(function () {kickL.classList.remove("light");}, 750);
//   console.log("one");
// }

// //ADD LIGHT OF SNARE
// function addSnareL() {
//   setTimeout(function () {snareL.classList.add("light");}, 750);
//   console.log("two");
// }

// // REMOVE LIGHT OF SNARE
// function stopSnareL() {
//   setTimeout(function () {snareL.classList.remove("light");}, 3000);
//   console.log("three");
// }

// //ADD LIGHT OF KICK
// function addKickL2() {
//   setTimeout(function () {kickL.classList.add("light");}, 3000);
//   console.log("quatre");
// }

// //REMOVE LIGHT KICK
// function stopKickL2() {
//   setTimeout(function () {kickL.classList.remove("light");}, 3750);
//   console.log("cinq");
// }
// //ADD LIGHT OF SNARE
// function addSnareL2() {
//   setTimeout(function () {snareL.classList.add("light");}, 3750);
//   console.log("six");
// }

// // REMOVE LIGHT OF SNARE
// function stopSnareL2() {
//   setTimeout(function () {snareL.classList.remove("light");}, 6000);
//   console.log("sept");
// }

// //ADD LIGHT OF KICK
// function addKickL3() {
//   setTimeout(function () {kickL.classList.add("light");}, 6000);
  
// }

// //REMOVE LIGHT KICK
// function stopKickL3() {
//   setTimeout(function () {kickL.classList.remove("light");}, 6800);

// }
// //ADD LIGHT OF SNARE
// function addSnareL3() {
//   setTimeout(function () {snareL.classList.add("light");}, 6800);
  
// }

// // REMOVE LIGHT OF SNARE
// function stopSnareL3() {
//   setTimeout(function () {snareL.classList.remove("light");}, 9000);
 
// }

// //ADD LIGHT OF KICK
// function addKickL4() {
//   setTimeout(function () {kickL.classList.add("light");}, 9000);
  
// }

// //REMOVE LIGHT KICK
// function stopKickL4() {
//   setTimeout(function () {kickL.classList.remove("light");}, 9800);

// }
// //ADD LIGHT OF SNARE
// function addSnareL4() {
//   setTimeout(function () {snareL.classList.add("light");}, 9800);
  
// }

// // REMOVE LIGHT OF SNARE
// function stopSnareL4() {
//   setTimeout(function () {snareL.classList.remove("light");}, 12000);
 
// }
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
