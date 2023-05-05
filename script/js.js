/* eslint-disable array-callback-return */
// Definimos los parámetros
const a = document.getElementById("a"); // constante multiplicativa
const c = document.getElementById("c"); // constante que suma
const m = document.getElementById("m"); // constante que divide
const xi = document.getElementById("xi"); // semilla

// Definimos los posiciones
const posiciones = [
  { min: 0, max: 0.069, pos: 1 },
  { min: 0.07, max: 0.139, pos: 2 },
  { min: 0.14, max: 0.209, pos: 3 },
  { min: 0.21, max: 0.279, pos: 4 },
  { min: 0.28, max: 0.349, pos: 5 },
  { min: 0.35, max: 0.419, pos: 6 },
  { min: 0.42, max: 0.489, pos: 7 },
  { min: 0.49, max: 0.559, pos: 8 },
  { min: 0.56, max: 0.629, pos: 9 },
  { min: 0.65, max: 0.699, pos: 10 },
  { min: 0.7, max: 0.769, pos: 11 },
  { min: 0.77, max: 0.839, pos: 12 },
  { min: 0.84, max: 0.999, pos: 13 },
];

// Ponemos en el cliclo las constantes
function algoritmo(xi, a, c, m, numerosGenerar) {
  const arreglo = new Array(numerosGenerar);
  for (let i = 0; i < numerosGenerar; i++) {
    const x = (a * xi + c) % m;
    const ri = Math.round(((x % (m - 1)) / (m - 1)) * 100) / 100;
    xi = x;
    // Buscamos en qué posición cae el número generado
    const posicion = posiciones.findIndex(
      (posiciones) => ri >= posiciones.min && ri <= posiciones.max
    );
    arreglo[i] = { numero: ri, posicion: posicion + 1 };
  }

  return arreglo;
}

//Función Generardor de Números
function generarNumeros() {
  const cc = algoritmo(
    +xi.value,
    +a.value,
    +c.value,
    +m.value,
    parseInt(prompt("Cantidad a generar"))
  );
  // Mostramos los números generados y su posición
  /* const resultados = cc.map(
    (numero) => `${numero.numero} (${numero.posicion})`
  );
  document.getElementById("numeros-generados").innerHTML =
    resultados.join(" | ");*/

  cc.forEach((x) => {



    const tr = document.createElement("tr");
    const td1 = document.createElement("td");
    const td2 = document.createElement("td");

    td1.innerText = x.numero;
    td2.innerText = x.posicion;

    tr.appendChild(td1);
    tr.appendChild(td2);

    document.getElementById("tabla").appendChild(tr);
  });

  const trEst = document.createElement("tr");
  const mediaP = document.createElement("td");
  const medianaP = document.createElement("td");
  const modaP = document.createElement("td"); 
  
  const trNum = document.createElement("tr");
  const mediaN = document.createElement("td");
  const medianaN = document.createElement("td");
  const modaN = document.createElement("td");

  const PosicionesGeneradas = cc.map((x) => x.posicion);
  const NumerosGenerados = cc.map((x) => x.numero);


  mediaP.innerText = calcularMediaAritmetica(PosicionesGeneradas);
  medianaP.innerText = calcularMediana(PosicionesGeneradas);
  modaP.innerText = moda(PosicionesGeneradas);

  mediaN.innerText = calcularMediaAritmetica(NumerosGenerados);
  medianaN.innerText = calcularMediana(NumerosGenerados);
  modaN.innerText = moda(NumerosGenerados);

  trEst.appendChild(mediaP);
  trEst.appendChild(medianaP);
  trEst.appendChild(modaP);

  trNum.appendChild(mediaN);
  trNum.appendChild(medianaN);
  trNum.appendChild(modaN);

    
  document.getElementById('posiciones')
  document.getElementById("estadistica").appendChild(trEst);
  document.getElementById("numeros").appendChild(trNum);
  document.getElementById('numeros-generados').innerText = moda(NumerosGenerados)


}

function moda(listaM) {
  const lista1Count = {};

  listaM.map((elemento) => {
    if (lista1Count[elemento]) {
      lista1Count[elemento] += 1;
    } else {
      lista1Count[elemento] = 1;
    }
  });

  const lista1Array = Object.entries(lista1Count).sort(function (
    elementoA,
    elementoB
  ) {
    return elementoA[1] - elementoB[1];
  });

  const moda = lista1Array[lista1Array.length - 1];

  return moda;
}

function calcularMediana(lista) {
  const listaOrdenada = lista.sort(function (primerElemento, segundoElemento) {
    return primerElemento - segundoElemento;
  });

  const mitadLista = parseInt(listaOrdenada.length / 2);

  let mediana;

  function esPar(numerito) {
    if (numerito % 2 === 0) {
      return true;
    } else {
      return false;
    }
  }

  if (esPar(listaOrdenada.length)) {
    const elemento1 = listaOrdenada[mitadLista - 1];
    const elemento2 = listaOrdenada[mitadLista];

    const promedioElemento1y2 = calcularMediaAritmetica([elemento1, elemento2]);

    mediana = promedioElemento1y2;
  } else {
    mediana = listaOrdenada[mitadLista];
  }
  return mediana;
}

function calcularMediaAritmetica(lista) {
  const sumaLista = lista.reduce(function (valorAcumulado = 0, nuevoElemento) {
    return valorAcumulado + nuevoElemento;
  });

  const promedioLista = sumaLista / lista.length;

  return promedioLista;
}
