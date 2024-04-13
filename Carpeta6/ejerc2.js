var btn = document.getElementById('btn1');
btn.addEventListener('click', () => {
    var tabla = parseInt(document.querySelector('#tabla').value);
    var numero = parseInt(document.querySelector('#ini').value);
    var resultado = ' ';
    for (var i=10; i>=1; i--){
        resultado += tabla + ' x ' + i + ' = ' + (tabla*i) + '<br>'
        
    }
    document.getElementById('div1').innerHTML = resultado;
});