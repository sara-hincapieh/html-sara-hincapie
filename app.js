document.addEventListener("DOMContentLoad", () => {
  const cardAdj = [
    { name: "cab.jpg", img: "imagenes/cab.jpg" },
    { name: "can.jpg", img: "imagenes/can.jpg" },
    { name: "del.jpg", img: "imagenes/del.jpg" },
    { name: "eso.jpg", img: "imagenes/eso.jpg" },
    { name: "est.jpg", img: "imagenes/est.jpg" },
    { name: "tib.jpg", img: "imagenes/tib.jpg" },
    { name: "cab.jpg", img: "imagenes/cab.jpg" },
    { name: "can.jpg", img: "imagenes/can.jpg" },
    { name: "del.jpg", img: "imagenes/del.jpg" },
    { name: "eso.jpg", img: "imagenes/eso.jpg" },
    { name: "est.jpg", img: "imagenes/est.jpg" },
    { name: "tib.jpg", img: "imagenes/tib.jpg" }
  ];

  const cuadricula = document.querySelector(".cuadricula");
  const resultado = document.querySelector("#resultado");
  var cartasEscogidas = [];
  var cartasEscogidasId = [];
  var cartasGanadas = [];

  // siguiente

  function crearTablero() {
    for (let i = 0; i < cardAdj.length; i++) {
      var carta = document.createElement("img");
      carta.setAttribute("src", "imagenes/aru.png");
      carta.setAttribute("data-id", i);
      carta.addEventListener("click", voltearCarta);
      cuadricula.appendChild(carta);
    }
  }

  function voltearCarta() {
    var cardId = this.getAttribute("data-id");
    cartasEscogidas.push(cardAdj[cardId].name);
    cartasEscogidasId.push(cardId);
    this.setAttribute("src", cardAdj[cardId].img);
    if (cartasEscogidas.length === 2) {
      setTimeout(verificarPareja, 1500);
    }
  }

  crearTablero();
});
