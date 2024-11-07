document.addEventListener("DOMContentLoaded", function() {
    const changeBlockInfo = document.querySelector("#change_block_info");
    const changeBlockMore = document.querySelector("#change_block_more");
    const nav = document.querySelectorAll("#nav");
    const info = document.querySelector("#info");
    const moreInformation = document.querySelector("#more_information");
    const link_rewiu = document.querySelector("#link_rewiu");
    const product_reviews = document.querySelector("#show_product_reviews");
    const reviews = document.querySelector("#clearreviews");
    const contact_us = document.querySelector("#more_details .contact_us");
    const showContactForm = document.querySelector("#fixed_form");
    const burger_menu = document.querySelector(".burger_menu");
    const rating = document.querySelectorAll(".rating");
    
    
    rating.forEach(elem => {
        elem.addEventListener("click", function(e) {
            e.target.classList.toggle("add_reting")
        })
    })
   
    contact_us.addEventListener("click", function() {
        showContactForm.classList.add("show_contact")
        showContactForm.classList.remove("hide_contact")
        burger_menu.hidden = true;
       })
 
    nav.forEach(elem => {
     elem.addEventListener("click",function(e) {
         e.preventDefault()
     })
    })
    changeBlockInfo.addEventListener("click",function() {
     info.classList.add("hide_info");
     info.classList.remove("show_info");
     moreInformation.classList.add("show_info");
     changeBlockMore.classList.remove("active")
     changeBlockInfo.classList.add("active_info")
     link_rewiu.classList.remove("active_info")
    
    })
 
    changeBlockMore.addEventListener("click",function() {
     info.classList.add("show_info");
     info.classList.remove("hide_info");
     moreInformation.classList.remove("hide_info");
     moreInformation.classList.remove("show_info");
     changeBlockMore.classList.add("active")
     changeBlockInfo.classList.remove("active_info")
     link_rewiu.classList.remove("active_info")
    })
    link_rewiu.addEventListener("click", function() {
        changeBlockMore.classList.remove("active")
        changeBlockInfo.classList.remove("active_info")
        link_rewiu.classList.add("active_info")
    })
    
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

      resizableSwiper("(max-width: 3500px)", ".slider7", {
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

      resizableSwiper("(max-width: 3500px)", ".slider8", {
        loop: true,
        spaceBetween: 10,
        slidesPerView: 1,
        freeMode: true,
      
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