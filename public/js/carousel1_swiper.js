var swiper = new Swiper(".carousel1", {
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    autoplay: {
        delay: 3000, // Tiempo en milisegundos entre cada cambio de slide
        disableOnInteraction: false, // Permite que el autoplay continúe incluso si el usuario interactúa con el slider
      },
    loop: true, // Permite que el slider se desplace de forma continua y se repita al llegar al último slide
  });