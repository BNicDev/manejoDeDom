const EtiquetaH1 = document.createElement('h1'); // solo se crea el elemento, aun no se agrega al dom

const texto = document.createTextNode('hola mundo!'); // solo crea el texto, aun no se agrega al dom


//Como solo creamos, necesitamos formas de agregarlos al DOM, para ello, JavaScript nos provee de estas formas:
//parentElement.appendChild(): Agrega un hijo al final algún elemento

//obtengo el elemento padre
const parentElement = document.querySelector('selector');
//se crea el nodo a insertar 
const heading3 = document.createElement('h3');
//se crea el texto del nodo;
const textNode = document.createTextNode('Hola!');
// se inserta el texto al nodo 
heading3.appendChild(textNode);
//se inserta el nodo al padre 
parentElement.appendChild(heading3);

/*parentElement.append(): Es la evolución de appendChild, podemos agregar más de un nodo, puedes agregar texto
y... no es soportado por Internet Explorer ¬¬! .
Un polyfill es una adaptación del código para dar soporte a navegadores que no lo soportan,
aquí está el polyfill de append: https://developer.mozilla.org/es/docs/Web/API/ParentNode/append#polyfill*/ 

//obtengo el elemnto padre
const parentElements = document.querySelector('selector');
//agrego el elemento padre 
parentElements.append('agrego un texto', document.createElement('div'));

/* parentElement.insertBefore(): Inserta nodos antes del elemento que le pasemos como referencia,
este nodo de referencia tiene que ser un hijo DIRECTO del padre*/

// se obtiene el elemento padre
const elementPadre = document.querySelector("selector");
//se crea un titulo
const titulo = document.createElement('h1');
//obtengo la referencia del elemento del que queremos insertar antes
const referencia = document.querySelector('selector');
//se inserta!
parentElement.insertBefore(titulo,referencia); // el primer parametro es el elemento a insertar y el segundo es la refencia de donde lo queremos insertar

/*parentElement.insertAdjacentElement(): Inserta nodos según las opciones que le pasemos:
beforebegin: Lo inserta antes del nodo
afterbegin: Lo inserta despues del nodo
beforeend: Lo inserta antes de donde finaliza el nodo
afterend: Lo inserta después de donde finaliza el nodo */

//obtengo el elemento padre 
const padre = document.querySelector('selector');
//creo un elemento 
const nodo = document.createElement('span')
padre.insertAdjacentElement('beforeBegin',nodo);

//otras maneras de agregar nodos

Node.outerHTML // sirve pora leer HTML
Node.innerHTML // sirve para escribir el HTML

/* . PEEEEEEERO, tienen un problema de seguridad 👀☝️ . 
hack: Cuando en el inspector de elementos seleccionas un elemento y en la consola escribes $0
, este te devolverá el elemento tal como si lo hubieses seleccionado con document.querySelector()
. . Aquí les dejo el playground que usó el profesor para hacer las pruebas: https://codepen.io/jonalvarezz/pen/OJXeNab?editors=0110 .
El problema con estas formas de inserciones es que permiten la inserción XSS, es decir,
código maligno, y cualquier usuario programador malicioso podría meter scripts molestos, 
imagina que cada que un usuario llegue a tu página le salga un alert... 
¡Sería catastrófico! Siempre sanitiza (remover caracteres especiales) los inputs de tus usuarios */