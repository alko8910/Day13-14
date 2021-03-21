// Open the Modal
function openModal() {
  document.getElementById("myModal").style.display = "block";
}

// Close the Modal
function closeModal() {
  document.getElementById("myModal").style.display = "none";
}

var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides((slideIndex += n));
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("demo");
  var captionText = document.getElementById("caption");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
  captionText.innerHTML = dots[slideIndex - 1].alt;
}

// SECOND TASK //

//var slika1 = document.getElementsByClassName("img-modal");
var black;

function mojaFunkcija() {
  var first = document.querySelector(".first");
  first.classList.add("black");
  var img = document.querySelector(".img-modal");
  img.style.opacity = 0.5;
  var h = document.createElement("H1");
  h.innerHTML = "Marathon";
  document.first.appendChild(h);
  h.style.color = "white";
}
function mojaFunkcija1() {
  var first = document.querySelector(".first");
  first.classList.remove("black");
  var img = document.querySelector(".img-modal");
  img.style.opacity = 1;
}
function mojaFunkcija2() {
  var second = document.querySelector(".second");
  second.classList.add("black");
  var img = document.querySelector(".img1");
  img.style.opacity = 0.5;
}
function mojaFunkcija3() {
  var second = document.querySelector(".second");
  second.classList.remove("black");
  var img = document.querySelector(".img1");
  img.style.opacity = 1;
}

function mojaFunkcija4() {
  var second = document.querySelector(".treci");
  second.classList.add("black");
  var img = document.querySelector(".img2");
  img.style.opacity = 0.5;
}
function mojaFunkcija5() {
  var second = document.querySelector(".treci");
  second.classList.remove("black");
  var img = document.querySelector(".img2");
  img.style.opacity = 1;
}

function mojaFunkcija6() {
  var second = document.querySelector(".cetvrti");
  second.classList.add("black");
  var img = document.querySelector(".img3");
  img.style.opacity = 0.5;
}
function mojaFunkcija7() {
  var second = document.querySelector(".cetvrti");
  second.classList.remove("black");
  var img = document.querySelector(".img3");
  img.style.opacity = 1;
}

function mojaFunkcija8() {
  var second = document.querySelector(".peti");
  second.classList.add("black");
  var img = document.querySelector(".img4");
  img.style.opacity = 0.5;
}
function mojaFunkcija9() {
  var second = document.querySelector(".peti");
  second.classList.remove("black");
  var img = document.querySelector(".img4");
  img.style.opacity = 1;
}

function mojaFunkcija10() {
  var second = document.querySelector(".sesti");
  second.classList.add("black");
  var img = document.querySelector(".img5");
  img.style.opacity = 0.5;
}
function mojaFunkcija11() {
  var second = document.querySelector(".sesti");
  second.classList.remove("black");
  var img = document.querySelector(".img5");
  img.style.opacity = 1;
}

function mojaFunkcija12() {
  var second = document.querySelector(".sedmi");
  second.classList.add("black");
  var img = document.querySelector(".img6");
  img.style.opacity = 0.5;
}
function mojaFunkcija13() {
  var second = document.querySelector(".sedmi");
  second.classList.remove("black");
  var img = document.querySelector(".img6");
  img.style.opacity = 1;
}

function mojaFunkcija14() {
  var second = document.querySelector(".osmi");
  second.classList.add("black");
  var img = document.querySelector(".img7");
  img.style.opacity = 0.5;
}
function mojaFunkcija15() {
  var second = document.querySelector(".osmi");
  second.classList.remove("black");
  var img = document.querySelector(".img7");
  img.style.opacity = 1;
}

function mojaFunkcija16() {
  var second = document.querySelector(".deveti");
  second.classList.add("black");
  var img = document.querySelector(".img8");
  img.style.opacity = 0.5;
}
function mojaFunkcija17() {
  var second = document.querySelector(".deveti");
  second.classList.remove("black");
  var img = document.querySelector(".img8");
  img.style.opacity = 1;
}

function mojaFunkcija18() {
  var second = document.querySelector(".deseti");
  second.classList.add("black");
  var img = document.querySelector(".img9");
  img.style.opacity = 0.5;
}
function mojaFunkcija19() {
  var second = document.querySelector(".deseti");
  second.classList.remove("black");
  var img = document.querySelector(".img9");
  img.style.opacity = 1;
}
