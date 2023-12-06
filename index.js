/* 1era Entrega */

const CURSOS = {
    46915: { cantidadAlumnos: 150, claseIniciada: true, claseFinalizada: true, top10: true },
    49810: { cantidadAlumnos: 86, claseIniciada: true, claseFinalizada: false, top10: false },
    61560: { cantidadAlumnos: 86, claseIniciada: true, claseFinalizada: false, top10: false },
    49575: { cantidadAlumnos: 94, claseIniciada: true, claseFinalizada: false, top10: false },
    53210: { cantidadAlumnos: 57, claseIniciada: false, claseFinalizada: false, top10: false },
    54060: { cantidadAlumnos: 42, claseIniciada: false, claseFinalizada: false, top10: false },
    57245: { cantidadAlumnos: 21, claseIniciada: false, claseFinalizada: false, top10: false },
    57120: { cantidadAlumnos: 36, claseIniciada: false, claseFinalizada: false, top10: false },
    59520: { cantidadAlumnos: 43, claseIniciada: false, claseFinalizada: false, top10: false }
};

function ingreseComision() {

    let respuesta = prompt("¿Quieres ingresar un numero de comision? (si/no)").toLowerCase();

    if (respuesta === "si") {

        let numeroComision = parseInt(prompt("Ingrese el número de comisión de tu curso sin el #"));

        while (!(numeroComision in CURSOS)) {
            alert("Este numero de comision no existe");
            return ingreseComision();
        }
        if (CURSOS[numeroComision].claseFinalizada && CURSOS[numeroComision].top10 === false) {
            alert("Felicitaciones, Curso Terminado!!");
        }
        else if (CURSOS[numeroComision].claseFinalizada && CURSOS[numeroComision].top10) {
            alert("Felicitaciones, Terminaste Top10!!");
        }
        else if (CURSOS[numeroComision].claseIniciada && CURSOS[numeroComision].cantidadAlumnos === 150) {
            alert("Este curso ya inicio y a maxima capacidad");
        }
        else if (CURSOS[numeroComision].cantidadAlumnos === 150 && CURSOS[numeroComision].claseIniciada === false) {
            alert("Este curso alcanzo el maximo de alumnos");
        }
        else if (CURSOS[numeroComision].claseIniciada && CURSOS[numeroComision].cantidadAlumnos < 150) {
            alert("Este curso ya inicio");
        }
        else {
            alert("Este curso aun no comienza");
        }
    }
    else if (respuesta === "no") {
        return;
    }
    else {
        while (respuesta !== "no" || respuesta !== "si") {
            alert("por favor, ingresa si o no");
            return ingreseComision();
        }
    }

} ingreseComision();















