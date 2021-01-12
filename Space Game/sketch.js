const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;
const Body=Matter.Body;
const Constraint=Matter.Constraint;
var player0;
var obj1,asteriod1;
var engine,world;
var menu;
var retroFont;
var gamestate=0;
var spaceship, menuImage;

function preload() { 
  retroFont = loadFont("Fonts/Retro8Bit-6AjD.ttf"); 
  spaceship = loadImage("Spaceship.png");
  menuImage = loadImage("Space.jpg");
} 
  
function setup(){
  createCanvas(windowWidth, windowHeight);
  engine=Engine.create();
  world=engine.world;
  menu=new Menu();
  player0=new Player(500, 100, 50, 50);
  asteriod1=new Asteriod(500,500,100);
}

function draw(){
  background("black");
  Engine.update(engine);
  menu.setUp();
}