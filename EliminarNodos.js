/* asi tambien como se pueden agregar nodos, se pueden eliminar dentro del html
js nos ofrece 3:*/
// se selecciona el elemento que se quiere eliminar 

const nodoAEliminar = document.querySelector('selector');

//selecciono a su padre directo 

const parentElement = nodoAEliminar.parentElement;

//lo eliminamos 

parentElement.removeChild(nodoAEliminar);

/*document.remove(): es la evolucion de removechild y...
tampoco es soportado por internet explorer.
no importa, aca esta el polyfill: https://developer.mozilla.org/es/docs/Web/API/ChildNode/remove#polyfill */

// selecciona el elemento que quiero eliminar 
const eliminar = document.querySelector('selector');

//se elemina
nodoAEliminar.remove();

/*document.replaceChild(): reemplaza un nodo (en pocas palabras lo elimina y mete otro)*/
//se selecciona el padre
const father = document.querySelector('selector');
//se selecciona el elemento al que voy a reemplazar 
const toReplace = document.querySelector('selector');
//se crea el nodo por el cual se va a reemplazar 
const node = document.createElement('h1');
//se le inserta un texto 
node.textContent = 'un texto cualquiera';

//se reemplaza
parent.replaceChild(node, toReplace);