// Get the modal
var modal = document.getElementById("image-modal");

// Get the modal image and caption
var modalImg = document.getElementById("modal-image");
var captionText = document.getElementById("caption");

// Get the <span> element that closes the modal
var span = document.getElementById("close-modal");

// Initial image to be displayed in the modal
var currentImage = "image2.jpg";  // Start with Image 2
modalImg.src = currentImage;     // Set the initial image for the modal
captionText.innerHTML = "This is Image 2";  // Set caption for Image 2
modal.style.backgroundColor = "rgba(0, 0, 0, 0.9)";  // Dark background when Image 2 is shown

// When the user clicks on the image in the main section, open the modal
var img = document.getElementById("image");
img.onclick = function() {
    modal.style.display = "block";        // Open the modal
    modalImg.src = currentImage;         // Set the current image (Image 2)
    captionText.innerHTML = "This is Image 2";  // Set caption for Image 2
    modal.style.backgroundColor = "rgba(0, 0, 0, 0.9)";  // Set dark background when Image 2 is displayed
}

// When the user clicks on the modal image, toggle to the next image (toggle)
modalImg.onclick = function() {
    // Toggle between Image 2 and Image 1
    if (currentImage === "image2.jpg") {
        currentImage = "pablo.jpg";       // Change to Image 1 (pablo.jpg)
        modalImg.src = currentImage;       // Update the modal with Image 1
        captionText.innerHTML = "This is Image 1";  // Update the caption for Image 1
        modal.style.backgroundColor = "rgba(0, 0, 0, 0.5)";  // Lighter background for Image 1
    } else {
        currentImage = "image2.jpg";       // Change back to Image 2
        modalImg.src = currentImage;       // Update the modal with Image 2
        captionText.innerHTML = "This is Image 2";  // Update the caption for Image 2
        modal.style.backgroundColor = "rgba(0, 0, 0, 0.9)";  // Darker background for Image 2
    }
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";  // Close the modal
}

// Close the modal if the user clicks anywhere outside the modal image
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";  // Close the modal
    }
}
