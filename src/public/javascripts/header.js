window.addEventListener("scroll", function() {
    var encabezado = document.querySelector("header");
    var distanciaScroll = window.scrollY;
  
    if (distanciaScroll > 100) {
      encabezado.classList.add("encabezado-fijo");
    } else {
      encabezado.classList.remove("encabezado-fijo");
    }
  });