/* 1era Entrega */

let cursos = {

    46915: {
        cantidadAlumnos: 150,
        claseIniciada: true,
    },
    49810: {
        cantidadAlumnos: 86,
        claseIniciada: true,
    },
    49575: {
        cantidadAlumnos: 94,
        claseIniciada: true,
    },
    53210: {
        cantidadAlumnos: 57,
        claseIniciada: false,
    },
    54060: {
        cantidadAlumnos: 42,
        claseIniciada: false,
    },
    57245: {
        cantidadAlumnos: 21,
        claseIniciada: false,
    },
    57120: {
        cantidadAlumnos: 36,
        claseIniciada: false,
    },

}

function ingreseComision() {
    let numeroComision = parseInt(prompt("Ingrese número de comisión sin el #"));

    while (!(numeroComision in cursos)) {
        numeroComision = parseInt(prompt("Número de comisión no disponible. Ingrese otro número:"));
    }

    if (cursos[numeroComision].claseIniciada || cursos[numeroComision].cantidadAlumnos === 150) {
        alert ("El curso ya inicio o alcanzo el maximo de alumnos");
    
    } else {
        alert ("El curso aun esta disponible");
    }
} ingreseComision();














