


const dropdown = document.querySelector('.dropdown');
const productLink = document.querySelector('.nav-links li:nth-child(2) a');

productLink.addEventListener('mouseover', function() {
  dropdown.style.display = 'block';
});

productLink.addEventListener('mouseout', function() {
  dropdown.style.display = 'none';
});

// <!-- image sliding section -->



let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
  setTimeout(showSlides, 2000); // Change image every 2 seconds
}
