## Link al curso completo de Javascript en Youtube:
[VIDEO CURSO GRATIS COMPLETO: JavaScript Desde Cero por Sergie Code](https://youtu.be/N8Xt5rP_DUo)


# Tutorial de Calculadora en JavaScript

Link para ver resultado: [CALCULADORA TRABAJO TERMINADO](https://calculadora-tutorial-js.netlify.app/)

Este es un tutorial que te guiará a través del proceso de creación de una calculadora utilizando JavaScript. El código HTML y CSS necesario para la interfaz de la calculadora estará disponible en el repositorio, por lo que nos centraremos en explicar el funcionamiento del código JavaScript a continuación.

## Funciones Principales

### `agregarALaPantalla(value)`

Esta función se encarga de agregar el valor proporcionado a la pantalla de la calculadora. Recibe un parámetro `value` que representa el valor que se debe agregar. Utiliza `document.getElementById('pantalla')` para obtener el elemento de la pantalla por su identificador y luego actualiza el valor del campo `value` concatenando el nuevo valor.

    function agregarALaPantalla(value) {
        document.getElementById('pantalla').value += value;
    }

### `calcular()`

La función `calcular()` se ejecuta cuando se presiona el botón de igual (=) en la calculadora. Primero, obtiene el valor actual de la pantalla utilizando `document.getElementById('pantalla').value`. Luego, utiliza la función `eval()` para evaluar la expresión matemática representada por el valor de la pantalla. El resultado se almacena en la variable `result`. Finalmente, se actualiza el valor de la pantalla con el resultado calculado.

    function calcular() {
        const valorPantalla = document.getElementById('pantalla').value;
        const result = eval(valorPantalla);
        document.getElementById('pantalla').value = result;
    }

Es importante tener en cuenta que el uso de `eval()` puede presentar riesgos de seguridad si se permite que los usuarios ingresen código arbitrario. En este caso, asumimos que el código solo se ejecutará en un entorno seguro.

### `limpiarPantalla()`

La función `limpiarPantalla()` se utiliza para borrar el contenido de la pantalla de la calculadora. Simplemente asigna una cadena vacía al campo `value` del elemento de la pantalla.

    function limpiarPantalla() {
        document.getElementById('pantalla').value = '';
    }

## Integración con HTML y CSS

Para utilizar estas funciones, asegúrate de tener un elemento HTML con el id "pantalla" que represente la pantalla de la calculadora. Puedes ver el código HTML y CSS correspondiente en los archivos proporcionados en el repositorio.

Recuerda que puedes personalizar la interfaz y agregar más funcionalidades según tus necesidades.

¡Ahora estás listo para crear tu propia calculadora en JavaScript! Sigue este tutorial y diviértete explorando el mundo de la programación web.
