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

    var map = L.map('map').setView([-3.46956, -52.82227], 6);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    var data = {
      "type": "FeatureCollection",
      "features": [
        {
          "type": "Feature",
          "properties": {},
          "geometry": {
            "type": "Polygon",
            "coordinates": [
              [
                [
                  -53.558349609375,
                  -3.3050503438610943
                ],
                [
                  -54.31091308593749,
                  -3.853293194062035
                ],
                [
                  -54.12414550781249,
                  -4.5161902548267
                ],
                [
                  -53.3001708984375,
                  -4.833733396156413
                ],
                [
                  -52.2784423828125,
                  -4.154679440673942
                ],
                [
                  -52.470703125,
                  -3.332470101396139
                ],
                [
                  -53.558349609375,
                  -3.3050503438610943
                ]
              ]
            ]
          }
        }
      ]
    };

    L.geoJSON(data).addTo(map);

  }

})();
