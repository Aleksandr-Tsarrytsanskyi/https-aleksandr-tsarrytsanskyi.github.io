document.addEventListener("DOMContentLoaded", function() {
    const slider = document.querySelector("#certificates .swiper")
    console.log(slider);
    
    if(window.innerWidth <= 1140) {
        slider.classList.add("media_slider9")
        slider.classList.remove("slider9")
      }
     
      if(window.innerWidth > 1140) {
        slider.classList.remove("media_slider9")
        slider.classList.add("slider9")
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

    resizableSwiper("(max-width: 3500px)", ".slider9", {
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
      })

      resizableSwiper("(max-width: 1140px)", ".media_slider9", {
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
      resizableSwiper("(max-width: 3500px)", ".slider10", {
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
})