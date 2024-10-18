// Validate form data
function validateForm(event) {

    event.preventDefault(); // Stop form from submitting rightaway


    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const phone = document.getElementById('phone').value.trim();
    const message = document.getElementById('message').value.trim();
    const formMessage = document.getElementById('form-message');

    // phone contains only numbers
    const phonePattern = /^[0-9]*$/;

    if (!phonePattern.test(phone)) {
        formMessage.textContent = 'Phone number should only contain numbers!';
        formMessage.style.color = 'red';
        return false;
    }
    // data validation 
    if (name === '' || email === '' || phone === '' || message === '') {
        formMessage.textContent = 'All fields are required!';
        formMessage.style.color = 'red';
        return false;
    } else {
        formMessage.textContent = 'Form submitted successfully!';
        formMessage.style.color = 'green';

        // Show modal
        showModal(name, email, phone);

        
    }
}

// Show modal with message
function showModal(name, email, phone) {
    const modal = document.getElementById('modal');
    const modalMessage = document.getElementById('modal-message');

    // Set modal content
    modalMessage.innerHTML = `
        Hello <strong>${name}</strong>,<br><br>
        Thanks for contacting us. We will review your message and get back to you shortly.<br>
        Please make sure that your phone number <strong>${phone}</strong> or email address <strong>${email}</strong> are available.<br><br>
        Sincerely,<br>
        <strong>Cairo Digital</strong>
    `;

    // Show the modal
    modal.style.display = 'block';

    // Close modal when clicking close button
    const closeBtn = document.querySelector('.form-close-btn');
    closeBtn.onclick = function() {
        modal.style.display = 'none';
        document.getElementById('contact-form').submit();   // Submit the form after modal is closed
    }

    // Close modal when clicking outside the modal content
    window.onclick = function(event) {
        if (event.target === modal) {
            modal.style.display = 'none';
            document.getElementById('contact-form').submit();  // Submit the form after modal is closed

        }
    }
}

document.getElementById('contact-form').addEventListener('submit', validateForm);
