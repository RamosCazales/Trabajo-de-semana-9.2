var boton = document.getElementById('btnCalcular');
boton.addEventListener('click', procesar);

function procesar(){
    var precio = parseInt(document.getElementById('precio').value);
    var descuento = document.getElementById('descuento').value;
    var resultado = precio - (precio * (descuento/100));
    document.getElementById('Preciofinal').innerHTML = resultado;
}