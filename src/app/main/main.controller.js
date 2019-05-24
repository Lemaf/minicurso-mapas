(function() {
  'use strict';

  angular
    .module('minicursoMapas')
    .controller('MainController', MainController);

  /** @ngInject */
  function MainController($timeout, $window) {

    var vm = this;
    vm.ativar = ativar;
    vm.layer = null;

    var L = $window.L;

    vm.map = L.map('map').setView([-3.6567033, -64.0763379], 3);

    L.tileLayer('http://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}.png').addTo(vm.map);

    vm.layer = L.tileLayer.wms("http://amazonas01.ti.lemaf.ufla.br:8080/geoserver/areas_restritas_am/wms?", {
      layers: 'areas_restritas_am:terra_indigena',
      format: 'image/png',
      transparent: true,
      attribution: "Weather data © 2012 IEM Nexrad"
    }).addTo(vm.map);

    function ativar() {

      if(vm.map.hasLayer(vm.layer)) {

        vm.map.removeLayer(vm.layer);

      } else {

        vm.map.addLayer(vm.layer);

      }

    }

  }

})();
