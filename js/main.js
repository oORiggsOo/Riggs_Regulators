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

// Sticky Menu Background

window.addEventListener('scroll', function() {
  if (window.scrollY > 150) {
    document.querySelector('#navbar').style.opacity = 0.9;
      } else {
    document.querySelector('#navbar').style.opacity = 1;
  }
});

// Smooth Scroll
$('#navbar a, .btn').on('click', function(event) {
  if (this.hash !== '') {
    event.preventDefault();

    const hash = this.hash;

    $('html, body').animate(
        {
          scrollTop: $(hash).offset().top - 65
        },
        800
    );
  }
});