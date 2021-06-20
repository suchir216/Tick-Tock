function setup() {
  createCanvas(800,400);
  angleMode(DEGREES);
}

function draw() {
  background(0,255,0);
  translate(200,200);
  rotate(-90);
  
  hr=hour();
  mn=minute();
  sc=second();
  scAngle=map(sc,0,60,0,360);
  mnAngle=map(mn,0,60,0,360);
  hrAngle=map(hr%12,0,12,0,360);

  push()
  rotate(scAngle);
  stroke("RED");
  strokeWeight(7);
  line(0,0,100,0);

  pop()
  
  push()
  rotate(mnAngle);
  stroke("GREEN");
  strokeWeight(7);
  line(0,0,75,0);

  pop()

  push()
  rotate(hrAngle);
  stroke("BLUE");
  strokeWeight(7);
  line(0,0,50,0);

  pop()
  

  stroke("WHITE");
  strokeWeight(5);
  point(0,0);
  strokeWeight(10);
  noFill();
  stroke("RED");
  arc(0,0,300,300,0,scAngle);
  stroke("GREEN");
  arc(0,0,280,280,0,mnAngle);
  stroke("BLUE");
  arc(0,0,260,260,0,hrAngle);
  drawSprites();
}


