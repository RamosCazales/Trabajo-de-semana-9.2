var btn = document.getElementById('btnfib');
btn.addEventListener('click', ()=>{
    var numero = parseInt(document.querySelector('#num').value);
    var inicial = parseInt(document.querySelector('#ini').value);
    var fib = [];
    fib[0] = 0;
    fib[1] = 1;
    var texto = 'serie de fibonacci con ' + numero + ' terminos:';
    if(numero === 1){
        texto = inicial;
    } else if (numero >=2){
        texto += inicial + ',' + fib[1];
        for(var i=2; i<numero + 2; i++){
            fib[i] = fib[i-1] + fib[i-2];
            texto += ',' + fib[i];
        }
    }
    document.querySelector('#resultado').textContent=texto;
});