// Variable del boton agregar producto
const $addProducto = document.getElementById("addProducto");


$addProducto.addEventListener('click', AgregrarProducto);


function Burbuja(clase, texto){
const main = document.getElementById('main');
const div = document.createElement('div');
div.setAttribute('class', clase);
div.setAttribute('id', 'autoeliminado');
main.prepend(div);
const span = document.createElement('span');
span.innerHTML = texto;
div.append(span);
}

function autoeliminado(){
const main = document.getElementById('main');	
const autoeliminado = document.getElementById('autoeliminado');
autoeliminado.remove();
}



function AgregrarProducto (){
/* Agregando un div al body */	
const div = document.createElement('div');
const body = document.getElementById('body');
div.setAttribute('class', 'fondo');
div.setAttribute('id', 'fondo');
body.prepend(div);
/* fin */

/* Agregando otro div al div anterior */
const div2 = document.createElement('div');
div2.setAttribute('class', 'fondoCont');
div2.setAttribute('id', 'fondoCont');
div.prepend(div2);
/* fin */

/* Agregando un parrafo al div anterior */
const parrafo = document.createElement('p');
parrafo.innerHTML = "Agregar producto";
div2.prepend(parrafo);

const nombre = document.createElement('label');
div2.append(nombre);
nombre.innerHTML = "Nombre del producto: ";
const $nombre = document.createElement('input');
$nombre.setAttribute('type', 'text');
$nombre.setAttribute('id', 'nombre');
$nombre.setAttribute('name', 'Nombre del producto');
$nombre.setAttribute('required', '');
nombre.append($nombre);

const tipo = document.createElement('label');
div2.append(tipo);
tipo.innerHTML = "Tipo de producto: ";
const $tipo = document.createElement('input');
$tipo.setAttribute('type', 'text');
$tipo.setAttribute('id', 'tipo');
$tipo.setAttribute('name', 'Tipo de producto');
$tipo.setAttribute('required', '');
tipo.append($tipo); 

const precio = document.createElement('label');
div2.append(precio);
precio.innerHTML = "Precio del producto: ";
const $precio = document.createElement('input');
$precio.setAttribute('type', 'number');
$precio.setAttribute('id', 'precio');
$precio.setAttribute('name', 'Precio del producto');
$precio.setAttribute('required', '');
precio.append($precio);

const foto = document.createElement('label');
div2.append(foto);
foto.innerHTML = "Foto: ";
const $foto = document.createElement('input');
$foto.setAttribute('type', 'file');
$foto.setAttribute('accept', '.png, .jpg, .svg');
$foto.setAttribute('id', 'foto');
$foto.setAttribute('name', 'foto');
foto.append($foto);

const div3 = document.createElement('div');
div2.append(div3);
const cancelar = document.createElement('button');
cancelar.setAttribute('id', 'aceptar');
cancelar.innerHTML = "Aceptar";
div3.append(cancelar);

const aceptar = document.createElement('button');
aceptar.innerHTML = "Cancelar";
aceptar.setAttribute('id', 'cancelar');
div3.append(aceptar);

const $cancelar = document.getElementById('cancelar');
const $aceptar = document.getElementById('aceptar');
const $fondo = document.getElementById('fondo');
const inputs = document.getElementsByTagName('input');

$cancelar.addEventListener('click', () =>{$fondo.remove()});

$aceptar.addEventListener('click', () => {
const textNombre = document.getElementById('nombre').value;
const textTipo = document.getElementById('tipo').value;
const textPrecio = document.getElementById('precio').value;
const foto = document.getElementById('foto').files[0];
const $foto = document.getElementById('foto').value;
 if(textNombre.length > 0 && textTipo.length > 0 && textPrecio.length > 0 && $foto.length > 0){
const foto2 = document.getElementById('foto').files[0].type;

if((foto2 == 'image/jpeg' || foto2 == 'image/png' || foto2 == 'image/svg')){
const $contProducto = document.getElementById('contProducto');

const caja = document.createElement('div');
caja.setAttribute('class', 'caja');
caja.setAttribute('name', textTipo);
$contProducto.append(caja);

const h1 = document.createElement('h1');
h1.innerHTML = textNombre;
caja.append(h1);

const parrafo1 = document.createElement('p');
parrafo1.innerHTML = 'Tipo de producto: ' + textTipo;
caja.append(parrafo1);

const parrafo2 = document.createElement('p');
parrafo2.innerHTML = 'Precio del producto: ' + '$' + textPrecio;
caja.append(parrafo2);

const img = document.createElement('img');
var fileReader = new FileReader();

fileReader.readAsDataURL(foto);

fileReader.onload = function(){
	img.setAttribute('src', fileReader.result);
}

caja.append(img);


const borrar = document.createElement('img');
borrar.setAttribute('id', 'borrar');
borrar.setAttribute('class', 'borrar');
borrar.setAttribute('src', '../img/eliminar.svg');

caja.append(borrar);
div.remove();
Burbuja('true', 'Producto agregado');
setTimeout(autoeliminado, 5000);

const eliminar = document.getElementsByClassName('borrar'); 
for (var i = 0; i < eliminar.length; i++) {
	
    eliminar[i].addEventListener('click', (e) =>{
     
    e.path[1].remove();
	Burbuja('false', 'Producto eliminado');
	setTimeout(autoeliminado, 5000);
	});
}	
}else{const span = document.getElementsByTagName('span')
if (span.length == 0) {
 const etiqueta = document.createElement('span');
 etiqueta.setAttribute('id', 'error');
 etiqueta.innerHTML = 'Solo se aceptan imagenes (.png, .jpg, .svg)'
 fondoCont.append(etiqueta);	
}	
}


}

else{
const inputs = document.getElementsByTagName('input');  
for (var i = 0; i < inputs.length; i++) {
		
		if(inputs[i].value == 0){
		inputs[i].setAttribute('class', 'novalue');
		}
		else{
		var  valores2 = inputs[i].id;
		document.getElementById(inputs[i].id).classList.remove('novalue');
		}
	}	
}	

});

}


