var boton = document.getElementById('btnCalcular');
boton.addEventListener('click', proceso);

function proceso(){
    var Tarjetas = parseInt(document.getElementById('Tarjetas').value);
    var Precio = parseInt(document.getElementById('Precio').value);
    var resultado;
    if(Tarjetas <= 14){
        resultado = (Tarjetas*Precio);
    }
    else{
        resultado =((Tarjetas*Precio)-(Precio*(10/100)));
    }
    document.getElementById('Montototal').innerHTML = resultado;
}