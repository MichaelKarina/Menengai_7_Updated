// Array of image paths
// const images = [
//    "Slide-1.jpg", "Slide-1a.jpg", "Slide-1b.jpg", "Slide-1c.jpg", "Slide-2.jpg", "Slide-3.jpg", "Slide-3a.jpg", "Slide-3b.jpg","Slide-4.jpg", "Slide-5.jpg", "Slide-5a.jpg", "Slide-5b.jpg", "Slide-6.jpg", "Slide-7.jpg", "Slide-7a.jpg", "Slide-7b.jpg", "Slide-8.jpg", "Slide-9.jpg", "Slide-9a.jpg", "Slide-9b.jpg", "Slide-10.jpg", "Slide-11.jpg", "Slide-11a.jpg", "Slide-11b.jpg", "Slide-11c.jpg", "Slide-12a.jpg", "Slide-12b.jpg", "Slide-13.jpg", "Slide-14.jpg", "Slide-15.jpg", "Slide-15a.jpg", "Slide-16.jpg", "Slide-17.jpg", "Slide-18a.jpg", "Slide-18b.jpg", "Slide-19.jpg", "Slide-20.jpg", "Slide-20a.jpg", "Slide-20b.jpg", "Slide-20c.jpg", "Slide-21.jpg", "Slide-22.jpg", "Slide-22a.jpg", "Slide-22b.jpg", "Slide-23.jpg", "Slide-24.jpg", 
//    "Slide-24a.jpg", "Slide-24b.jpg", "Slide-25.jpg", "Slide-26.jpg", "Slide-26a.jpg", "Slide-26b.jpg", "Slide-27.jpg", "Slide-28.jpg", "Slide-28a.jpg", "Slide-28b.jpg", "Slide-28c.jpg", "Slide-29.jpg", "Slide-30.jpg", "Slide-30a.jpg", "Slide-30b.jpg", "Slide-30c.jpg", "Slide-31.jpg", "Slide-32.jpg", "Slide-32a.jpg", "Slide-91.jpg", "Slide-32b.jpg", "Slide-32c.jpg", "Slide-33.jpg", "Slide-34.jpg", "Slide-34a.jpg", "Slide-34b.jpg", "Slide-34c.jpg", "Slide-35.jpg", "Slide-36.jpg", "Slide-36a.jpg", "Slide-36b.jpg", "Slide-36c.jpg", "Slide-37.jpg", "Slide-38.jpg", "Slide-38a.jpg",
//    , "Slide-38b.jpg", "Slide-38c.jpg", "Slide-39.jpg", "Slide-39a.jpg", "Slide-39b.jpg", "Slide-39c.jpg", "Slide-39d.jpg", "Slide-40.jpg", "Slide-41.jpg", "Slide-42.jpg", "Slide-43.jpg", "Slide-44.jpg", "Slide-44a.jpg", "Slide-44b.jpg", "Slide-45.jpg", "Slide-46.jpg", "Slide-47.jpg", "Slide-48.jpg", "Slide-49.jpg", "Slide-50.jpg", "Slide-51.jpg", "Slide-52.jpg", "Slide-53.jpg", "Slide-54.jpg", "Slide-55.jpg", "Slide-55a.jpg", "Slide-55b.jpg", "Slide-56.jpg", "Slide-57.jpg", "Slide-58.jpg", "Slide-59.jpg", "Slide-60.jpg", "Slide-61.jpg", "Slide-62.jpg", "Slide-63.jpg", "Slide-64.jpg", "Slide-65.jpg", "Slide-66.jpg", "Slide-67.jpg", "Slide-68.jpg", "Slide-68a.jpg", "Slide-68b.jpg", "Slide-69.jpg", "Slide-70.jpg", "Slide-71.jpg", 
//    "Slide-72.jpg", "Slide-73.jpg", "Slide-74.jpg", "Slide-75.jpg", "Slide-75.jpg", "Slide-77.jpg", "Slide-78.jpg", "Slide-79.jpg", "Slide-80.jpg", "Slide-80a.jpg", "Slide-80b.jpg", "Slide-80c.jpg", "Slide-81.jpg", "Slide-82.jpg", "Slide-83.jpg"
// ];

                                                                                                                                                                                                                                                                                                                                       


let currentIndex = 0; // Track the current image index
const slideshowElements = document.querySelectorAll('.slideshow'); // Get all images with the class 'slideshow'

function updateSlideshow() {
    // Update the src of the first image in the 'slideshow' class group
    slideshowElements.forEach(img => img.style.display = 'none'); // Hide all images
    slideshowElements[currentIndex].style.display = 'block'; // Show the current image

    currentIndex = (currentIndex + 1) % slideshowElements.length; // Loop back to the first image
}

// Initially hide all images except the first
slideshowElements.forEach(img => img.style.display = 'none');
slideshowElements[0].style.display = 'block';

// Change image every 10 seconds (10000ms)
setInterval(updateSlideshow, 10000);
