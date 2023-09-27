/*

Las pruebas unitarias son una parte fundamental de la ingenieria de software, tiene como objetivo verificar la funcionalidad de una unidad de codigo. Vamos a entender por unidad de codigo a la parte mas pequenia que se puede "testear" o probar en una aplicacion, por ejemplo:

    - Ciclos
    - Funciones
    - Metodos
    - Etc.


Realizar pruebas unitarias tiene demasiadas ventajas, ya que nos va a permitir asegurarnos que el codigo funciona segun lo esperado, ademas nos va a ayudar a encontrar errores de forma mucho mas sencilla, para realizar las modificaciones necesarias sin comprometer el codigo.

Tambien nos ayuda a garantizar que el codigo sigue evolucionando o escalando, permitiendo que las caracteristicas anteriores sigan funcionando y no se "rompan" con los nuevos cambios

*/

//Escenario ficticio 
function promedio (cal1, cal2, cal3){
    let promedio = (cal1 + cal2 + cal3) / 3; //formula para calcular un promedio

//Ciclo para calcular aprobado o reprobado 

    if(promedio >= 6){
        console.log("Felicidades, aprobaste");
    }else{
        console.log("Necesitas estudiar mas, estas reprobado (a)")
    }
}

promedio(6,7,-8) //promedio 7

//Que pasa si no ingreso las 3 calificaciones 
//Que sucede si una de estas calificaciones es un valor valor no numerico?
//Que pasa si una de nuestras calificaciones es un valor negativo?

//Creamos una calcula basica que trabaje con las 4 operaciones fundamentales (suma, resta, multiplicacion, division) para trabajar con pruebas unitarias

//suma
function suma (num1, num2){
    return num1 + num2;
}
//resta
function resta (num1, num2){
    return num1 - num2;
}
//multiplicacion
function multiplicacion (num1, num2){
    return num1 * num2;
}
//division
function division (num1, num2){
    return num1 / num2;
}


/*Para manejar nuestras pruebas unitarias, utilizamos JEST

    -JUnit (Java)
    -NUnit (.net)
    -Pytest (Python)
    -JEST (JS)

JEST es un marco de pruebas de JS mantenido por FB, enfocado a hacer pruebas unitarias de la forma mas simple posible. 

Para poder trabajar con JEST, necesitamos algunas consideraciones:


*/

module.exports = {suma, resta, multiplicacion, division}; //exportamos las funciones para poder utilizarlas en el archivo de pruebas