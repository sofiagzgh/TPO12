function validaForm() {
    
    //valido el nombre
    if (document.contacto.nombre.value.length == 0) {
        let error = document.getElementById("errorNombre");
        error.innerHTML = "Debe ingresar su nombre.";
        error.style.color = "red";
        error.style.marginLeft = "2em";
        document.contacto.nombre.focus()
        return 0;
    }

    //valido el apellido
    if (document.contacto.apellido.value.length == 0) {
        let error = document.getElementById("errorApellido");
        error.innerHTML = "Debe ingresar su apellido.";
        error.style.color = "red";
        error.style.marginLeft = "2em";
        document.contacto.apellido.focus();
        return 0;
        
    }

    //Valido el teléfono
     if (document.contacto.telefono.value.length == 0 || document.contacto.telefono.value.length < 8) {
        let error = document.getElementById("errorTelefono");
        error.innerHTML = "Debe ingresar su teléfono";
        error.style.color = "red"; 
        error.style.marginLeft = "2em";
        document.contacto.telefono.focus();
        return 0;
     } 

    //valido el email
    if (document.contacto.email.value.length == 0) {
        let error = document.getElementById("errorEmail");
        error.innerHTML = "Debe ingresar una dirección de correo válida.";
        error.style.color = "red";
        error.style.marginLeft = "2em";
        document.contacto.email.focus();
        return 0;
        
    }
   
    //Valido si es alumn@
    if (document.contacto.alumno[0].checked == false && document.contacto.alumno[1].checked == false) {
        let error = document.getElementById("errorAlumno");
        error.innerHTML = "Debe especificar si es alumno de la institución.";
        error.style.color = "red";
        error.style.marginLeft = "2em";
        return 0;
    }

    //valido la sede
    if (document.contacto.sede.selectedIndex == 0) {
        let error = document.getElementById("errorSede");
        error.innerHTML = "Debe seleccionar una sede.";
        error.style.color = "red";
        error.style.marginLeft = "2em";
        document.contacto.sede.focus();
        return 0;
    }

    //Valido el campo del mensaje
    if (document.contacto.mensaje.value.length < 5) {
        let error = document.getElementById("errorMensaje");
        error.innerHTML = "Debe ingresar un mensaje.";
        error.style.color = "red";
        error.style.marginLeft = "2em";
        document.contacto.mensaje.focus();
        return 0;
    }

    //el formulario se envia
     alert("Gracias por comunicarse con nosotros, su consulta será respondida a la brevedad.");
     document.contacto.submit();
}
