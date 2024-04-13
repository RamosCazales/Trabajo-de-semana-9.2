var boton = document.getElementById('btnCalcular');
boton.addEventListener('click', proceso);

function proceso(){
    var d = parseInt(document.getElementById('d').value);
    var t = parseInt(document.getElementById('t').value);
    var resultado = d / t;
    document.getElementById('Velocidadfinal').innerHTML = resultado;
}