/* 1era Entrega */

const CURSOS = {
    46915: { cantidadAlumnos: 150, claseIniciada: true, claseFinalizado: true, top10: true },
    49810: { cantidadAlumnos: 86, claseIniciada: true, claseFinalizado: false, top10: false },
    61560: { cantidadAlumnos: 86, claseIniciada: true, claseFinalizado: false, top10: false },
    49575: { cantidadAlumnos: 94, claseIniciada: true, claseFinalizado: false, top10: false },
    53210: { cantidadAlumnos: 57, claseIniciada: false, claseFinalizado: false, top10: false },
    54060: { cantidadAlumnos: 42, claseIniciada: false, claseFinalizado: false, top10: false },
    57245: { cantidadAlumnos: 21, claseIniciada: false, claseFinalizado: false, top10: false },
    57120: { cantidadAlumnos: 36, claseIniciada: false, claseFinalizado: false, top10: false },
    59520: { cantidadAlumnos: 43, claseIniciada: false, claseFinalizado: false, top10: false },
};

function ingreseComision() {
    
    let respuesta = prompt("Quieres ingresar un numero de comision existente? (si/no)").toLowerCase();

    if (respuesta === "si") {

        let numeroComision = parseInt(prompt("Ingrese número de comisión de tu curso sin el #"));

        while (!(numeroComision in CURSOS)) {
            alert ("Ese numero de Comision no existe");
            return ingreseComision ();
        }
        if (CURSOS[numeroComision].claseFinalizado && CURSOS[numeroComision].top10 == false) {
            alert ("Felicitaciones, Curso Terminado!!");
        }
        else if (CURSOS[numeroComision].claseFinalizado && CURSOS[numeroComision].top10) {
            alert ("Felicitaciones, Terminaste Top10!!");
        }
        else if (CURSOS[numeroComision].claseIniciada && CURSOS[numeroComision].cantidadAlumnos === 150) {
            alert ("El curso ya inicio y a maxima capacidad");
        }
        else if (CURSOS[numeroComision].cantidadAlumnos === 150 && CURSOS[numeroComision].claseIniciada == false) {
            alert ("El curso alcanzo el maximo de alumnos");
        }
        else if (CURSOS[numeroComision].claseIniciada && CURSOS[numeroComision].cantidadAlumnos < 150) {
            alert ("El curso ya inicio");
        
        } 
        else {
            alert ("El curso aun no comienza");
        }
    }
    else if (respuesta === "no") {
        return;
    }
    else {
        while (respuesta !== "no" || respuesta !== "si") {
            alert ("por favor, ingresa si o no");
            return ingreseComision ();
        }
    }

} ingreseComision();














