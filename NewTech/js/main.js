document.addEventListener("DOMContentLoaded" ,init)

function init() {
   const contactForn = document.querySelector("#send_contacts");
   const contactus = document.querySelector(".contactus");
   const showContactForm = document.querySelector("#bg_contact_form");
   const close_form = document.querySelector(".close_form");
   const main_icon = document.querySelector(".main_icon");
   const shooBurgerMenu = document.querySelector("#logo .cell:nth-child(2)");
   const span1 = document.querySelector(".burger_menu .icon1");
   const span2 = document.querySelector(".burger_menu .icon3");
   const span3 = document.querySelector(".burger_menu .hide_icon");
   const span = document.querySelectorAll(".burger_menu span");
   const burger_menu = document.querySelector(".burger_menu");
   const productLink = document.querySelectorAll("#cancel a");
   const item0 = document.querySelector("#item0");
   const item1 = document.querySelector("#item1");
   const item2 = document.querySelector("#item2");
   const item3 = document.querySelector("#item3");
   const item4 = document.querySelector("#item4");
   const item5 = document.querySelector("#item5");
   const item6 = document.querySelector("#item6");
   const product = document.querySelectorAll(".grid_product .cell");
   const sliderarrow = document.querySelector(".swiper-button-next");
   
   product.forEach(elem => {
    elem.addEventListener("click", function(event) {
        document.location.assign("./producnt_info.html")
    })
    
   })
    
   contactForn.addEventListener("submit",function(event) {
    event.preventDefault();
   }) 

   productLink.forEach(elem => {
    elem.addEventListener("click", function(event) {
        event.preventDefault();
        event.target.classList.toggle("prosuct_arrow_show")
        if(event.target.innerHTML == "Производители") {
            item0.classList.toggle("product_hide")
        }
        if(event.target.innerHTML == "Тип") {
            item1.classList.toggle("product_hide")
        }
        if(event.target.innerHTML == "Цветность") {
            item2.classList.toggle("product_hide")
        }
        if(event.target.innerHTML == "Технология печати") {
            item3.classList.toggle("product_hide")
        }
        if(event.target.innerHTML == "Месячная нагрузка") {
            item4.classList.toggle("product_hide")
        }
        if(event.target.innerHTML == "Формат бумаги") {
            item5.classList.toggle("product_hide")
        }
        if(event.target.innerHTML == "Скорость печати (ЧБ)") {
            item6.classList.toggle("product_hide")
        }
        if(event.target.innerHTML == "Скорость печати (Цвет)") {
            item7.classList.toggle("product_hide")
        }
        
    })
   })

   contactus.addEventListener("click", function() {
    showContactForm.classList.add("show_contact")
    showContactForm.classList.remove("hide_contact")
    burger_menu.hidden = true;
   })
   close_form.addEventListener("click", function() {
    showContactForm.classList.add("hide_contact")
    showContactForm.classList.remove("show_contact")
    burger_menu.hidden = false;
   })

   main_icon.addEventListener("click", function() {
    span.forEach(elem => {
        elem.classList.toggle("icon_menu_color");
    })
    shooBurgerMenu.classList.toggle("show_burger_menu");
    span1.classList.toggle("rotate_icon1");
    span2.classList.toggle("rotate_icon3");
    span3.classList.toggle("hide_icons");
   })
}