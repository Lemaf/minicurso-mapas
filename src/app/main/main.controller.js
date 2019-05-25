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

    var defaultLayer = L.tileLayer.provider('OpenStreetMap.Mapnik').addTo(map);
    var baseLayers = {
      'OpenStreetMap Default': defaultLayer,
      'OpenStreetMap German Style': L.tileLayer.provider('OpenStreetMap.DE'),
      'OpenStreetMap H.O.T.': L.tileLayer.provider('OpenStreetMap.HOT'),
      'Thunderforest OpenCycleMap': L.tileLayer.provider('Thunderforest.OpenCycleMap'),
      'Thunderforest Transport': L.tileLayer.provider('Thunderforest.Transport'),
      'Thunderforest Landscape': L.tileLayer.provider('Thunderforest.Landscape'),
      'Hydda Full': L.tileLayer.provider('Hydda.Full'),
      'MapBox Example': L.tileLayer.provider('MapBox', {
        id: 'mapbox.streets',
        accessToken: 'pk.eyJ1IjoiZ3V0ZW55ZSIsImEiOiJmNjJlMDNmYTUyMzNjMzQxZmY4Mzc1ZmFiYmExNjMxOSJ9.xgl1PBwQV9CtwW-usedrcQ'
      }),
      'Stamen Toner': L.tileLayer.provider('Stamen.Toner'),
      'Stamen Terrain': L.tileLayer.provider('Stamen.Terrain'),
      'Stamen Watercolor': L.tileLayer.provider('Stamen.Watercolor'),
      'Esri WorldStreetMap': L.tileLayer.provider('Esri.WorldStreetMap'),
      'Esri DeLorme': L.tileLayer.provider('Esri.DeLorme'),
      'Esri WorldTopoMap': L.tileLayer.provider('Esri.WorldTopoMap'),
      'Esri WorldImagery': L.tileLayer.provider('Esri.WorldImagery'),
      'Esri WorldTerrain': L.tileLayer.provider('Esri.WorldTerrain'),
      'Esri WorldShadedRelief': L.tileLayer.provider('Esri.WorldShadedRelief'),
      'Esri WorldPhysical': L.tileLayer.provider('Esri.WorldPhysical'),
      'Esri OceanBasemap': L.tileLayer.provider('Esri.OceanBasemap'),
      'Esri NatGeoWorldMap': L.tileLayer.provider('Esri.NatGeoWorldMap'),
      'Esri WorldGrayCanvas': L.tileLayer.provider('Esri.WorldGrayCanvas')
    };
    var overlayLayers = {
      'OpenSeaMap': L.tileLayer.provider('OpenSeaMap'),
      'OpenWeatherMap Clouds': L.tileLayer.provider('OpenWeatherMap.Clouds'),
      'OpenWeatherMap CloudsClassic': L.tileLayer.provider('OpenWeatherMap.CloudsClassic'),
      'OpenWeatherMap Precipitation': L.tileLayer.provider('OpenWeatherMap.Precipitation'),
      'OpenWeatherMap PrecipitationClassic': L.tileLayer.provider('OpenWeatherMap.PrecipitationClassic'),
      'OpenWeatherMap Rain': L.tileLayer.provider('OpenWeatherMap.Rain'),
      'OpenWeatherMap RainClassic': L.tileLayer.provider('OpenWeatherMap.RainClassic'),
      'OpenWeatherMap Pressure': L.tileLayer.provider('OpenWeatherMap.Pressure'),
      'OpenWeatherMap PressureContour': L.tileLayer.provider('OpenWeatherMap.PressureContour'),
      'OpenWeatherMap Wind': L.tileLayer.provider('OpenWeatherMap.Wind'),
      'OpenWeatherMap Temperature': L.tileLayer.provider('OpenWeatherMap.Temperature'),
      'OpenWeatherMap Snow': L.tileLayer.provider('OpenWeatherMap.Snow')
    };
    var layerControl = L.control.layers(baseLayers, overlayLayers, {
      collapsed: false
    }).addTo(map);
    // resize layers control to fit into view.
    function resizeLayerControl() {
      var layerControlHeight = document.body.clientHeight - (10 + 50);
      var layerControl = document.getElementsByClassName('leaflet-control-layers-expanded')[0];
      layerControl.style.overflowY = 'auto';
      layerControl.style.maxHeight = layerControlHeight + 'px';
    }
    map.on('resize', resizeLayerControl);
    resizeLayerControl();
  }

})();
