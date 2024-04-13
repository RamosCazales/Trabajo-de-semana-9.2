var boton = document.getElementById('btnCalcular');
boton.addEventListener('click', proceso);

function proceso(){
    var a = parseInt(document.getElementById('a').value);
    var b = parseInt(document.getElementById('b').value);
    var resultado = ((a**2) + 2*(a*b) + (b**2));
    document.getElementById('resfinal').innerHTML = resultado;
}