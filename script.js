const map = L.map('map').setView([40.7440, -74.0324], 13);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '&copy; OpenStreetMap contributors'
}).addTo(map);

L.marker([40.7440, -74.0324])
  .addTo(map)
  .bindPopup('Hello from Hoboken!')
  .openPopup();
