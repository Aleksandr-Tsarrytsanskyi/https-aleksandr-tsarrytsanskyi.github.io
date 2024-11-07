window.addEventListener("DOMContentLoaded", () => {
  const slider = document.querySelector(".we_present .swiper")
  const h2 = document.querySelector("#slider .more1 h2");
  const slider3 = document.querySelector("#media_slider3 .swiper");
  console.log(slider3);
  
  if(window.innerWidth <= 1300) {
    slider.classList.remove("slider1")
    slider.classList.add("slider_present1")
  }

  if(window.innerWidth <= 980) {
    slider.classList.remove("slider_present1");
    slider.classList.add("slider_present2");
  }

  if(window.innerWidth <= 650) {
    slider.classList.add("slider_present3")
    slider.classList.remove("slider_present2")
  }

  if(window.innerWidth > 1300) {
    slider.classList.add("slider1")
    slider.classList.remove("slider_present1")
  }

  if(window.innerWidth < 430) {
    h2.innerHTML = "Оборудование и комплексы для <br>3D печати"
  }

  if(window.innerWidth <= 900) {
    slider3.classList.add("new_slider3");
    slider3.classList.remove("slider1_present3");
  }

  if(window.innerWidth >= 900) {
    slider3.classList.add("slider1_present3")
    slider3.classList.remove("new_slider3");
  }

  if(window.innerWidth <= 1275) {
    slider3.classList.remove("slider3");
  }
  const resizableSwiper = (
    breakpoint,
    swiperClass,
    swiperSettings,
    callback
  ) => {
    let swiper;

    breakpoint = window.matchMedia(breakpoint);

    const enableSwiper = function (className, settings) {
      swiper = new Swiper(className, settings);

      if (callback) {
        callback(swiper);
      }
    };

    const checker = function () {
      if (breakpoint.matches) {
        return enableSwiper(swiperClass, swiperSettings);
      } else {
        if (swiper !== undefined) swiper.destroy(true, true);
        return;
      }
    };

    breakpoint.addEventListener("change", checker);
    checker();
  };

  const someFunc = (instance) => {
    if (instance) {
      instance.on("slideChange", function (e) {
        console.log("*** mySwiper.activeIndex", instance.activeIndex);
      });
    }
  };

  resizableSwiper("(max-width: 3500px)", ".slider", {
    loop: true,
    spaceBetween: 10,
    slidesPerView: 1,
    freeMode: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    // autoplay: {
    //     delay: 5000,
    //   },
    pagination: {
      el: ".swiperslider-pagination",
      clickable: true,
    },
    breakpoints: {
      1200: {
        spaceBetween: 20,
      },
    },
  });

    resizableSwiper("(max-width: 3500px)", ".slider1", {
    loop: true,
    spaceBetween: 10,
    slidesPerView: 4,
    freeMode: true,
    navigation: {
      nextEl: ".nextslider",
      prevEl: ".prevslider",
    },
    // autoplay: {
    //     delay: 5000,
    //   },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
      1200: {
        spaceBetween: 20,
      },
    },
    // scrollbar: {
    //   el: '.swiper-scrollbar',
    // },
  });
  resizableSwiper("(max-width: 1300px)", ".slider_present1", {
    loop: true,
    spaceBetween: 10,
    slidesPerView: 3,
    freeMode: true,
    navigation: {
      nextEl: ".nextslider",
      prevEl: ".prevslider",
    },
    // autoplay: {
    //     delay: 5000,
    //   },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
      1200: {
        spaceBetween: 20,
      },
    },
    // scrollbar: {
    //   el: '.swiper-scrollbar',
    // },
  });
  resizableSwiper("(max-width: 980px)", ".slider_present2", {
    loop: true,
    spaceBetween: 10,
    slidesPerView: 2,
    freeMode: true,
    navigation: {
      nextEl: ".nextslider",
      prevEl: ".prevslider",
    },
    // autoplay: {
    //     delay: 5000,
    //   },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
      1200: {
        spaceBetween: 20,
      },
    },
    // scrollbar: {
    //   el: '.swiper-scrollbar',
    // },
  });

  resizableSwiper("(max-width: 650px)", ".slider_present3", {
    loop: true,
    spaceBetween: 10,
    slidesPerView: 1,
    freeMode: true,
    navigation: {
      nextEl: ".nextslider",
      prevEl: ".prevslider",
    },
    // autoplay: {
    //     delay: 5000,
    //   },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
      1200: {
        spaceBetween: 20,
      },
    },
    // scrollbar: {
    //   el: '.swiper-scrollbar',
    // },
  });

  resizableSwiper("(max-width: 3500px)", ".slider2", {
    loop: true,
    spaceBetween: 10,
    slidesPerView: 1,
    freeMode: true,
    navigation: {
      nextEl: ".nextslider",
      prevEl: ".prevslider",
    },
    // autoplay: {
    //     delay: 5000,
    //   },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
      1200: {
        spaceBetween: 20,
      },
    },
    // scrollbar: {
    //   el: '.swiper-scrollbar',
    // },
  });
  resizableSwiper("(max-width: 3500px)", ".slider3", {
    loop: true,
    spaceBetween: 10,
    slidesPerView: 2,
    freeMode: true,
    navigation: {
      nextEl: ".nextslider",
      prevEl: ".prevslider",
    },
    // autoplay: {
    //     delay: 5000,
    //   },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
      1200: {
        spaceBetween: 20,
      },
    },
    // scrollbar: {
    //   el: '.swiper-scrollbar',
    // },
  });
  resizableSwiper("(max-width: 1275px)", ".slider1_present3", {
    loop: true,
    spaceBetween: 10,
    slidesPerView: 2,
    freeMode: true,
    navigation: {
      nextEl: ".nextslider",
      prevEl: ".prevslider",
    },
    // autoplay: {
    //     delay: 5000,
    //   },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
      1200: {
        spaceBetween: 20,
      },
    },
    // scrollbar: {
    //   el: '.swiper-scrollbar',
    // },
  });
  resizableSwiper("(max-width: 900px)", ".new_slider3", {
    loop: true,
    spaceBetween: 10,
    slidesPerView: 1,
    freeMode: true,
    navigation: {
      nextEl: ".nextslider",
      prevEl: ".prevslider",
    },
    // autoplay: {
    //     delay: 5000,
    //   },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
      1200: {
        spaceBetween: 20,
      },
    },
    // scrollbar: {
    //   el: '.swiper-scrollbar',
    // },
  })

});
