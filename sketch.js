let fishX=360;

function setup() {
  createCanvas(600, 600);
  frameRate(4);
  //noLoop();
  
}

function draw() {
  background("lightblue");
  translate (70,70);
  for (let j=0; j<5; j++){
    push ();
    translate (0,100*j);
    createRow (10);
    pop ();

  }
  
  fishX=fishX-1;
  fill ("red");
  strokeWeight (0);
  triangle (fishX+10,480,fishX+50,498,fishX+50,460);
  ellipse (fishX,478,60, 43);
  fill ("black");
  circle (fishX-10,475,10);
  
  
}



function drawCircle(side=30){ //definisco funzione che disegna glifo
  
  //let side = 50; //larghezza del lato del quadrato immaginario entro cui sta il glifo 
  let x=random(side)
  let y=random(side)
  let d=random(side)
  noFill();
  stroke("black");
  strokeWeight(2);
  circle(x,y,d)
  
}

function drawCircles (num = 4, side=30, d){ //definisco funzione che disegna più linee

  for (let n = 0; n < num; n++){
    //blendMode (BURN); //come si mescolano i colori se si sovrappongono
    noFill ();
    stroke ("black");
    strokeWeight (5);
    drawCircle (side, d)
  }
}

function createRow (i){
  for (let i=0; i<5; i++){
    push();
    translate (100*i,0);
    drawCircles (random(1,4), 30);
    pop ();
  }

}
