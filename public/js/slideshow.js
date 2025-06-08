// Index to keep track of which slide is currently showing
let slideIndex = 0;

// Get all elements with class "slide" (your images)
const slides = document.getElementsByClassName("slide");

// Function to display the current slide and hide the rest
function showSlide(index) {
for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none"; // Hide all slides
}
slides[index].style.display = "block"; // Show the selected slide
}

// Function to change slide (forward or backward)
function changeSlide(direction) {
// Update the slide index, wrap around if needed
slideIndex = (slideIndex + direction + slides.length) % slides.length;
showSlide(slideIndex);
}

// Show the first slide when the page loads
showSlide(slideIndex);