function initialize() {

  var eMap = $("#map");
  var coords = eMap.attr("data-coords").split(",");
  /* default position */
  var latlng = new google.maps.LatLng(coords[0],coords[1]);

  var mapOptions = {
    center: latlng,
    scrollwheel: false,
    zoom: 9,
    navigationControl: false,
    mapTypeControl: false,
    scaleControl: false,
    panControl: false,
    streetViewControl: false,
    zoomControl: false,
    draggable: false
  };

  var marker = new google.maps.Marker({
    position: latlng,
    url: '/',
    animation: google.maps.Animation.DROP
  });

  var map = new google.maps.Map(document.getElementById("map-canvas"), mapOptions);
  marker.setMap(map);

};

function loadScript() {
  var script = document.createElement('script');
  script.type = 'text/javascript';
  script.src = 'https://maps.googleapis.com/maps/api/js?v=3.exp&callback=initialize';
  document.body.appendChild(script);
}

window.onload = loadScript;
