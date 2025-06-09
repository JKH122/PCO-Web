// Index to keep track of which slide is currently showing
let slideIndex = 0;

// Get all elements with class "slide" (your images)
const slides = document.getElementsByClassName("slide");

// Function to display the current slide and hide the rest
function showSlide(index) {
for (let i = 0; i < slides.length; i++) {
    slides[i].classList.remove("active");
}
slides[index].classList.add("active");
}

// Function to change slide (forward or backward)
function changeSlide(direction) {
// Update the slide index, wrap around if needed
slideIndex = (slideIndex + direction + slides.length) % slides.length;
showSlide(slideIndex);
}

// Show the first slide when the page loads
showSlide(slideIndex);