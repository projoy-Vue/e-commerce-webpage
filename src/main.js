// JavaScript for interactivity
// Toggle Menu for Mobile
function openNav() {
    document.getElementById("nav-menu").style.width = "100%" 
  }
  function closeNav() {
    document.getElementById("nav-menu").style.width = "0%";
 }
// Toggle Dropdowns on Mobile
const navItems = document.querySelectorAll('.nav-item.mega-menu');
navItems.forEach(item => {
    item.addEventListener('click', (e) => {
        if (window.innerWidth <= 768) {
            const dropdown = item.querySelector('.dropdown');
            const isDisplayed = dropdown.style.display === 'flex';
            closeAllDropdowns();
            if (!isDisplayed) {
                dropdown.style.display = 'flex';
            }
        }
    });
});


// Close all dropdowns
function closeAllDropdowns() {
    const dropdowns = document.querySelectorAll('.dropdown');
    dropdowns.forEach(dropdown => {
        dropdown.style.display = 'none';
    });
}

// Close dropdowns when clicking outside
document.addEventListener('click', (e) => {
    if (!e.target.closest('.nav-item')) {
        closeAllDropdowns();
    }
});
// JavaScript for interactivity
// Hero Slider Functionality
let currentSlide = 0;
const slides = document.querySelectorAll('.slide');
const totalSlides = slides.length;
function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.style.transform = `translateX(${(i - index) * 100}%)`;
        slide.querySelector('.slide-content').style.opacity = (i === index) ? 1 : 0;
    });
}
function nextSlide() {
    currentSlide = (currentSlide + 1) % totalSlides;
    showSlide(currentSlide);
}
setInterval(nextSlide, 5000); // Auto-slide every 5 seconds
showSlide(currentSlide);

// Product Quick View Functionality
document.querySelectorAll('.btn-secondary').forEach(button => {
    button.addEventListener('click', () => {
        alert('Quick view feature to be implemented!');
    });
});
// Add to Cart Functionality
document.querySelectorAll('.btn-primary').forEach(button => {
    button.addEventListener('click', () => {
        alert('Added to cart!');
    });
});


// Chat Popup Functionality
const chatButton = document.querySelector('.chat-button');
const chatPopup = document.querySelector('.chat-popup');
chatButton.addEventListener('click', () => {
    chatPopup.style.display = (chatPopup.style.display === 'block') ? 'none' : 'block';
});
document.querySelector('.btn-send').addEventListener('click', () => {
    alert('Message sent!');
});


// JavaScript for featured products carousel functionality
const carousel = document.querySelector('.carousel');
const prevButton = document.querySelector('.carousel-prev');
const nextButton = document.querySelector('.carousel-next');
const dotsContainer = document.querySelector('.carousel-dots');
const items = document.querySelectorAll('.carousel-item');

let currentIndex = 0;
const totalItems = items.length;

// Create navigation dots dynamically
for (let i = 0; i < totalItems; i++) {
    const dot = document.createElement('div');
    dot.classList.add('dot');
    if (i === 0) dot.classList.add('active');
    dot.addEventListener('click', () => moveToSlide(i));
    dotsContainer.appendChild(dot);
}

const dots = document.querySelectorAll('.dot');

// Function to update carousel position and active dot
function updateCarousel() {
    const offset = -currentIndex * (items[0].offsetWidth + 20); // Adjust for margin
    carousel.style.transform = `translateX(${offset}px)`;
    dots.forEach((dot, index) => {
        dot.classList.toggle('active', index === currentIndex);
    });
}

// Function to move to a specific slide
function moveToSlide(index) {
    if (index >= 0 && index < totalItems) {
        currentIndex = index;
        updateCarousel();
    }
}

// Event listeners for navigation buttons
prevButton.addEventListener('click', () => {
    if (currentIndex > 0) {
        currentIndex--;
    } else {
        currentIndex = totalItems - 1;
    }
    updateCarousel();
});

nextButton.addEventListener('click', () => {
    if (currentIndex < totalItems - 1) {
        currentIndex++;
    } else {
        currentIndex = 0;
    }
    updateCarousel();
});

// Auto-slide functionality
setInterval(() => {
    currentIndex = (currentIndex + 1) % totalItems;
    updateCarousel();
}, 5000); // Slide every 5 seconds

// Quick View Button Functionality
document.querySelectorAll('.btn-quick-view').forEach(button => {
    button.addEventListener('click', () => {
        alert('Quick view feature to be implemented!');
    });
});

// Add to Cart Button Functionality
document.querySelectorAll('.btn-add-to-cart').forEach(button => {
    button.addEventListener('click', () => {
        alert('Added to cart!');
    });
});
// JavaScript for category filtering, tooltips, lazy loading, and modal

document.addEventListener('DOMContentLoaded', () => {
    const filterButtons = document.querySelectorAll('.filter-btn');
    const categoryCards = document.querySelectorAll('.category-card');
    const modals = document.querySelectorAll('.modal');
    const closeButtons = document.querySelectorAll('.close');
    const tooltips = document.querySelectorAll('[data-tooltip]');
    const lazyImages = document.querySelectorAll('.lazy-load');

    // Filter categories based on the button clicked
    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            const filter = button.getAttribute('data-filter');

            // Toggle active class on buttons
            filterButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');

            // Filter category cards
            categoryCards.forEach(card => {
                if (filter === 'all' || card.getAttribute('data-category') === filter) {
                    card.style.display = 'block';
                } else {
                    card.style.display = 'none';
                }
            });
        });
    });

    // Show modal on button click
    document.querySelectorAll('.btn-modal').forEach(btn => {
        btn.addEventListener('click', () => {
            const modalId = btn.getAttribute('data-modal');
            const modal = document.getElementById(modalId);

            if (modal) {
                modal.style.display = 'block';
            }
        });
    });

    // Close modal on close button click or outside click
    modals.forEach(modal => {
        modal.addEventListener('click', (e) => {
            if (e.target.classList.contains('modal') || e.target.classList.contains('close')) {
                modal.style.display = 'none';
            }
        });
    });

    // Tooltips for subcategory links
    tooltips.forEach(tooltip => {
        tooltip.addEventListener('mouseenter', () => {
            const tooltipText = tooltip.getAttribute('data-tooltip');
            tooltip.setAttribute('title', tooltipText);
        });
    });

    // Lazy load images
    lazyImages.forEach(image => {
        image.addEventListener('load', () => {
            image.classList.add('loaded');
        });
    });
});
// testmonial slider
document.addEventListener('DOMContentLoaded', function () {
    const filterButtons = document.querySelectorAll('.filter-btn');
    const testimonialCards = document.querySelectorAll('.testimonial-card');
    const modal = document.getElementById('feedbackModal');
    const closeModal = modal.querySelector('.close');
    const feedbackBtn = document.querySelector('.feedback-btn');
    const testimonialSlider = document.querySelector('.testimonial-slider');
    const prevButton = document.querySelector('.prev-slide');
    const nextButton = document.querySelector('.next-slide');
    let scrollPosition = 0;

    // Filter testimonials
    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            const filter = button.getAttribute('data-filter');
            filterButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');

            testimonialCards.forEach(card => {
                if (filter === 'all' || card.getAttribute('data-category') === filter) {
                    card.style.display = 'block';
                } else {
                    card.style.display = 'none';
                }
            });
        });
    });

    // Open modal
    feedbackBtn.addEventListener('click', () => {
        modal.style.display = 'flex';
    });

    // Close modal
    closeModal.addEventListener('click', () => {
        modal.style.display = 'none';
    });

    window.addEventListener('click', (event) => {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    });

    // Auto-scrolling carousel
    const autoScroll = () => {
        scrollPosition += testimonialSlider.clientWidth;
        if (scrollPosition >= testimonialSlider.scrollWidth) {
            scrollPosition = 0;
        }
        testimonialSlider.scroll({
            left: scrollPosition,
            behavior: 'smooth'
        });
    };
    let autoScrollInterval = setInterval(autoScroll, 5000);

    // Manual control buttons
    nextButton.addEventListener('click', () => {
        clearInterval(autoScrollInterval);
        scrollPosition += testimonialSlider.clientWidth;
        if (scrollPosition >= testimonialSlider.scrollWidth) {
            scrollPosition = 0;
        }
        testimonialSlider.scroll({
            left: scrollPosition,
            behavior: 'smooth'
        });
        autoScrollInterval = setInterval(autoScroll, 5000);
    });

    prevButton.addEventListener('click', () => {
        clearInterval(autoScrollInterval);
        scrollPosition -= testimonialSlider.clientWidth;
        if (scrollPosition < 0) {
            scrollPosition = testimonialSlider.scrollWidth - testimonialSlider.clientWidth;
        }
        testimonialSlider.scroll({
            left: scrollPosition,
            behavior: 'smooth'
        });
        autoScrollInterval = setInterval(autoScroll, 5000);
    });

    // Pause auto-scroll on hover
    testimonialSlider.addEventListener('mouseover', () => {
        clearInterval(autoScrollInterval);
    });
    testimonialSlider.addEventListener('mouseout', () => {
        autoScrollInterval = setInterval(autoScroll, 5000);
    });

    // Form submission (to be implemented with actual backend or AJAX call)
    const testimonialForm = document.getElementById('testimonialForm');
    testimonialForm.addEventListener('submit', (event) => {
        event.preventDefault();
        alert('Thank you for your feedback!');
        modal.style.display = 'none';
        testimonialForm.reset();
    });
});

// upselling section

document.addEventListener('DOMContentLoaded', function () {
    const productCarousel = document.querySelector('.product-carousel');

    // Mock data for product recommendations
    const products = [
        { id: 1, name: 'Premium Wireless Headphones', image: '/demo-repo/src/public/headphone.jpg', price: 129.99 },
        { id: 2, name: 'Wireless Charging Pad', image: '/demo-repo/src/public/Wireless Charging Pad.jpg', price: 39.99 },
        { id: 3, name: 'Smart Home Security Camera', image: '/demo-repo/src/public/Smart Home Security Camera.jpg', price: 149.99 },
        { id: 4, name: 'Portable Bluetooth Speaker', image: '/demo-repo/src/public/Bluetooth.jpg', price: 79.99 }
        // Add more products as needed
    ];

    // Generate product cards dynamically
    products.forEach(product => {
        const card = document.createElement('div');
        card.classList.add('product-card');
        card.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p class="price">$${product.price}</p>
            <button class="add-to-cart" data-product-id="${product.id}">Add to Cart</button>
        `;
        productCarousel.appendChild(card);

        // Event listener to add product to cart (Mock functionality)
        const addToCartBtn = card.querySelector('.add-to-cart');
        addToCartBtn.addEventListener('click', () => {
            const productId = addToCartBtn.getAttribute('data-product-id');           
            alert(`Added product ${productId} to cart!`); // Replace with actual cart logic
        });
    });
});

// footer section
  // Accordion Menu Functionality
  const accordionButtons = document.querySelectorAll('.accordion-button');

  accordionButtons.forEach(button => {
    button.addEventListener('click', function() {
      this.classList.toggle('active');
      const accordionContent = this.nextElementSibling;
      if (accordionContent.style.maxHeight) {
        accordionContent.style.maxHeight = null;
      } else {
        accordionContent.style.maxHeight = accordionContent.scrollHeight + "px";
      }
    });
  });



