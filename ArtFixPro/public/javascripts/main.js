document.addEventListener("DOMContentLoaded", function() {
  const tabsQuestions = document.querySelectorAll("#handyman a")
  const tab = document.querySelectorAll("#handyman .box");
  const h1 = document.querySelector("#main .top_slider .h1 h1");
  const image = document.querySelector("#main .image");
  
  const image1 = document.querySelector("main .image1");
 
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
  changesTabs(); 
 })