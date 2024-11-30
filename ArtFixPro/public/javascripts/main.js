document.addEventListener("DOMContentLoaded", function() {
  const tabsQuestions = document.querySelectorAll("#handyman a")
  const tab = document.querySelectorAll("#handyman .box");
  const button = document.querySelector(".Booking_Summary .bg_Estimated");
  const booking = document.querySelector(".Booking_Summary");
    console.log(booking);
    
  function movingElements() {
    if( window.innerWidth <= 1600) {
    booking.after(button)
    }
    else {
        booking.append(button)
    }

    if( window.innerWidth <= 1100) {
      booking.append(button)
    }
  }
  function changesTabs() {
    tabsQuestions.forEach(tabs => {
        tabs.addEventListener("click", function(event) {
            event.preventDefault();

            let target = event.target.dataset["tabs"]

            tab.forEach(elem => {
                if(elem.classList.contains(target)) {
                    elem.classList.toggle("tabs")
                }
            })
          
        })
    })
  }
  movingElements();
  changesTabs(); 
 })