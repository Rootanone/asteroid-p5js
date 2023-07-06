let matahari,
    merkurius,
    venus,
    bumi,
    bulan,
    mars,
    jupiter,
    saturnus,
    uranus,
    neptunus;

function preload(){
  
  matahari=loadImage('matahari.png'); 
  merkurius=loadImage('merkurius.png');
  venus=loadImage('venus.png');
  bumi=loadImage('bumi.png');
  bulan=loadImage('bulan.png');
  mars=loadImage('mars.png');
  jupiter=loadImage('jupiter.png');
  saturnus=loadImage('saturnus.png');
  uranus=loadImage('uranus.png');
  neptunus=loadImage('neptunus.png');
}

function setup() {
  createCanvas(2500,2500);
  imageMode(CENTER);
  

  matahari.resize(150,150);
  merkurius.resize(80,60);
  venus.resize(80,60);
  bumi.resize(80,60);
  bulan.resize(40,40);
  mars.resize(80,60);
  jupiter.resize(90,70);
  saturnus.resize(80,60);
  uranus.resize(80,60);
  neptunus.resize(80,60);

  
}

function draw() {
  background(0);
  noFill();
  stroke('white');
  strokeWeight(2);
  
  push();
  translate(0,height/2);
  image(matahari,0,0);


  push();
  ellipse(0,0,300);
  rotate(millis()/1000*radians(25));
  translate(150,0);
  image(merkurius,0,0);
  pop();
  

  push();
  strokeWeight(2);
  ellipse(0,0,600);
  rotate(millis()/1000*radians(15));
  translate(300,0);
  image(venus,0,0);
  pop();
  

push();
  strokeWeight(2);
  ellipse(0,0,900);
  rotate(millis()/1000*radians(15));
  translate(450,0);
  image(bumi,0,0);
  

    push();
  ellipse(0,0,150);
  rotate(millis()/1000*radians(150));
  translate(70,0);
  image(bulan,0,0);
    pop();
  pop();
  

  push();
  strokeWeight(2);
  ellipse(0,0,1200);
  rotate(millis()/1000*radians(13));
  translate(530,0);
  image(mars,70,0);
  pop();
  
 
  push();
  strokeWeight(2);
  ellipse(0,0,1400);
  rotate(millis()/1000*radians(10));
  translate(700,0);
  image(jupiter,0,0);
  pop();
  
  push();
  strokeWeight(2);
  ellipse(0,0,1600);
  rotate(millis()/1000*radians(9));
  translate(800,0);
  image(saturnus,0,0)
  pop();
  
  push();
  strokeWeight(2);
  ellipse(0,0,1800);
  rotate(millis()/1000*radians(7));
  translate(900,0);
  image(uranus,0,0);
  pop();
  

  push();
  strokeWeight(2);
  ellipse(0,0,2000);
  rotate(millis()/1000*radians(5));
  translate(1000,0);
  image(neptunus,0,0);
  pop();

  pop()
}