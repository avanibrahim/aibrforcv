document.addEventListener('scroll', function () {
    const image = document.getElementById('animatedImage');
    const rect = image.getBoundingClientRect();
  
    // Check if the image is in the viewport
    if (rect.top >= 0 && rect.bottom <= window.innerHeight) {
      image.classList.add('visible');
    } else {
      image.classList.remove('visible');
    }
  });

  document.addEventListener('scroll', function () {
    const images = document.querySelectorAll('.animated-image');
  
    images.forEach((image) => {
      const rect = image.getBoundingClientRect();
  
      // Check if the image is in the viewport
      if (rect.top >= 0 && rect.bottom <= window.innerHeight) {
        image.classList.add('visible');
      } else {
        image.classList.remove('visible');
      }
    });
  });