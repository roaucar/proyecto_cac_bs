//Formulario Conviertete en Orador
/*
const form = document.querySelector('form');
const inputNombre = document.getElementById('nomOrador');
const inputApellido = document.getElementById('apeOrador');
const textareaComentario = document.getElementById('comentOrador');

const formulario = document.getElementById('formlario');
formulario.addEventListener('submit',function(e){
  e.preventDefault();
  let nombre = inputNombre.value;
  let apellido = inputApellido.value;
  let comentario = textareaComentario.value;
  console.log('Nombre: ' + nombre);
  console.log('Apellido: ' + apellido);
  console.log('Comentario: ' + comentario);

  inputNombre.value = '';
  inputApellido.value = '';
  textareaComentario.value = '';
});*/


// Formulario de compra
const formCompra = document.getElementById('formCompra');
formCompra.addEventListener('submit',function(e){
  e.preventDefault();
  let nombre = document.getElementById('inputnombre').value;
  let apellido = document.getElementById('inputapellido').value;
  let email = document.getElementById('inputemail').value;
  console.log(nombre,apellido,email);
})
function calcularTotal() {
  const cantidad = parseInt(inputCantidad.value);
  const categoria = parseInt(inputCategoria.value);
  const valorTicket = 200;
  let descuento = 0;
   
  switch (categoria) {
    case 1:
      descuento = 0.8; 
      break;
    case 2:
      descuento = 0.5; 
      break;
    case 3:
      descuento = 0.15; 
      break;
    default:
      descuento = 0; 
      break;
  }
const resltadoTotal = document.getElementById('resultadoTotal')
  const total = cantidad * valorTicket * (1 - descuento);
  resltadoTotal.value = '$' + total.toFixed(2);
  console.log('Total a pagar: $' + total.toFixed(2));

}

inputCantidad.addEventListener('change', calcularTotal);
inputCategoria.addEventListener('change', calcularTotal);


