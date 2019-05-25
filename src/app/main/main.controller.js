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
    var minGeomQuantity = 2;
    var maxGeomQuantity = 2;

    var layerGeometries = L.featureGroup();
    map.addLayer(layerGeometries);


    function mapStatusEvent() {

				if(layerGeometries.getLayers().length >= minGeomQuantity
						&& layerGeometries.getLayers().length <= maxGeomQuantity) {
					alert('Mapa OK, está com ' + layerGeometries.getLayers().length + ' geometrias');

				}
				else {
					alert('Mapa ainda não OK, está com ' + layerGeometries.getLayers().length + ' geometrias');

				}
			};

    function adicionarGeometria(geom, inicial) {


				if(geom && layerGeometries.getLayers().length >= maxGeomQuantity) {
					alert('É permitido definir apenas ' + maxGeomQuantity + ' geometrias.', 'warning', {timeout: 5000});
				} else {
					var drawnGeom = geom.toGeoJSON().geometry;
					if(drawnGeom.type === 'Polygon' && drawnGeom.coordinates.length === 1) {
						if(drawnGeom.coordinates[0].length < 4) {
							alert('Geometrias devem possuir pelo menos 3 pontos. Geometria encontrada possui ' + drawnGeom.coordinates[0].length + ' pontos.', 'warning', {timeout: 5000});
						}
						else {
							layerGeometries.addLayer(geom);
							if(!inicial) {
								alert('Geometria adicionada ao mapa.', 'success', {timeout: 5000});
							}
							return true;
						}
					}
					else if(drawnGeom.type === 'Point' && drawnGeom.coordinates.length === 2) {
						layerGeometries.addLayer(geom);
						if(!inicial) {
							alert('Geometria adicionada ao mapa.', 'success', {timeout: 5000});
						}
						return true;
					}
					else if(drawnGeom.type === 'MultiPolygon' && drawnGeom.coordinates.length > 0) {
						drawnGeom.coordinates.forEach(function(c) {
							// Convertendo coordenadas para padrão do geojson, pois lat e lng estão em ordem diferente.
							var pol = {'type':'Polygon','coordinates':c};
							var coords = L.geoJSON(pol).getLayers()[0].getLatLngs();

							that.inserirGeometriaNaLista(new L.Polygon(coords), inicial);
						});
						return true;
					}
					else {
						alert('São permitodos apenas marcadores e geometrias com mais de 3 vértices.', 'warning', {timeout: 5000});
					}
				}

				return false;

			};



    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    L.marker([-3.6567033, -64.0763379]).addTo(map)
        .bindPopup('Eae Pessoal...')
        .openPopup();

    
					L.drawLocal = {

						draw: {
							handlers: {
								circle: {
									tooltip: {
										start: 'Clique e arraste para desenhar um círculo'
									}
								},
								circlemarker: {
									tooltip: {
										start: 'Clique no mapa para desenhar um círculo'
									}
								},
								marker: {
									tooltip: {
										start: 'Clique no mapa para posicionar um marcador'
									}
								},
								polygon: {
									tooltip: {
										start: 'Clique para começar a desenhar um polígono',
										cont: 'Clique para continuar desenhando',
										end: 'Clique no primeiro ponto para terminar'
									}
								},
								polyline: {
									error: '<strong>Erro:</strong> Arestas não podem se cruzar!',
									tooltip: {
										start: 'Clique para desenhar linha',
										cont: 'Clique para continuar desenhando',
										end: 'Clique duas vezes para terminar'
									}
								},
								rectangle: {
									tooltip: {
										start: 'Clique e arraste para desenhar um retângulo'
									}
								},
								simpleshape: {
									tooltip: {
										end: 'Solte o botão do mouse para terminar'
									}
								}
							},
							toolbar: {
								actions: {
									title: 'Cancelar desenho',
									text: 'Cancelar'
								},
								buttons: {
									polyline: 'Desenhar uma linha',
									polygon: 'Desenhar um polígono',
									rectangle: 'Desenhar um retângulo',
									circle: 'Desenhar um círculo',
									marker: 'Desenhar um marcador'
								},
								finish: {
									title: "Concluir desenho",
									text: "Concluir"
								},
								undo: {
									title: 'Apagar último ponto desenhado',
									text: 'Apagar último ponto'
								}
							}
						},
						edit: {
							handlers: {
								edit: {
									tooltip: {
										text: 'Arraste os quadrados para editar',
										subtext: 'Clique cancelar para desfazer'
									}
								},
								remove: {
									tooltip: {
										text: 'Clique em um desenho para remover'
									}
								}
							},
							toolbar: {
								actions: {
									cancel: {
										title: 'Cancelar edição, descartar mudanças',
										text: 'Cancelar'
									},
									clearAll: {
										title: 'Remover todas as geometrias',
										text: 'Remover todas'
									},
									save: {
										title: 'Salvar mudanças',
										text: 'Salvar'
									}
								},
								buttons: {
									edit: 'Editar camada',
									editDisabled: 'Sem camadas para editar',
									remove: 'Apagar desenho',
									removeDisabled: 'Sem camadas para apagar'
								}
							}
						}
					}

					map.addControl(new L.Control.Draw({
						position: 'topleft',
						draw: {
							circle: false,
							circlemarker: false,
							marker: true,
							polygon: {
								allowIntersection: false
							},
							polyline: false,
							rectangle: false
						},
						edit: {
							featureGroup: layerGeometries,
							remove: true
						}
					}));

					map.on(L.Draw.Event.CREATED, function(e) {

						if(e) {
							adicionarGeometria(e.layer, false);
						}
					});

					map.on(L.Draw.Event.EDITED, function(e) {

						if(e) {
							mapStatusEvent();
						}
					});

					map.on(L.Draw.Event.DELETED, function(e) {

						if(e) {
							mapStatusEvent();
						}
					});

  }

})();
