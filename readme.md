### Adicionando leaflet-image ao projeto

  2. bower install leaflet-image --save

  3. main.controller.js

  ```javascript

    var vm = this;
    vm.gerarImg = gerarImg;
    var leafletImage = $window.leafletImage;
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
  ```