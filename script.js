let slideIndex = 0;
showSlides();

function showSlides() {
  let slides = document.getElementsByClassName("mySlides");
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  slides[slideIndex-1].style.display = "block";  
  setTimeout(showSlides, 2000); // Change image every 2 seconds
}

function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Optional: Pause slideshow on mouseover
// Replace '.slideshow-container' with your actual container class
document.querySelector('.slideshow-container').addEventListener("mouseover", () => {
  clearTimeout();
});

// Optional: Resume slideshow on mouseout
document.querySelector('.slideshow-container').addEventListener("mouseout", () => {
  setTimeout(showSlides, 2000);
});
