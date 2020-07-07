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
    }
    if ( correo == null || correo.length == 0 || /^\s+$/.test(correo) ){
        error = true;
    }
    if ( mensaje == null || mensaje.length == 0 || /^\s+$/.test(mensaje)) {
        error = true;
    }
    if (error == false) {
        alert("Mensaje Enviado. Gracias por comunicarte conmigo.");
    }
}