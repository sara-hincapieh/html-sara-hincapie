document.addEventListener("DOMContentLoaded", () => {
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

  // 1

  function crearTablero() {
    for (let i = 0; i < cardAdj.length; i++) {
      var carta = document.createElement("img");
      carta.setAttribute("src", "imagenes/aru.png");
      carta.setAttribute("data-id", i);
      carta.addEventListener("click", voltearCarta);
      cuadricula.appendChild(carta);
    }
  }

  //2

  function verificarPareja() {
    var cards = document.querySelectorAll("img");
    const opcionUnoId = cartasEscogidasId[0];
    const opcionDosId = cartasEscogidasId[1];

    if (opcionUnoId === opcionDosId) {
      cards[opcionUnoId].setAttribute("src", "imagenes/aru.png");
      cards[opcionDosId].setAttribute("src", "imagenes/aru.png");
      alert(" Incorrecto. Diste click a la misma imagen!");
    } else if (cartasEscogidas[0] === cartasEscogidas[1]) {
      alert("¡Correcto!");

      cards[opcionUnoId].setAttribute("src", "imagenes/bla.png");
      cards[opcionDosId].setAttribute("src", "imagenes/bla.png");
      cards[opcionUnoId].removeEventListener("click", voltearCarta);
      cards[opcionDosId].removeEventListener("click", voltearCarta);
      cartasGanadas.push(cartasEscogidas);
    } else {
      cards[opcionUnoId].setAttribute("src", "imagenes/aru.png");
      cards[opcionDosId].setAttribute("src", "imagenes/aru.png");
      alert("¡Intenta de nuevo!");
    }
    cartasEscogidas = [];
    cartasEscogidasId = [];

    resultado.textContent = cartasGanadas.length;

    if (cartasGanadas.length === cardAdj.length / 2) {
      resultado.textContent = "¡Bien hecho, encontraste todos los pares!";
    }
  }

  // 3
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
