document.addEventListener("DOMContentLoaded",function() {
    const links = document.querySelectorAll("#support a");
    const supportContent1 = document.querySelector("#support .show1");
    const supportContent2 = document.querySelector("#support .show2");
    const supportContent3 = document.querySelector("#support .show3");
    const supportContent4 = document.querySelector("#support .show4");
    const supportContent5 = document.querySelector("#support .show5");
   
    console.log(supportContent1);
    

    links.forEach(elem => {
        elem.addEventListener("click", function(e) {
            e.preventDefault();
            e.target.classList.toggle("support_arrow_bottom")
            if(e.target.innerHTML == "Мы работаем только в Казахстане?") {
                supportContent1.classList.toggle("content_show_support");
            }

            if(e.target.innerHTML == "Как оформить заказ на наши услуги?") {
                supportContent2.classList.toggle("content_show_support");
            }
            if(e.target.innerHTML == "Есть ли возможность организовать встречу в офисе?") {
                supportContent3.classList.toggle("content_show_support");
            }
            if(e.target.innerHTML == "Как нас найти?") {
                supportContent4.classList.toggle("content_show_support");
            }
            if(e.target.innerHTML == "Как связаться с нашей службой поддержки?") {
                supportContent5.classList.toggle("content_show_support");
            }
        })
    })
})