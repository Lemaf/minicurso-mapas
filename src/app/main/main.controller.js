(function() {
  'use strict';

  angular
    .module('minicursoMapas')
    .controller('MainController', MainController);

  /** @ngInject */
  function MainController($timeout, $window) {

    var L = $window.L;

    var map = L.map('map').setView([-3.6567033, -64.0763379], 3);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    L.control.coordinates({
      position:"bottomleft",
      decimalSeperator:".",
      useDMS:false,
      useLatLngOrder: true,
      markerType: L.marker,
      markerProps: {},
      labelFormatterLng: function(lng) {return "Latitude: " + lng.toFixed(4);},
      labelFormatterLat: function(lat) {return "Latitude: " + lat.toFixed(4);}
    }).addTo(map);

  }

})();
