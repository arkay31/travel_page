document.addEventListener("DOMContentLoaded", function () {
    // Contact Form Submission
    document.getElementById("contact-form").addEventListener("submit", function (event) {
        event.preventDefault();
        alert("Message sent! We will get back to you soon.");
    });

    // Dark Mode Toggle
    const darkModeToggle = document.getElementById("dark-mode-toggle");
    darkModeToggle.addEventListener("click", function () {
        document.body.classList.toggle("dark-mode");
    });

    // Live Map Integration (Using Leaflet.js)
    var map = L.map('map-container').setView([20.5937, 78.9629], 3);
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; OpenStreetMap contributors'
    }).addTo(map);

    // Add Markers for Destinations
    var locations = [
        { name: "Paris", lat: 48.8566, lng: 2.3522 },
        { name: "Bali", lat: -8.4095, lng: 115.1889 },
        { name: "Maldives", lat: 3.2028, lng: 73.2207 }
    ];

    locations.forEach(function (location) {
        L.marker([location.lat, location.lng]).addTo(map)
            .bindPopup(`${location.name} - Book Now!`);
    });

    // Dynamically Load Travel Packages
    const packageList = document.getElementById("package-list");
    locations.forEach((location) => {
        let packageDiv = document.createElement("div");
        packageDiv.classList.add("package");
        packageDiv.innerHTML = `
            <img src="images/${location.name.toLowerCase()}.jpg" alt="${location.name}">
            <h3>${location.name}</h3>
            <p>Exclusive Offer</p>
            <a href="#" class="btn">Book Now</a>
        `;
        packageList.appendChild(packageDiv);
    });
});
