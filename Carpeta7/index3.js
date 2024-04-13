var btn = document.getElementById("btnFac");
btn.addEventListener('click', ()=>{
    var numero = document.querySelector('#num').value;
    var factorial = 1;
    for(var i=1; i<=numero; i++){
        factorial = factorial * i;
    }
    document.querySelector('#resultado').innerHTML = factorial;
});