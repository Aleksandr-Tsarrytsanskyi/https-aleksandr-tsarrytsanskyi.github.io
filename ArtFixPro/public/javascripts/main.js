document.addEventListener("DOMContentLoaded", function() {
  const tabsQuestions = document.querySelectorAll("#handyman a")
  const tab = document.querySelectorAll("#handyman .box");
 
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