const h1 = document.querySelector("#main .top_slider .h1 h1");
const image = document.querySelector("#main .image");
const label = document.querySelector("#questions label");

const image1 = document.querySelector("#main .imag1");

function changeH1() {
    if( window.innerWidth <= 1240) {
        h1.innerHTML = "Transforming Spaces with<br> Artistry and Precision in <br>New York City"
        image.src = "images/media/media_img.png";
        image1.src = "images/media/imag2.png";
        label.innerHTML = "By clicking “Send” you agree to receive communication emails <br>or calls from us in accordance with our Privacy Policy"
    }
  }
  changeH1();