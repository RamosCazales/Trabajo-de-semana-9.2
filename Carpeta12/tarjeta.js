export class Tarjeta{
    col='';
    nombre='';
    url='';
    constructor(c, n, u){
        this.col=c;
        this.nombre=n;
        this.url=u;
    }
    mostrar(){
        let card='<div class="col-md-'+this.col+'">';
        card +='<div class="card">';
        card += '<img src="..." class="card-img-top">';
        card += '<div class="card-body">';
        card += '<h5 class="card-title">Card title</h5>'
        card += '<p class="card-text">Algo</p>'
        card += '<a href="#" class="btn btn-primary">Go somewhere</a>'
    }
}