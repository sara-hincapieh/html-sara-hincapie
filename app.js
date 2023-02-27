document.addEventListener("DOMContentLoad", () => {});
const cardAdj = [
  { name: "cab.jpg", img: "images/cab.jpg" },
  { name: "can.jpg", img: "images/can.jpg" },
  { name: "del.jpg", img: "images/del.jpg" },
  { name: "eso.jpg", img: "images/eso.jpg" },
  { name: "est.jpg", img: "images/est.jpg" },
  { name: "tib.jpg", img: "images/tib.jpg" }
];

const cuadricula = document.querySelector(".cuadricula");
const resultado = document.querySelector("#resultado");
var cartasescogidas = [];
var cartasescogidasid = [];
var cartasGanadas = [];

// siguiente 

function crearTablero (){

  for (let i=0; i< cardAdj.length; i++){
    var carta = document.createElement("imagenes");

    carta.setAttribute("src", "imagenes/aru.png");
    carta.setAttribute("data-id", i);
    carta.addEventListener("click", voltearCarta);
    cuadricula.appendChild(carta);
  }
  }
}



