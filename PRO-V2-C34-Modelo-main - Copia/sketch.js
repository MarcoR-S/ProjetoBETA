const Engine = Matter.Engine;
const Render = Matter.Render;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;
const Composites = Matter.Composites;
const Composite = Matter.Composite;

let engine;
let world;


var rua1, rua2, rua3, rua4, rua5, rua6
var player, playerImg, player2, playerImg2, player3, playerImg3, player4, playerImg4
var obstaculoImg, obstaculoImg2, obstaculoImg3, obstaculoImg4
var obstaculo, obstaculo2, obstaculo3, obstaculo4;
var bgImg, bg
var sireneIconeImg, sireneIcone
var iconeBImg, iconeBaixo, iconeCImg, IconeCima, iconeEImg, iconeE, iconeDImg, iconeD

function preload()
{
  
  
  
  playerImg = loadImage('Ambulancia.png')
  bgImg = loadImage('Grama.png')

  sireneIconeImg = loadImage('sireneicone.png');
  iconeBImg = loadImage('iconeBaixo.png');
  iconeCImg = loadImage('iconeCima.png');
  iconeEImg = loadImage('iconeEsquerda.png');
  iconeDImg = loadImage('iconeDireita.png');

  obstaculoImg = loadImage('carObstaculo.png');
  obstaculoImg2 = loadImage('carObstaculo2.png');
  obstaculoImg3 = loadImage('carObstaculo3.png');
  obstaculoImg4 = loadImage('carObstaculo4.png');

  sirene = loadSound('sirene.mp3')
}

function setup() 
{
  createCanvas(600,600);
  frameRate(80);

  sirene.loop()
  
  bg = createSprite(0,0,0,0)
  bg.addImage(bgImg)
  bg.scale = 2  

  rua = createSprite(100,0,100,900)          //ESTRADA
  rua3 = createSprite(300,500,500,100)       //ESTRADA
  rua5 = createSprite(500,400,100,200) 
  
  rua2 = createSprite(100,0,2,1000)         //Faixa
  rua2.shapeColor = "yellow"                //Faixa
  rua4 = createSprite(300,500,399,2)        //Faixa
  rua4.shapeColor = "yellow" //Faixa
  rua6 = createSprite(500,400,2,201)
  rua6.shapeColor = "yellow"
  
  obstaculo = createSprite(75,100)
  obstaculo.addImage(obstaculoImg)
  obstaculo.scale =0.07
  obstaculo.rotation = 90

  obstaculo2 = createSprite(75,150)
  obstaculo2.addImage(obstaculoImg2)
  obstaculo2.scale =0.04
  obstaculo2.rotation = 90



  player = createSprite(75,30)
  player.addImage(playerImg)
  player.scale = 0.2
  player.rotation = -90
  ///////////////////////////////////////////////////////////ICONES/////////////////////////////////////////////////////////////




 
  
  engine = Engine.create();
  world = engine.world;
  
  
  
}

function draw() 
{
  background('green');
  
  



  
 icones();
 dirigir();
 npc();
 drawSprites();
 
}




