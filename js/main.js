// Map it up
function initMap() {
  const loc = { lat: 51.132022, lng: -114.203847 };
  const map = new google.maps.Map(document.querySelector('.map')
  , {
    zoom: 14,
    center: loc
      });
const marker = new google.maps.Marker({ position: loc, map:map});
}