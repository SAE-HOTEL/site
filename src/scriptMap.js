function initMap() {
    var myLatLng = { lat: 48.8566, lng: 2.3522 }; // Coordonnées de Paris
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 12, // Niveau de zoom
        center: myLatLng // Centre de la carte
    });
}
document.addEventListener('DOMContentLoaded', initMap);