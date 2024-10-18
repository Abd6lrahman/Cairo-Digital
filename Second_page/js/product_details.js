// product_details.js

// get query parameter by name
function getQueryParam(param) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(param);
}

// populate product details
function populateProductDetails() {
    const productID = getQueryParam('id');
    if (!productID || !productData[productID]) {
        alert("Product not found!");
        window.location.href = "second_page.html"; // Redirect to products page
        return;
    }

    const product = productData[productID];

    // Populate product info
    document.getElementById('product-name').textContent = product.name;
    document.getElementById('product-description').textContent = product.description;
    document.getElementById('product-price').textContent = `$${product.price}`;

    // Populate main image and thumbnails
    const mainImage = document.getElementById('main-image');
    const thumbnailContainer = document.getElementById('thumbnail-container');

    mainImage.src = product.images[0];
    mainImage.alt = product.name;

    thumbnailContainer.innerHTML = ''; // Clear existing thumbnails

    product.images.forEach((imgSrc, index) => {
        const img = document.createElement('img');
        img.src = imgSrc;
        img.alt = `${product.name} Image ${index + 1}`;
        if (index === 0) img.classList.add('active');
        img.onclick = function() {
            document.querySelectorAll('.thumbnail-container img').forEach(img => img.classList.remove('active'));
            this.classList.add('active');
            mainImage.src = this.src;
        };
        thumbnailContainer.appendChild(img);
    });


    if (product.rating) {
        const ratingElement = document.getElementById('product-rating');
        ratingElement.innerHTML = `(${product.rating} reviews)`;
    }
}

  // calculate and display estimated delivery date
  function displayEstimatedDelivery() {
    const today = new Date();
    const estimatedDeliveryDate = new Date(today.setDate(today.getDate() + 2)); // Add 2 days
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    const formattedDate = estimatedDeliveryDate.toLocaleDateString(undefined, options);
    document.getElementById('estimated-delivery').innerText = `Estimated Delivery: ${formattedDate}`; // Display estimated delivery date
}

// Call the function on page load
window.onload = function() {
    populateProductDetails(); // Populate product details
    displayEstimatedDelivery(); // // Display estimated delivery date
};


// Function to go back to products page
function goBackToProducts() {
    window.location.href = 'second_page.html#ProductsStart';
}

// Function to handle Buy Now button
function buyNow() {
    const productID = getQueryParam('id');
    buyNowItem = productData[productID]; // Set the Buy Now item
    openCheckout(); // Open checkout modal with this item's price
}

// Initialize product details on page load
window.onload = function() {
    loadCart(); // Load cart data from localStorage
    populateProductDetails();
    displayEstimatedDelivery(); // Display estimated delivery date
};

