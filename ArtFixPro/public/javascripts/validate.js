import { arr } from "./districts.js";
document.addEventListener("DOMContentLoaded", function() {
    const questions = document.querySelector("#questions .questions");
    const imgError = document.querySelectorAll("#questions .img");
    const button = document.querySelector(".zip_code button");
    const zipCode = document.querySelector(".zip_code");
    const bgbutton = document.querySelector(".zip_code .button");
    const error = document.querySelector("#errorzip");
    const errors = document.querySelectorAll("._error");
    let codes = zipCode.elements
    let {code} = codes
    let inputs = questions.elements;
    let {email ,lastname, firstname, phone, message, checkbox} = inputs;
    errors.forEach(elem => {
        elem.addEventListener("click", function(e) {
           console.log(e.target);
           
           
        })
    })
    questions.addEventListener("submit", function(event) {
        event.preventDefault();
        formvalidate();
        let error = formvalidate();
       
        if(error === 0) { 
            
        }
    });
    
    function formvalidate(form) {
        let error = 0
        
        let formReq = document.querySelectorAll("._req");
        let regExpEmail = /^[A-Z0-9._%+-]+@[A-Z0-9-]+.+.[A-Z]{2,4}$/i
        const regExp = new RegExp(regExpEmail);
        formReq.forEach(input => {
            formremoveError(input);
            if (input.classList.contains("email")) {
                if(!regExp.test(input.value)) {
                    formaddError(input);
                    console.log("asfasf");
                    error++
                }
            }
            else 
            if(input.value === "") {
                formaddError(input);
                error++;
            }

            else if(firstname.value.length < 3) {
                formaddError(input);
                
            }
            else if(firstname.value.length > 3) {
                formImgError(input);
            }
              if(checkbox.checked == false) {
                checkbox.classList.add("chekboxError")
                console.log("ok");
                
                error++;
            }
           
            else {
                formImgError(input);
                checkbox.classList.remove("chekboxError")
                console.log("else");
            }
        })  
        return error
    }

    function formChekboxError(input) {
        input.classList.add("chekboxError")
    }

    function formaddError(input) {
         input.classList.add("_error");
    }

    function formremoveError(input) {
        input.classList.remove("_error");
        input.classList.remove("input_show");
        imgError.forEach(elem => {
            elem.classList.remove("_req_imgerrors");
            elem.style.display = "none";
        })
    }
    
    function formImgError(input) {
        input.classList.add("input_show");

       
        imgError.forEach(elem => {
            elem.style.display = "block";
        })
    }

    function emailTest(input) {
       return /^[A-Z0-9._%+-]+@[A-Z0-9-]+.+.[A-Z]{2,4}$/i.test(input.value);
       
    }

    function getZipCode() {
        // let codes  = [{
        //     Manhattan: [10001, 10282],
        //     StatenIsland: [10301, 10314],
        //     Bronx: [10451, 10475]
        // }]
       
        let span = document.createElement("span")
        zipCode.addEventListener("click", function(e) {
            e.preventDefault();
        })
        zipCode.addEventListener("input", function() {
            
            button.classList.remove("zip_code_arrow")
            bgbutton.classList.remove("zip_code_bg") 
            error.classList.add("errorzipshows");
            arr.forEach(elem => {
                elem.forEach(zip => {
                    if(+code.value == zip) {
                        console.log(error);
                        bgbutton.classList.add("zip_code_bg"); 
                        button.classList.add("zip_code_arrow");
                        error.classList.remove("errorzipshows");
                    }
                    
                })
                
            })
        })
    }
    getZipCode()
})