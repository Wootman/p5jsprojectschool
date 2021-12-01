
let itemBoxTex;
let groundTex;

function preload() {
  //loads the texture
  itemBoxTex = loadImage('https://art.pixilart.com/6af18efab3b6bcf.png');
  groundTex = loadImage('https://i.imgur.com/Ke3KluT.png');
}

function setup() {
  createCanvas(800, 800, WEBGL);


}

function draw() {
  background(135, 206, 235);
  noStroke()
  texture(groundTex);
  rect(-500, 150, 900);

  //rotation of cube
  rotateX(frameCount * 0.01);
  rotateY(frameCount * 0.01);
  texture(itemBoxTex);
  //cube changes shape relative to mouse
  box(mouseX, mouseY);
  
}