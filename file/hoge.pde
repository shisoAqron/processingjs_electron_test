void setup()
{
  size(200,200);
  background(125);
  fill(255);
  PFont fontA = loadFont("courier");
  textFont(fontA, 14);  

  Minim minim = new Minim(this);
  AudioPlayer bgm;
　bgm = minim.loadFile("./assets/sawayaka.mp3");
  bgm.play(); 
}

void draw(){  
  text("Hello Web!",20,20);
  println("Hello ErrorLog!");
}