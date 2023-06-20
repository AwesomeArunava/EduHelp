const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const uploadBtn = document.getElementById('uploadBtn');
const uploadInput = document.getElementById('upload');
const imageContainer = document.getElementById('imageContainer');

let currentIndex = 0;
let images = [];

prevBtn.addEventListener('click', showPrevImage);
nextBtn.addEventListener('click', showNextImage);
uploadBtn.addEventListener('click', () => {
  uploadInput.click();
});

uploadInput.addEventListener('change', () => {
  const files = uploadInput.files;
  
  for (let i = 0; i < files.length; i++) {
    const file = files[i];
    const reader = new FileReader();

    reader.onload = function(e) {
      const img = document.createElement('img');
      img.src = e.target.result;
      img.alt = 'Uploaded Image';
      images.push(img);
      
      if (images.length === 1) {
        showImage();
      }
    };

    reader.readAsDataURL(file);
  }
});

function showPrevImage() {
  currentIndex = (currentIndex - 1 + images.length) % images.length;
  showImage();
}

function showNextImage() {
  currentIndex = (currentIndex + 1) % images.length;
  showImage();
}

function showImage() {
  imageContainer.innerHTML = '';
  imageContainer.appendChild(images[currentIndex].cloneNode(true));
}

showImage();
