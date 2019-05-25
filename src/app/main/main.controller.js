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

    L.marker([10, 10]).addTo(map);
    L.marker([40, 60]).addTo(map);
    L.marker([20, 30]).addTo(map);

    var ponto1 = L.point(10, 10);
    var ponto2 = L.point(40, 60);
    var ponto3 = L.point(20, 30);
    L.bounds([ponto1, ponto2, ponto3]);

    var latLng1 = L.latLng(10, 10);
    var latLng2 = L.latLng(40, 60);
    var latLng3 = L.latLng(20, 30);
    var latLngBounds = L.latLngBounds([latLng1, latLng2, latLng3]);

    map.fitBounds(latLngBounds);

  }

})();
