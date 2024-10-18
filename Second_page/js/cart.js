// cart.js

let cart = [];          // Initialize cart
let buyNowItem = null; // Variable for Buy Now items

// Function to load cart from localStorage
function loadCart() {
    const savedCart = localStorage.getItem('cart');
    if (savedCart) {
        cart = JSON.parse(savedCart);
    }
    updateCartCount(); // Update cart count display
}

// Function to save cart to localStorage
function saveCart() {
    localStorage.setItem('cart', JSON.stringify(cart));
}

// Function to update cart count on cart button
function updateCartCount() {
    const cartCount = document.getElementById('cart-count');
    if (cartCount) {
        cartCount.textContent = cart.length; // Update cart count
    }
}

// Function to add product to cart
function addToCart(productID) {

    loadCart(); // Ensure the cart is loaded before any operation  ///new
    
    const product = productData[productID];
 
    if (product) {
        cart.push(product); // Add product to cart array
        updateCartCount(); // Update cart count display
        saveCart(); // Save cart to localStorage
        alert(`${product.name} has been added to your cart.`);
    }
}

// Function to add product to cart from details page
function addToCartFromDetails() {
    const productID = getQueryParam('id'); // Get product ID from query parameter
    addToCart(productID); // Add to cart
}

// Function to remove item from cart
function removeFromCart(index) {
    if (index >= 0 && index < cart.length) {
        cart.splice(index, 1); // Remove item from cart array
        updateCartCount(); // Update cart count
        saveCart(); // Save updated cart to localStorage
        showCart(); // Refresh cart modal
    }
}

// Function to clear the cart
function clearCart() {
    cart = []; // Clear cart array
    updateCartCount(); // Update cart count
    saveCart(); // Save changes to localStorage
}

// Initialize cart on page load
window.onload = function() {
    loadCart();  // Load cart
};
