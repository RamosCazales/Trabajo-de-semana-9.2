var boton = document.getElementById('btnCalcular');
boton.addEventListener('click', procesar);

function procesar(){
    var parcial1 = parseInt(document.getElementById('parcial1').value);
    var parcial2 = parseInt(document.getElementById('parcial2').value);
    var parcial3 = parseInt(document.getElementById('parcial3').value);
    var ordinario = parseInt(document.getElementById('ordinario').value);
    var resultado = (ordinario + ((parcial1 + parcial2 + parcial3)/3))/2;
    document.getElementById('Promediofinal').innerHTML = resultado;
}