const h1 = document.querySelector("#main .top_slider .h1 h1");
const image = document.querySelector("#main .image");
const label = document.querySelector("#questions label");
const text = document.querySelector("#questions .text");

const image1 = document.querySelector("#main .imag1");

function changeH1() {
    if( window.innerWidth <= 1240) {
        h1.innerHTML = "Transforming Spaces with<br> Artistry and Precision in <br>New York City"
        image.src = "images/media/media_img.png";
        image1.src = "images/media/imag2.png";
        image.style.height = "800px"
        image1.style.height = "800px"
        label.innerHTML = "By clicking “Send” you agree to receive communication emails <br>or calls from us in accordance with our Privacy Policy"
    }

    if( window.innerWidth <= 620) {
        image.src = "images/media/img7.png";
        image1.src = "images/media/img8.png";
    }

    if( window.innerWidth <= 550) {
        image.src = "images/media/img13.png";
        image1.src = "images/media/img14.png";
    }

    if( window.innerWidth <= 941) {
         label.innerHTML = "By clicking “Send” you agree to receive <br>communication emails or calls from us in <br>accordance with our Privacy Policy"
    }

    if( window.innerWidth <= 941) {
        text.innerHTML = "<br>We'd be happy to assist you!"
        text.style.position ="static"
    }
  }
  changeH1();