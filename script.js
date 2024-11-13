// Get references to elements
const modal = document.getElementById('modal');
const appointmentForm = document.getElementById('appointment-form');
const ratingSection = document.getElementById('rating-section');
const stars = document.querySelectorAll('.star');
const serviceTitle = document.getElementById('service-title');
let selectedService = ""; // Store the selected service name
let rating = 0; // Store the user's rating

// Function to toggle Home Services section
function toggleServices() {
    const homeServices = document.getElementById('home-services');
    homeServices.style.display = homeServices.style.display === 'none' ? 'block' : 'none';
}

// Function to open the modal and set the selected service title
function openModal(serviceName) {
    selectedService = serviceName;
    serviceTitle.innerText = `Schedule Appointment - ${selectedService}`;
    modal.style.display = 'flex';
    ratingSection.style.display = 'none'; // Hide rating initially
    rating = 0; // Reset rating each time the modal opens
}

// Function to close the modal
function closeModal() {
    modal.style.display = 'none';
}

// Handle form submission to show rating section
appointmentForm.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent actual form submission
    ratingSection.style.display = 'block'; // Show rating section after appointment is scheduled
    alert(`Appointment confirmed for ${selectedService}! Please proceed to rate the service.`);
});

// Handle star rating
stars.forEach(star => {
    star.addEventListener('click', function() {
        // Clear previously selected stars
        stars.forEach(s => s.classList.remove('selected'));

        // Mark selected stars
        const selectedRating = this.getAttribute('data-value');
        rating = selectedRating; // Store the selected rating

        for (let i = 0; i < selectedRating; i++) {
            stars[i].classList.add('selected');
        }

        console.log(`Service: ${selectedService}, Rating: ${rating}`); // Log or process the rating

        // Close modal after rating
        alert(`Thank you! You've rated the ${selectedService} service ${rating} stars.`);
        closeModal();
    });
});

window.onclick = function(event) {
    if (event.target == modal) {
        closeModal();
    }
};
