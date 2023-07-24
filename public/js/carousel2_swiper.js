var swiper = new Swiper(".carousel2", {
    slidesPerView: 3,
    spaceBetween: 30,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next", // Selector del elemento para la flecha siguiente
        prevEl: ".swiper-button-prev", // Selector del elemento para la flecha anterior
    },
    breakpoints: {
        // Configuración para cuando el ancho de la ventana es igual o mayor a 390px
        320: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        1024: {
            slidesPerView: 4,
            spaceBetween: 20,
        },

    },
  });