
/*funcion para imprimir verdadero de acuerdo al horario comercial contemplado de 9 a 18 hrs
y falso fuera de este horario ademas de imprimir el dia de acuerdo al numero ingresado*/
function horarioDeNegocios(){
    
    var numeroDia = parseInt(prompt("Tomando en cuenta que el numero de dia se digita del 0 al 6 donde 0 es Lunes y 6 es Domingo. Ingrese numero de dia"));
    var numeroHora = parseInt(prompt("¿Cual es el numero de hora?"));

    //condiciones para un horario comercial

    if(numeroDia >= 0 && numeroDia <= 4 && numeroHora >= 9 && numeroHora <= 18){

        alert(true);

    }else 

       
        alert(false);

    }




horarioDeNegocios();