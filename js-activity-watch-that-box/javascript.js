const myBox = document.getElementById("box");

function grow() {
    myBox.style.width = "300px";
}
function blue() {
    myBox.style.backgroundColor = "rgb(0,0,225)";
    myBox.style.opacity = "1";
}
function fade() {
    myBox.style.opacity = ".5";
}
function rs() {
    myBox.style = "height:150px; width:150px; background-color:orange; margin:25px";
}