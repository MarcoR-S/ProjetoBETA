function dirigir(){
    if(keyDown('s')){
      player.position.y = player.position.y+3 
    }
    if(keyDown('d')){
      player.position.x = player.position.x+3
    }
    if(keyDown('w')){
      player.position.y = player.position.y-3
    }
    if(keyDown('a')){
      player.position.x = player.position.x-3
    }
   // if(keyDown('q')){
  //    player.rotation = player.rotation-3
   // }
   // if(keyDown('e')){
   //   player.rotation = player.rotation+3
   // }
    if(keyDown('z')){
      player.rotation = -90
    }
    if(keyDown('e')){
      player.rotation = 180
    }
    if(keyDown('x')){
      player.rotation = 90
    }
    if(keyDown('q')){
      player.rotation = 360
    }
  }
  
  function npc(){
    obstaculo.velocity.y = 0.5  
    obstaculo2.velocity.y = 0.5
    if(obstaculo.position.y > 450){
      obstaculo.rotation = obstaculo.rotation-5
    } 
  
  
  }
  
  function icones(){
  sireneIcone = createSprite(520,70)
  sireneIcone.addImage(sireneIconeImg)
  sireneIcone.scale = 0.35  
  
  iconeBaixo = createSprite(520,110);
  iconeBaixo.addImage(iconeBImg);
  iconeBaixo.scale = 0.26
  
  iconeCima = createSprite(520,20);
  iconeCima.addImage(iconeCImg);
  iconeCima.scale = 0.26
  
  iconeDireita = createSprite(564,70);
  iconeDireita.addImage(iconeDImg);
  iconeDireita.scale = 0.26
  
  iconeEsquerda = createSprite(475,70);
  iconeEsquerda.addImage(iconeEImg);
  iconeEsquerda.scale = 0.26;
  
    if(keyIsDown('q')){
        sirene.play();
    }
    if(keyIsDown('q')&&sirene.isPlaying()){
        sirene.stop();
    }
  }
  