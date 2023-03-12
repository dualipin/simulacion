   // Definimos los parámetros
const a = document.getElementById('a'); // constante multiplicativa
const c = document.getElementById('c'); // constante que suma
const m = document.getElementById('m'); // constante que divide
const xi = document.getElementById('xi'); // semilla

function algoritmo(xi, a, c, m, numerosGenerar) {
  const arreglo = new Array(numerosGenerar);
  for (let i = 0; i < numerosGenerar; i++) {
    const x = ((a * xi) + c) % m;
    const ri = x / (m - 1);
    xi = x;
    arreglo[i] = ri;
  }
  return arreglo;
}

// Ponemos en el cliclo for cuantos números queremos generar
function generarNumeros() {
  const cc = algoritmo(xi.value, a.value, c.value, m.value, 5);
  document.getElementById("numeros-generados").innerHTML = cc.join(', ');
}
