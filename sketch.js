var canvas, backgroundImage;

var questions;

var question, contestant, quiz;
 
function preload(){

  bk_song = loadSound('cheerful-and-funny-7417.mp3');


}

function setup(){
  canvas = createCanvas(windowWidth,windowHeight);
  database = firebase.database();
  quiz = new Quiz();

  quiz.start();
  bk_song.play();
  bk_song.setVolume(0.2);
//call the start() method inside the quiz class

}


function draw(){
  background("lavender");

}
