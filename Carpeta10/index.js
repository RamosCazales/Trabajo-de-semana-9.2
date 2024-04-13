//Forma antigua
var miObjeto = new Object();
//Actual
const persona = {
    nombre: 'Miguel Angel',
    edad: 18,
    apellidos: 'Ramos Cazales',
   saludar: function(){
    return 'Hola!, soy ' +this.nombre+ ' ' +this.apellidos;
   }
};
const persona2 = {
    nombre: 'Jose Luis',
    edad: 24,
    apellidos: 'Serdan',
   saludar: function(){
    return 'Hola!, soy ' +this.nombre+ ' ' +this.apellidos;
   }
};
const persona3 = {
    nombre: 'Andrea',
    edad: 30,
    apellidos: 'Castillo',
   saludar: function(){
    return 'Hola!, soy ' +this.nombre+ ' ' +this.apellidos;
   }
};

let personas = [persona, persona2, persona3];

console.log(personas);
let tabla ='';
for(let i=0; i< personas.length; i++){
    tabla +='<tr><td>'+(i+1)+
    '</td><td>'+personas[i].nombre+
    '</td><td>'+personas[i].apellidos+
    '</td><td>'+personas[i].edad+'</td></tr>'
}
document.getElementById('tabla').innerHTML = tabla;