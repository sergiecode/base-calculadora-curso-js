function agregarALaPantalla(value) {
    document.getElementById('pantalla').value += value;
}

function calcular() {
    const valorPantalla = document.getElementById('pantalla').value;
    const result = eval(valorPantalla);
    document.getElementById('pantalla').value = result;
}

function limpiarPantalla() {
    document.getElementById('pantalla').value = '';
}

function deshacer(){
    const valorPantalla = document.getElementById('pantalla').value;
    const resultado = valorPantalla.slice(0,-1)
    document.getElementById('pantalla').value = resultado;
}
