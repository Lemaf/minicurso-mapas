### Adicionando Coordinates ao projeto

 1. bower install Leaflet.Coordinates --save

 2. main.controller.js

```javascript

    L.control.coordinates({
      position:"bottomleft",
      decimalSeperator:".",
      useDMS:false,
      useLatLngOrder: true,
      markerType: L.marker,
      markerProps: {},
      labelFormatterLng: function(lng) {return "Latitude: " + lng.toFixed(4);},
      labelFormatterLat: function(lat) {return "Latitude: " + lat.toFixed(4);}
    }).addTo(map);
```