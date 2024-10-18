document.addEventListener('DOMContentLoaded', () => {
    const cartCountElement = document.getElementById('cart-count');
    const authSection = document.getElementById('auth-section');
    const locationButton = document.getElementById('locationButton');
    const categorySelect = document.getElementById('categorySelect');
    const searchInput = document.getElementById('searchInput');

    

    // Handle category selection and put the selected category in the search input
    categorySelect.addEventListener('change', () => {
        const selectedCategory = categorySelect.value;
        searchInput.value = selectedCategory; 
    });

    // Handle authentication logic
    const signInButton = document.querySelector(".nav-link[href='#']");
    signInButton.addEventListener('click', () => {
        authSection.innerHTML = `
            <h2>Sign In</h2>
            <form>
                <div class="mb-3">
                    <label for="email" class="form-label">Email address</label>
                    <input type="email" class="form-control" id="email" placeholder="Enter email">
                </div>
                <div class="mb-3">
                    <label for="password" class="form-label">Password</label>
                    <input type="password" class="form-control" id="password" placeholder="Password">
                </div>
                <button type="submit" class="btn btn-primary">Sign in</button>
                <p>or <a href="#" id="createAccountLink">Create your account</a></p>
            </form>
        `;

        // Create account form
        const createAccountLink = document.getElementById('createAccountLink');
        createAccountLink.addEventListener('click', () => {
            authSection.innerHTML = `
                <h2>Create Account</h2>
                <form>
                    <div class="mb-3">
                        <label for="name" class="form-label">Your Name</label>
                        <input type="text" class="form-control" id="name" placeholder="Enter your name">
                    </div>
                    <div class="mb-3">
                        <label for="email" class="form-label">Email address</label>
                        <input type="email" class="form-control" id="email" placeholder="Enter email">
                    </div>
                    <div class="mb-3">
                        <label for="password" class="form-label">Password</label>
                        <input type="password" class="form-control" id="password" placeholder="Password">
                    </div>
                    <div class="mb-3">
                        <label for="re-password" class="form-label">Re-enter Password</label>
                        <input type="password" class="form-control" id="re-password" placeholder="Re-enter password">
                    </div>
                    <button type="submit" class="btn btn-primary">Create account</button>
                </form>
            `;
        });
    });

    // Check if user is logged in (from localStorage)
    const userName = localStorage.getItem('userName');
    const userLink = document.getElementById('userLink');
    
    if (userName) {
        userLink.textContent = `Hello, ${userName}`;
    }

    // Handle form submission for search
    const searchForm = document.getElementById('searchForm');
    searchForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const searchQuery = searchInput.value;
        console.log("Searching for:", searchQuery); // You can replace this with a search action
    });

});
