var boton = document.getElementById('btnCalcular');
boton.addEventListener('click', proceso);

function proceso(){
    var piezas = parseInt(document.getElementById('piezas').value);
    var precio = parseInt(document.getElementById('precio').value);
    var resultado;
    if(piezas < 5650){
        resultado = (precio+0.25);
    }
    else{
        resultado =(precio+(piezas*0.3));
    }
    document.getElementById('Sueldototal').innerHTML = resultado;
}
