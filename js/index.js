
//#region Constantes de elementos del DOM

//#region Formularios

function cuadradosMedios(){
    const form = document.createElement('form');

    const semillaIN = document.createElement()
}

//#endregion

//#region Tabla Estadistica
const media = document.getElementById('media');
const mediana = document.getElementById('mediana');
const moda = document.getElementById('moda');
//#endregion

//#region Botones del Menu de metodos
const cuadradosMediosBTN = document.getElementById('opcion1');
const productosMediosBTN = document.getElementById('opcion2');
const algoritmnoLinealBTN = document.getElementById('opcion3');
const algoritmoCongruencialLinealBTN = document.getElementById('opcion4');
//#endregion

//#region Tabla de Frecuencia
const vecesCara1 = document.getElementById('vecesCara1');
const vecesCara2 = document.getElementById('vecesCara2');
const vecesCara3 = document.getElementById('vecesCara3');
const vecesCara4 = document.getElementById('vecesCara4');
const vecesCara5 = document.getElementById('vecesCara5');
const vecesCara6 = document.getElementById('vecesCara6');
//#endregion


//#endregion

//#region Generador de dados
/*
const main = document.getElementById('dados');
main.appendChild(generadorDados('uno'));

*/


const cube = document.getElementById('dado');


cube.style.transition = '';
setTimeout(() => {
    cube.style.transition = `transform ${2}s`;
    const randomValue = Math.floor((Math.random() * 6) + 1);
    console.log(`randomValue: ${randomValue}` );
    
    switch(randomValue) {
        case 1:             
            cube.style.transform = `translateY(0) rotateX(3600deg) rotateY(3600deg) rotateZ(3600deg)`;
            break;
        case 2:
            cube.style.transform = `translateY(0) rotateX(4410deg) rotateY(3600deg) rotateZ(3600deg)`;
            break;
        case 3:
            cube.style.transform = `translateY(0) rotateX(3600deg) rotateY(4410deg) rotateZ(3600deg)`;
            break;
        case 4:
            cube.style.transform = `translateY(0) rotateX(3600deg) rotateY(2430deg) rotateZ(3600deg)`;
            break;
        case 5:
            cube.style.transform = `translateY(0) rotateX(2430deg) rotateY(3600deg) rotateZ(3600deg)`;
            break;
        case 6:
            cube.style.transform = `translateY(0) rotateX(3600deg) rotateY(1980deg) rotateZ(3600deg)`;
            break;
    };
}, 10);

/*

function generadorDados(i) {
  const content = document.createElement('div');
  const dado = document.createElement('div');
  const cara = generadorCara();

  cara.forEach(x => { dado.appendChild(x) });

  dado.setAttribute('class', 'dado');
  dado.setAttribute('id', `${i}`);
  content.setAttribute('class','content');
  content.appendChild(dado);

  return content;
}

function generadorCara() {
  const caras = new Array();
  for (let i = 1; i < 7; i++) {
    const cara = document.createElement('div');
    cara.setAttribute('class', `cara cara${i}  c${i}`);
    caras.push(cara);
  }
  return caras;
}
//#endregion


//#region Area de eventos botones menu
cuadradosMediosBTN.addEventListener('click', e => {

});

productosMediosBTN.addEventListener('click', e => {

});

algoritmnoLinealBTN.addEventListener('click', e => {

});

//#endregion

*/