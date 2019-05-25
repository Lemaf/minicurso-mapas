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

    var myIcon = L.icon({
      iconUrl: 'https://image.flaticon.com/icons/svg/33/33622.svg',
      iconSize: [38, 95]
    });

    L.marker([-3.6567033, -64.0763379], {icon: myIcon}).addTo(map);

  }

})();
