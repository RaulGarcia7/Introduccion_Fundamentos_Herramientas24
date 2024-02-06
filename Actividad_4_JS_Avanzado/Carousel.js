const featuredProjectsImages = document.querySelectorAll('.featured_project');
let currentIndex = 0;

function showImage() {
  featuredProjectsImages.forEach((project, index) => {
    project.style.opacity = (index === currentIndex) ? 1 : 0;
    project.style.zIndex = (index === currentIndex) ? 1 : 0;
  });
}

function nextImage() {
  currentIndex = (currentIndex + 1) % featuredProjectsImages.length;
  showImage();
}

showImage();

setInterval(nextImage, 5000);
