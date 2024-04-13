var boton = document.getElementById('btnCalcular');
boton.addEventListener('click', calcula);

function calcula(dias){
    var dias = parseInt(document.getElementById('dias').value);
    var resultado;
if (dias % 2==0) {
   resultado =("Es hora de sembrar tomates");

}
 else {
   resultado = ("Es hora de sembrar cebollas");
}



      
    document.getElementById('sembrar').innerHTML = resultado;
}