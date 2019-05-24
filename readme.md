### Bounds

1. main.controller.js

```javascript

    L.marker([10, 10]).addTo(map);
    L.marker([40, 60]).addTo(map);
    L.marker([20, 30]).addTo(map);

    var ponto1 = L.point(10, 10);
    var ponto2 = L.point(40, 60);
    var ponto3 = L.point(20, 30);
    var bounds = L.bounds([ponto1, ponto2, ponto3]);

    var latLng1 = L.latLng(10, 10);
    var latLng2 = L.latLng(40, 60);
    var latLng3 = L.latLng(20, 30);
    var latLngBounds = L.latLngBounds([latLng1, latLng2, latLng3]);

    map.fitBounds(latLngBounds);
```