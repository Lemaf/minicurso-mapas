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

    L.marker([-3.6567033, -64.0763379]).addTo(map)
        .bindPopup('Eae Pessoal...')
        .openPopup();

    L.Control.Watermark = L.Control.extend({
      onAdd: function(map) {
        var img = L.DomUtil.create('img');

        img.src = '../../assets/images/logo-lemaf.svg';
        img.style.width = '200px';

        return img;
      },

      onRemove: function(map) {
        // Nothing to do here
      }
    });

    L.control.watermark = function(opts) {
        return new L.Control.Watermark(opts);
    }

    L.control.watermark({ position: 'bottomleft' }).addTo(map);

  }

})();
