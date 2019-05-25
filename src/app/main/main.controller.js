(function() {
  'use strict';

  angular
    .module('minicursoMapas')
    .controller('MainController', MainController);

  /** @ngInject */
  function MainController($timeout, $window) {

    // var vm = this;

    // Caso tenha algum analisador de código
    var L = $window.L;

    var map = L.map('map').setView([-3.6567033, -64.0763379], 3);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    var iconRat = L.icon({
      iconUrl: '../../assets/images/rat.png',
      iconSize: [38, 95],
      iconAnchor: [22, 94],
      popupAnchor: [-3, -76],
      shadowUrl: '../../assets/images/ratShadow.png',
      shadowSize: [68, 95],
      shadowAnchor: [22, 94]
    });

    var iconIronman = L.icon({
      iconUrl: '../../assets/images/ironman.png',
      iconSize: [38, 95],
      iconAnchor: [22, 94],
      popupAnchor: [-3, -76],
      shadowSize: [68, 95],
      shadowAnchor: [22, 94]
    });

    var markerRat = L.marker([-3.6567033, -64.0763379]).bindPopup('<img src="../../assets/images/rat.png" style="width: 20px; heigth: 20px;">');
    var markerIronman = L.marker([-3.6567033, -64.0763379]).bindPopup('Sim, o homem de ferro morre. <img src="https://i.ytimg.com/vi/Ix-k-MKHXWo/hqdefault.jpg" style="width: 200px; heigth: 200px;">');

    L.setOptions(markerRat, {icon: iconRat})
    L.setOptions(markerIronman, {icon: iconIronman})

    markerRat.addTo(map);
    markerIronman.addTo(map);

    // markerIronman.openPopup();

  }

})();
