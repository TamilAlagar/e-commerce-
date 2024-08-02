// Toggle mobile menu
document.addEventListener('DOMContentLoaded', function() {
    const menuButton = document.querySelector('#menu-button');
    const navbar = document.querySelector('#navbar');

    menuButton.addEventListener('click', function() {
        navbar.classList.toggle('active');
    });
});

// Add smooth scrolling to internal links
const scrollLinks = document.querySelectorAll('a[href^="#"]');

scrollLinks.forEach(link => {
    link.addEventListener('click', function(event) {
        event.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);

        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// Example function to add product to cart
const addToCartButtons = document.querySelectorAll('.pro');

addToCartButtons.forEach(button => {
    button.addEventListener('click', function() {
        const productName = this.querySelector('h5').textContent;
        const productPrice = this.querySelector('h4').textContent;
        alert(`Added ${productName} (${productPrice}) to your cart!`);
    });
});

// Optional: Change product image on hover
const productImages = document.querySelectorAll('.pro');

productImages.forEach(pro => {
    pro.addEventListener('mouseover', function() {
        this.querySelector('img').style.transform = 'scale(1.05)';
    });

    pro.addEventListener('mouseout', function() {
        this.querySelector('img').style.transform = 'scale(1)';
    });
});
