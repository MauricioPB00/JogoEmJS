let xCarro = 700;
let yCarro = 40;
let velocidadeCarro1 = 2;

let xCarro2 = 700;
let yCarro2 = 96;
let velocidadeCarro2 = 4;

let xCarro3 = 700;
let yCarro3 = 150;
let velocidadeCarro3 = 3;

function mostraCarro(){
   image(imgCarro, xCarro,yCarro,50,40)
   image(imgCarro2, xCarro2,yCarro2,50,40)
   image(imgCarro3, xCarro3,yCarro3,50,40)
}


function movimentaCarro(){
  xCarro-= velocidadeCarro1;
  xCarro2 -= velocidadeCarro2;
  xCarro3 -= velocidadeCarro3;
}
