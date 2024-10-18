

























// second_page.js

// navigate to product details page
function navigateToDetails(productID) {
    window.location.href = `product_details.html?id=${productID}`;
}

// show cart modal with cart items
function showCart() {
    const cartModal = document.getElementById('cart-modal'); // Get cart modal
    const cartItemsContainer = document.getElementById('cart-items'); // Get cart items container
    const totalPriceElement = document.getElementById('total-price'); // Get total price element
    
    cartItemsContainer.innerHTML = ''; // Clear previous cart items
    
    // Calculate total price
    let totalPrice = 0;
    
    // Loop through cart items and display them
    cart.forEach((item, index) => {
        const cartItemDiv = document.createElement('div'); // Create cart item div
        cartItemDiv.classList.add('cart-item'); // Add class for the styling
        
        cartItemDiv.innerHTML = `
            <img src="${item.images[0]}" alt="${item.name}">
            <div class="cart-item-details">
                <p>${item.name}</p>
                <p>$${item.price}</p>
            </div>
            <button class="remove-button" onclick="removeFromCart(${index})">Remove</button>
        `;
        
        cartItemsContainer.appendChild(cartItemDiv); // Add to cart items container
        
        totalPrice += item.price; // Add to total price
    });
    
    totalPriceElement.textContent = `Total: $${totalPrice}`; // Display total price
    
    cartModal.style.display = 'block'; // Show cart modal
}

// Function to hide cart modal
function closeCart() {
    const cartModal = document.getElementById('cart-modal');
    cartModal.style.display = 'none'; // Hide cart modal
}

// Function to open checkout modal
function openCheckout() {
    const checkoutModal = document.getElementById('checkout-modal'); // Get checkout modal
    const totalPriceElement = document.getElementById('checkout-total'); // Get checkout total price
    
    // Calculate total price
    let totalPrice = 0;

    if (buyNowItem) {
        totalPrice = buyNowItem.price;
    } else {
        cart.forEach(item => {
            totalPrice += item.price;
        });
    }

    totalPriceElement.textContent = totalPrice;
    checkoutModal.style.display = 'block';
}

// Function to close checkout modal
function closeCheckout() {
    const checkoutModal = document.getElementById('checkout-modal');
    checkoutModal.style.display = 'none'; // Hide checkout modal
    buyNowItem = null;
}

// Function to submit order
function submitOrder() {
    const address = document.getElementById('address').value.trim(); // Get address
    const totalAmount = document.getElementById('checkout-total').textContent; // Get total amount
    
    if (address === "") {
        alert("Please enter your delivery address.");
        return;
    }
    
    alert(`Thank you! Your order of $${totalAmount} has been placed and will be delivered to:\n${address}`);
    
    // Clear the cart
    clearCart();
    closeCheckout();
    closeCart();

    // Clear address field after processing
    document.getElementById("address").value = ""; // Clears the textarea
}

// filter products based on search input
function filterProducts() {
    const searchInput = document.getElementById('search-bar').value.toLowerCase();
    const products = document.getElementsByClassName('product_secPage');

    for (let i = 0; i < products.length; i++) {
        const productName = products[i].getElementsByClassName('product__name')[0].innerText.toLowerCase();
        if (productName.includes(searchInput)) {
            products[i].style.display = ''; // Show product
        } else {
            products[i].style.display = 'none'; // Hide product
        }
    }
}

// Close modals when clicking outside of the modal content
window.onclick = function(event) {
    const cartModal = document.getElementById('cart-modal');
    const checkoutModal = document.getElementById('checkout-modal');
    if (event.target == cartModal) {
        cartModal.style.display = 'none';
    }
    if (event.target == checkoutModal) {
        checkoutModal.style.display = 'none';
    }
}


// scroll detection for Back to Top button
window.onscroll = function() {
    const backToTopButton = document.getElementById('backToTop');
    const scrollPosition = window.scrollY || document.documentElement.scrollTop;

    // Check if scrolled down from top
    if (scrollPosition > 1500 && scrollPosition < 1900) {
        backToTopButton.classList.add('show');
        backToTopButton.classList.remove('hide');
    } else {
        backToTopButton.classList.remove('show');
        backToTopButton.classList.add('hide');
    }
};

// Smooth scroll back to the top when button is clicked
document.getElementById('backToTop').onclick = function() {
    window.scrollTo({
        top: document.getElementById('ProductsStart').offsetTop,
        behavior: 'smooth'
    });
};

