function showMenu() {
    let x = document.getElementById("enlaces")
    if (x.className == ""){
        x.className += "show"
    }else{
        x.className = ""
    }
}
function hideMenu() {
    let x = document.getElementById("enlaces")
    x.className = ""
}