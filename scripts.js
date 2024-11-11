// Open the lightbox and display the clicked image
function openLightbox(imgElement) {
    const lightbox = document.getElementById("lightbox");
    const lightboxImg = document.getElementById("lightbox-img");
    lightbox.style.display = "flex"; // Show the lightbox
    lightboxImg.src = imgElement.src; // Set the image source to the clicked image
}

// Close the lightbox when clicking outside the image or on the close button
function closeLightbox() {
    const lightbox = document.getElementById("lightbox");
    lightbox.style.display = "none"; // Hide the lightbox
}
