$(".theme-div")
  .children()
  .click(function () {
    var selected = $(this)[0].className;
    if (selected != active) {
      var active = selected;
      $(this).css("pointer-events", "none");
      var background = $(this).css("background-color");
      $(".div-left").css({
        "background-color": background
      });
      $(".text-logo").css({
        "background-color": background
      });
      $(".diag-line-1").css({
        "background-color": "linear-gradient(188deg," +
          background +
          ", 60%, rgba(255, 0, 0, 0) 0)"
      });
      $(this).toggleClass("theme-active");
    }

    $(".theme-div")
      .children()
      .not("div." + selected)
      .css("pointer-events", "auto")
      .removeClass("theme-active");
  });

$(document).ready(function () {
  $('.contact-container input, .contact-container textarea').blur(function () {
    if ($(this).val() !== '' && !$(this).hasClass('not-empty')) {
      $(this).addClass('not-empty');
    } else if ($(this).val() === '') {
      $(this).removeClass('not-empty');
    }
  });
});

var map;

function initMap() {
  var school = {
    lat: 41.798451,
    lng: -72.713766
  };
  map = new google.maps.Map(document.getElementById('map'), {
    center: school,
    zoom: 15,
    disableDefaultUI: true,
    styles: [{
        "elementType": "geometry",
        "stylers": [{
          "color": "#0b0c10"
        }]
      },
      {
        "elementType": "labels",
        "stylers": [{
          "visibility": "off"
        }]
      },
      {
        "elementType": "labels.icon",
        "stylers": [{
          "visibility": "off"
        }]
      },
      {
        "elementType": "labels.text.fill",
        "stylers": [{
          "color": "#757575"
        }]
      },
      {
        "elementType": "labels.text.stroke",
        "stylers": [{
          "color": "#212121"
        }]
      },
      {
        "featureType": "administrative",
        "stylers": [{
          "visibility": "off"
        }]
      },
      {
        "featureType": "administrative",
        "elementType": "geometry",
        "stylers": [{
          "color": "#757575"
        }]
      },
      {
        "featureType": "administrative.country",
        "elementType": "labels.text.fill",
        "stylers": [{
          "color": "#9e9e9e"
        }]
      },
      {
        "featureType": "administrative.land_parcel",
        "stylers": [{
          "visibility": "off"
        }]
      },
      {
        "featureType": "administrative.locality",
        "elementType": "labels.text.fill",
        "stylers": [{
          "color": "#bdbdbd"
        }]
      },
      {
        "featureType": "administrative.neighborhood",
        "stylers": [{
          "visibility": "off"
        }]
      },
      {
        "featureType": "landscape.man_made",
        "stylers": [{
          "visibility": "off"
        }]
      },
      {
        "featureType": "landscape.natural",
        "stylers": [{
          "visibility": "on"
        }]
      },
      {
        "featureType": "poi",
        "elementType": "labels.text.fill",
        "stylers": [{
          "color": "#757575"
        }]
      },
      {
        "featureType": "poi.park",
        "stylers": [{
          "visibility": "off"
        }]
      },
      {
        "featureType": "poi.park",
        "elementType": "geometry",
        "stylers": [{
            "color": "#181818"
          },
          {
            "visibility": "off"
          }
        ]
      },
      {
        "featureType": "poi.park",
        "elementType": "labels.text.fill",
        "stylers": [{
          "color": "#616161"
        }]
      },
      {
        "featureType": "poi.park",
        "elementType": "labels.text.stroke",
        "stylers": [{
          "color": "#1b1b1b"
        }]
      },
      {
        "featureType": "poi.school",
        "stylers": [{
          "visibility": "on"
        }]
      },
      {
        "featureType": "poi.school",
        "elementType": "geometry.fill",
        "stylers": [{
          "color": "#181818"
        }]
      },
      {
        "featureType": "poi.school",
        "elementType": "labels.icon",
        "stylers": [{
          "visibility": "off"
        }]
      },
      {
        "featureType": "road",
        "elementType": "geometry.fill",
        "stylers": [{
          "color": "#2c2c2c"
        }]
      },
      {
        "featureType": "road",
        "elementType": "labels.text.fill",
        "stylers": [{
          "color": "#8a8a8a"
        }]
      },
      {
        "featureType": "road.arterial",
        "elementType": "geometry",
        "stylers": [{
          "color": "#373737"
        }]
      },
      {
        "featureType": "road.highway",
        "elementType": "geometry",
        "stylers": [{
          "color": "#3c3c3c"
        }]
      },
      {
        "featureType": "road.highway.controlled_access",
        "elementType": "geometry",
        "stylers": [{
          "color": "#4e4e4e"
        }]
      },
      {
        "featureType": "road.local",
        "elementType": "labels.text.fill",
        "stylers": [{
          "color": "#616161"
        }]
      },
      {
        "featureType": "transit",
        "elementType": "labels.text.fill",
        "stylers": [{
          "color": "#757575"
        }]
      },
      {
        "featureType": "water",
        "elementType": "geometry",
        "stylers": [{
          "color": "#000000"
        }]
      },
      {
        "featureType": "water",
        "elementType": "labels.text.fill",
        "stylers": [{
          "color": "#3d3d3d"
        }]
      }
    ]
  });
}