### Adicionando Measure ao projeto

 1. Adicionar no bower.json o plugin "leaflet-measure": "^2.1.7"

 2. bower install i

 3. bower.json

```json

    "leaflet-measure": {
      "main": [
        "dist/leaflet-measure.js",
        "dist/leaflet-measure.css"
      ]
    }
```

4. main.controller.js

```javascript

    var options = {
      position: 'topright',
      primaryLengthUnit: 'meters',
      primaryAreaUnit: 'hectares',
      captureZIndex: 10000,
      localization: 'pt_BR'
    };  

    var measureControl = L.control.measure(options);
    measureControl.addTo(map);
```