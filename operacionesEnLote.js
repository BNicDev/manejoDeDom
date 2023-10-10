/*que es un spread operator?
un spread operator trabaja con arreglos y objetos, cuando lo pasamos en la llamada a una funcion,
lo que hara es deconstruir ese arreglo y lo pasara como parametros individuales para la funcion ...
aqui un ejemplo: */

function recibeTresParametros(para1, param2, param3){
    //code...
}
//la forma normal de llamarla seria?:
recibeTresParametros(1,2,3)

//que pasaria si tengo un arreglo que contiene los 3 params

const arregloDeParametro = [ 1,2,3];

// bueno, el spread operator puede deconstruir ese arreglo y poner cada elemento en donde irian los params

recibeTresParametros(...arregloDeParametro);

//eso seria equivalente a esto: 

recibeTresParametros(arregloDeParametro[0], arregloDeParametr[1],arregloDeParametro[2]);
/*esto es muy util cuando tenemos demasiados valores, recuerda, mientras menos se modifique el dom, mas eficiente sera el programa
recordemos que existe apend que nos permite insertar multiples elementos en una sola llamada
dato de color: 
en algunos frameworks de js como vue o react, existe una cosa llamada el virtual dom, este no es mas que un obj js que simula el dom
   */