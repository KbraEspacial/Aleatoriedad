function giro() {
    var elementodiv = document.getElementById('numero');
    var r = Math.floor(Math.random() * 255);
    var g = Math.floor(Math.random() * 255);
    var b = Math.floor(Math.random() * 255);
    var colorRGB = "rgb(" + r + "," + g + "," + b + ")";
    
    elementodiv.style.backgroundColor = colorRGB;

     elementodiv.innerHTML = parseInt(elementodiv.innerHTML)+1;

    if (elementodiv.classList.contains('uno')) {

        elementodiv.classList.remove("uno");
        elementodiv.classList.add("dos");

    }else if(elementodiv.classList.contains("dos")){

        elementodiv.classList.remove("dos");
        elementodiv.classList.add("tres");

    }else if(elementodiv.classList.contains("tres")){

        elementodiv.classList.remove("tres");
        elementodiv.classList.add("cuatro");

    }else if(elementodiv.classList.contains("cuatro")){

        elementodiv.classList.remove("cuatro");
        elementodiv.classList.add("uno");
    }

    // var movimiento = document.getElementById("uno");
    // window.addEventListener("scroll", function() {
    //var scrollY = window.scrollY;
    //var escala = 1 + scrollY * 0.01;
    //movimiento.style.transform = "scale(" + escala + ")";
    //}); 






 
}
function giror() {
    var elementodiv = document.getElementById('numero');
    var r = Math.floor(Math.random() * 256);
    var g = Math.floor(Math.random() * 256);
    var b = Math.floor(Math.random() * 256);
    var colorRGB = "rgb(" + r + "," + g + "," + b + ")";
    
    elementodiv.style.backgroundColor = colorRGB;

     elementodiv.innerHTML = parseInt(elementodiv.innerHTML)-1;

    if (elementodiv.classList.contains('cuatro')) {

        elementodiv.classList.remove("cuatro");
        elementodiv.classList.add("tres");

    }else if(elementodiv.classList.contains("tres")){

        elementodiv.classList.remove("tres");
        elementodiv.classList.add("dos");

    }else if(elementodiv.classList.contains("dos")){

        elementodiv.classList.remove("dos");
        elementodiv.classList.add("uno");

    }else if(elementodiv.classList.contains("uno")){

        elementodiv.classList.remove("uno");
        elementodiv.classList.add("cuatro");
    }
 
}
