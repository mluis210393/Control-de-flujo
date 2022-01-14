
/*funcion para imprimir verdadero de acuerdo al horario comercial contemplado de 9 a 18 hrs
y falso fuera de este horario ademas de imprimir el dia de acuerdo al numero ingresado*/
function horarioDeNegocios(){
    
    var numeroDia = parseInt(prompt("¿Cual es el numero de dia?"));
    var numeroHora = parseInt(prompt("¿Cual es el numero de hora?"));

    //condiciones para un horario comercial

    if(numeroDia == 1 && numeroHora >= 9 && numeroHora <= 18){

        alert("lunes " + true);

    }else if(numeroDia == 2 && numeroHora >= 9 && numeroHora <= 18){

        alert("Martes " + true);
    }else if(numeroDia == 3 && numeroHora >= 9 && numeroHora <= 18){

        alert("Miercoles " + true);
    }else if(numeroDia == 4 && numeroHora >= 9 && numeroHora <= 18){

        alert("jueves " + true);
    }else if(numeroDia == 5 && numeroHora >= 9 && numeroHora <= 18){

        alert("viernes " + true);
    }else if(numeroDia == 6 && numeroHora >= 9 && numeroHora <= 18){

        alert("sabado " + true);
    }else if(numeroDia == 7 && numeroHora >= 9 && numeroHora <= 18){

        alert("domingo " + true);
    }     // condiciones cuando el horario no es comercial 
    
    else if(numeroDia == 1){

        alert("lunes " + false);
    }else if(numeroDia == 2){

        alert("Martes " + false);
    }else if(numeroDia == 3){

        alert("Miercoles " + false);
    }else if(numeroDia == 4 ){

        alert("Jueves " + false);
    }else if(numeroDia == 5 ){

        alert("Viernes " + false);
    }else if(numeroDia == 6 ){

        alert("Sabado " + false);
    }else if(numeroDia == 7 ){

        alert("Domingo " + false);
    }
    else{
       
        alert("Error fuera de rango");

    }


}

horarioDeNegocios();