const cube = document.getElementById("cube");


let mouseDown = false;
let mouseX = 0, mouseY = 0;
let lastMouseX = 0, lastMouseY = 0;
cube.style.cursor = "grab";


document.addEventListener('mousedown', function(event) {
    mouseDown = true;
    lastMouseX = event.clientX;
    lastMouseY = event.clientY;
    cube.style.cursor = "grabbing";

    mouseX = event.clientX;
    mouseY = event.clientY;

    let deltaX = mouseX - lastMouseX;
    let deltaY = mouseY - lastMouseY;

    cube.rotation.y += deltaX * 0.01;
    cube.rotation.x += deltaY * 0.01;

    lastMouseX = mouseX;
    lastMouseY = mouseY;
}, false);

document.addEventListener('mouseup', function(event) {
    mouseDown = false;
    cube.style.cursor = "grab";
}, false);


