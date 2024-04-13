var btn = document.getElementById("btnSuc");
btn.addEventListener('click', ()=>{
    var serie = parseInt(document.querySelector('#serie').value);
    var fib = [];
    fib[0] = 0;
    fib[1] = 1;
    var texto = 'Serie de fibonacci con' + numero + 'terminos:'
    if( numero ===1){
        texto += fib[0];
    }
    else if (numero >= 2) {
        
    }
    suma = suma.slice(0, texto.length - 2);
    texto +=' = '+ factorial;
    document.querySelector('#resultado').innerHTML = suma;
});