(function() {
  'use strict';

  angular
    .module('minicursoMapas')
    .controller('MainController', MainController);

  /** @ngInject */
  function MainController($timeout, $window) {

    var L = $window.L;

    var map = L.map('map').setView([-3.6567033, -64.0763379], 5);

    var options = {
      position: 'topright',
      primaryLengthUnit: 'meters',
      primaryAreaUnit: 'hectares',
      captureZIndex: 10000,
      localization: 'pt_BR'
    };  

    L.tileLayer('http://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}.png').addTo(map);

    var measureControl = L.control.measure(options);
    measureControl.addTo(map);

  }

})();
