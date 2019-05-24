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

    var map = L.map('map').setView([51.505, -0.09], 13);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    var popup = L.popup()
      .setLatLng([51.505, -0.09])
      .setContent('Olá, eu sou um exemplo de popup')
      .openOn(map);

    popup.openOn(map);
  }

})();
