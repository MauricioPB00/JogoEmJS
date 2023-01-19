let yAtor= 366;
let xAtor= 250;


function mostraAtor(){
  image(imgAtor, xAtor,yAtor,30,30)
}



function movimentaAtor(){
  if (keyIsDown(UP_ARROW)){
    yAtor -=2
  }
  if (keyIsDown(DOWN_ARROW)){
    yAtor +=2
  }
    if (keyIsDown(LEFT_ARROW)){
    xAtor -=1.5
  }
  if (keyIsDown(RIGHT_ARROW)){
    xAtor +=1.5
  }
}