
function getDayNumber(){

var janFirstDayNumber = parseInt(prompt("Tomando en cuenta que el numero de dia se digita del 0 al 6 donde 0 es Lunes y 6 es Domingo. Ingrese el primer dia del año"));

var yearDayNumber   = parseInt(prompt("Tomando en cuenta los 365 dias del año. Ingrese numero de dia del año"));


    
switch(janFirstDayNumber){

case 0:

alert("Lunes");

break;

case 1:

alert("Martes");

break;

case 2:

    alert("Miercoles");

break;

case 3:

    alert("jueves");

break;

case 4:

    alert("Viernes");

break;

case 5:

    alert("Sabado");

break;

case 6:

    alert("Domingo");

    break;

default:

alert("Opcion digitada no existe");






}

var residuo= yearDayNumber % 7; 
    var diaFinal = (janFirstDayNumber+residuo)%7;
    return final;

    alert("EL dia anterior del año es: " + final);


}



getDayNumber();
 