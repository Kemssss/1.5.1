function init(){
    document.getElementById("knapp").onclick = click;
    document.getElementById("text") = hidden;
}

function click(){
    let text = document.getElementById("text");
    text.hidden = !text.hidden;
}

window.onload = init;