document.addEventListener('DOMContentLoaded', () => {
  // Select elements
  const openNavMenuBtn = document.getElementById('open-nav-menu');
  const closeNavMenuBtn = document.getElementById('close-nav-menu');
  const navMenu = document.querySelector('.wrapper');  

  // Function to open the navigation menu
  function openNavMenu() {
    navMenu.classList.add('nav-open');  
  }
  // Function to close the navigation menu
  function closeNavMenu() {
    navMenu.classList.remove('nav-open');  
  }

  // Event listeners for open and close buttons
  openNavMenuBtn.addEventListener('click', openNavMenu);
  closeNavMenuBtn.addEventListener('click', closeNavMenu);
});

// Example temperature in Celsius 
let temperatureInCelsius = 67;

// Function to update the weather information
function updateWeather() {
  const isCelsius = document.getElementById('celsius').checked;
  const temperature = isCelsius 
    ? `${temperatureInCelsius} °C` 
    : `${(temperatureInCelsius * 9/5 + 32).toFixed(1)} °F`;
  document.getElementById('weather').textContent = `Temperature: ${temperature}`;
}

// Add event listeners to the radio buttons
document.querySelectorAll('input[name="temperature"]').forEach(radio => {
  radio.addEventListener('change', updateWeather);
});

updateWeather();


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
updateTime(); 

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

setInterval(nextImage, 3000);  

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
      { src: './assets/products/img1.png', alt: 'Product 4' },
      { src: './assets/products/img2.png', alt: 'Product 5' },
    ],
    free: [
      { src: './assets/products/img3.png', alt: 'Product 6' },
    ]
  };

  function displayProducts(category) {
    productsArea.innerHTML = ''; // Clear current images
    products[category].forEach(product => {
      const img = document.createElement('img');
      img.src = product.src;
      img.alt = product.alt;
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
 
  displayProducts('all');
});
