function showMenu() {
    let x = document.getElementById("enlaces");
    if (x.className == ""){
        x.className += "show";
    }else{
        x.className = "";
    }
}
function hideMenu() {
    let x = document.getElementById("enlaces");
    x.className = "";
}
function validacion() {
    let nombre = document.getElementById("Nombre").value;
    let correo = document.getElementById("Correo").value;
    let mensaje = document.getElementById("Mensaje").value;
    let error = false;
    if ( nombre == null || nombre.length == 0 || /^\s+$/.test(nombre)) {
        error = true;
        alert("Ingrese su nombre y si desea un apellido. Ej. John Doe");
    }
    if ( correo == null || correo.length == 0 || /^\s+$/.test(correo) ){
        error = true;
        alert("Ingrese un correo valido. Ej. johndoe@email.com");
    }
    if ( mensaje == null || mensaje.length == 0 || /^\s+$/.test(mensaje)) {
        error = true;
        alert("Escriba su mensaje o inquietud. Ej. Hola, tengo una duda respecto al costo...");
    }
    if (error == false) {
        alert("Mensaje Enviado. Gracias por comunicarte conmigo.");
    }
}