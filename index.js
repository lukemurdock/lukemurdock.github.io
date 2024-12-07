document.addEventListener("DOMContentLoaded", function () {
    // Find all elements with the class 'fade-in-bg'
    const elements = document.querySelectorAll('.fade-in-bg');
  
    elements.forEach((element) => {
      // Get the background image URL from the data attribute
      const bgImageUrl = element.getAttribute('data-bg-url');
  
      if (bgImageUrl) {
        // Preload the background image
        const img = new Image();
        img.src = bgImageUrl;
  
        img.onload = () => {
          // Set the background image and add the 'loaded' class
          element.style.backgroundImage = `url(${bgImageUrl})`;
          element.classList.add('loaded');
        };
      }
    });
  });
  
// Attach a click event listener to each image
document.querySelectorAll('img').forEach(img => {
  img.addEventListener('click', () => {
    // Check if the Fullscreen API is available
    if (img.requestFullscreen) {
      img.requestFullscreen();
    } else if (img.webkitRequestFullscreen) { // For Safari
      img.webkitRequestFullscreen();
    } else if (img.msRequestFullscreen) { // For IE/Edge
      img.msRequestFullscreen();
    }
  });
  
  img.addEventListener('fullscreenchange', () => {
    if (!document.fullscreenElement) {
      console.log("Exited fullscreen");
    }
  });
 });