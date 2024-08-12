// Display local time
function updateTime() {
  const now = new Date();
  const hours = String(now.getHours()).padStart(2, '0');
  const minutes = String(now.getMinutes()).padStart(2, '0');
  const seconds = String(now.getSeconds()).padStart(2, '0');

  document.querySelector('[data-time="hours"]').textContent = hours;
  document.querySelector('[data-time="minutes"]').textContent = minutes;
  document.querySelector('[data-time="seconds"]').textContent = seconds;
}

setInterval(updateTime, 1000);
updateTime(); // Initial call to set the time immediately

// Image slider for the gallery section
const galleryImages = [
  './assets/gallery/image1.jpg',
  './assets/gallery/image2.jpg',
  './assets/gallery/image3.jpg'
];

const mainImage = document.querySelector('.gallery-section img');
const thumbnailsContainer = document.querySelector('.thumbnails');

// Initialize thumbnails
galleryImages.forEach((src, index) => {
  const thumbnail = document.createElement('img');
  thumbnail.src = src;
  thumbnail.alt = `Gallery image ${index + 1}`;
  thumbnail.classList.add('thumbnail');
  thumbnail.addEventListener('click', () => {
    mainImage.src = src;
  });
  thumbnailsContainer.appendChild(thumbnail);
});

// Set the initial image
let currentImageIndex = 0;
mainImage.src = galleryImages[currentImageIndex];

// Automatic slider functionality
function nextImage() {
  currentImageIndex = (currentImageIndex + 1) % galleryImages.length;
  mainImage.src = galleryImages[currentImageIndex];
}

setInterval(nextImage, 3000); // Change image every 3 seconds

// Update greeting based on the time of day
function updateGreeting() {
  const now = new Date();
  const hour = now.getHours();
  const greetingElement = document.getElementById('greeting');
  
  if (hour < 12) {
    greetingElement.textContent = 'Good Morning!';
  } else if (hour < 18) {
    greetingElement.textContent = 'Good Afternoon!';
  } else {
    greetingElement.textContent = 'Good Evening!';
  }
}

updateGreeting();

document.addEventListener('DOMContentLoaded', function () {
  const productsArea = document.querySelector('.products-area');
  
  const products = {
    all: [
      { src: './assets/products/img1.png', alt: 'Product 1' },
      { src: './assets/products/img2.png', alt: 'Product 2' },
      { src: './assets/products/img3.png', alt: 'Product 3' },
    ],
    paid: [
      { src: './assets/products/img4.png', alt: 'Product 4' },
      { src: './assets/products/img5.png', alt: 'Product 5' },
    ],
    free: [
      { src: './assets/products/img6.png', alt: 'Product 6' },
    ]
  };

  function displayProducts(category) {
    productsArea.innerHTML = ''; // Clear current images
    products[category].forEach(product => {
      const img = document.createElement('img');
      img.src = product.src;
      img.alt = product.alt;
      img.style.maxWidth = '100%'; // Ensure the image fits well in its container
      img.style.display = 'block';
      img.style.margin = '10px 0'; // Add some spacing between images
      productsArea.appendChild(img);
    });
  }

  document.getElementById('all').addEventListener('change', function () {
    displayProducts('all');
  });

  document.getElementById('paid').addEventListener('change', function () {
    displayProducts('paid');
  });

  document.getElementById('free').addEventListener('change', function () {
    displayProducts('free');
  });

  // Initially display all products
  displayProducts('all');
});
