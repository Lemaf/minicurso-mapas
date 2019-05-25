(function() {
  'use strict';

  angular
    .module('minicursoMapas')
    .controller('MainController', MainController);

  /** @ngInject */
  function MainController($window) {

    var vm = this;
    vm.gerarImg = gerarImg;

    var L = $window.L;

    var leafletImage = $window.leafletImage;

    var map = L.map('map').setView([-3.6567033, -64.0763379], 3);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    function gerarImg() {

      leafletImage(map, function(err, canvas) {
        var img = $window.document.createElement('img');
        var dimensions = map.getSize();
        img.width = dimensions.x;
        img.height = dimensions.y;
        var url = canvas.toDataURL();
        var newTab = $window.open();
        newTab.document.body.innerHTML = '<img src=' + url  +' width="760px" height="500px">';
      });

    }

  }

})();
