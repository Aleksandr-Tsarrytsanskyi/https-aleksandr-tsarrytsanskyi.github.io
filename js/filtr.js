document.addEventListener("DOMContentLoaded", function () {
 const filterBox = document.querySelectorAll("#solutions .box");
 const nav = document.querySelector("#solutions nav");
 const structures = document.querySelector(".structures");

 nav.addEventListener("click", function(event) {
     event.preventDefault();
     if(event.target.tagName !== "A") {
         return false
    }
    let filterCLass = event.target.dataset["f"];
    
    
    filterBox.forEach(elem => {
        structures.classList.add("box")
        elem.style.display = "none"
        if(elem.classList.contains(filterCLass)) {
            elem.style.display = "block"
        }
    })
 })
});
