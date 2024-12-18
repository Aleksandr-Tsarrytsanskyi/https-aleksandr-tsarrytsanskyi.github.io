document.addEventListener("DOMContentLoaded", function() {

    const full_price = document.querySelector(".Estimated .full_price");
    function canculate() {
        const product = document.querySelectorAll(".Booking_Summary img");
        const radio = document.querySelectorAll("#project input[type='radio']");
        const radios = document.querySelectorAll("#getradio input");
        const radio1 = document.querySelectorAll("#getradio1 input");
        const tv_size = document.querySelector(".Booking_Summary .tv_size .tv_name");
        const size = document.querySelector(".Booking_Summary .tv_size");
        const allprices = document.querySelector(".Booking_Summary .tv_size .prices");
        const text = document.querySelector(".Booking_Summary .tv_size .text");
       
        
        product.forEach(close => {
            close.addEventListener("click", function(event) {
               let events = event.target
               events.parentElement.parentElement.style.display = "none"
            })
            console.log(close.parentElement.parentElement );
            
            
        })
        radios.forEach(radio => {
            radio.addEventListener("click", function(e) {
                let price = +e.target.nextElementSibling.lastElementChild.innerHTML
                let name = e.target.nextElementSibling.children[0].innerHTML
                let calprice = e.target.nextElementSibling.children[1].innerHTML
                size.style.display = "block"
                tv_size.innerHTML = name
                allprices.innerHTML = calprice
               
               addition(price);
               
            })
            
        })
        radio1.forEach(radio => {
            radio.addEventListener("click", function(e) {
                let price = +e.target.nextElementSibling.lastElementChild.innerHTML
                let result2 = 0
               getproduct(price);
            })
            
        })
        
    }
    
    
    
    let number = +full_price.innerHTML;
    let result;
    function addition(product1) {
  
        
        result =  number = product1
        full_price.innerHTML = result
        // let prices = []
        // prices.push(product1);
       return result
        
    }

    function getproduct(product2) {
        let result2 = 0;
    
        result2 = number = product2
        full_price.innerHTML = result2
       
        
        // let prices = []
        // prices.push(product2);
        
    }
    canculate();
})