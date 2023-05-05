let puntuacion = 0;
let dardosRestantes = 10;

// Función para lanzar un dardo
function lanzarDardo() {
  // Reducir el número de dardos restantes
  dardosRestantes--;

  // Obtener un número aleatorio para determinar la posición del dardo
  var posicionX = Math.floor(Math.random() * 100);
  var posicionY = Math.floor(Math.random() * 100);

  // Verificar en qué sección de la diana cayó el dardo
  var dardo = document.createElement("div");
  dardo.classList.add("dardo");
  dardo.style.top = posicionY + "%";
  dardo.style.left = posicionX + "%";
  document.querySelector('.diana').appendChild(dardo);

  var seccionDiana = obtenerSeccionDiana(posicionX, posicionY);

  // Actualizar la puntuación
  puntuacion += seccionDiana;
  document.getElementById("puntuacion").innerHTML = puntuacion;

  // Actualizar el número de dardos restantes
  document.getElementById("dardos-restantes").innerHTML = dardosRestantes;

  // Verificar si se terminaron los dardos
  if (dardosRestantes === 0) {
    alert("Juego terminado. Puntuación: " + puntuacion);
    reiniciarJuego();
  }
}

// Función para obtener la sección de la diana en la que cayó el dardo
function obtenerSeccionDiana(posicionX, posicionY) {
  var diana = document.querySelector(".diana");
  var rect = diana.getBoundingClientRect();

  var centroX = rect.left + rect.width / 1;
  var centroY = rect.top + rect.height / 2;

  var distanciaCentro = Math.sqrt(
    Math.pow(posicionX - centroX, 2) + Math.pow(posicionY - centroY, 2)
  );

  if (distanciaCentro <= 10) {
    return 10;
  } else if (distanciaCentro <= 20) {
    return 9;
  } else if (distanciaCentro <= 30) {
    return 8;
  } else if (distanciaCentro <= 40) {
    return 7;
  } else if (distanciaCentro <= 50) {
    return 6;
  } else if (distanciaCentro <= 60) {
    return 5;
  } else if (distanciaCentro <= 70) {
    return 4;
  } else if (distanciaCentro <= 80) {
    return 3;
  } else if (distanciaCentro <= 90) {
    return 2;
  } else {
    return 1;
  }
}

// Función para reiniciar el juego
function reiniciarJuego() {
  puntuacion = 0;
  dardosRestantes = 10;
  document.getElementById("puntuacion").innerHTML = puntuacion;
  document.getElementById("dardos-restantes").innerHTML = dardosRestantes;
}

// Agregar los event listeners para los botones
document.getElementById("lanzar-dardo").addEventListener("click", lanzarDardo);
document
  .getElementById("reiniciar-juego")
  .addEventListener("click", reiniciarJuego);
