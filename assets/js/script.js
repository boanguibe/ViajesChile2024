/* alert("Probando js"); */
/* Agregando tooltip a boton formulario */
var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
  return new bootstrap.Tooltip(tooltipTriggerEl)
})


$(function(){
    // Probando doble click en parrafo para esconder
    $('p').dblclick(function(){
        $(this).hide('slow')
    })

     //Mensaje enviado por boton
     /* $('button').click(function(event){
            alert("El Correo fue enviado correctamente");
    }) */


    // Mensaje enviado por submit        
    $('#formulario').submit(function(event){
        event.preventDefault();
        //llamar a funcion que valida
        console.log(event);
        alert("Mensaje enviado Exitosamente")
        this.submit();
    
    })
})