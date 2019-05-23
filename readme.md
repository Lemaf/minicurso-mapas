### Adicionando leaflet ao projeto

 1. Fazer a instalação via bower: https://bower.io/search/

 2. bower install leaflet --save

 3. bower.json

```json
    "leaflet": {
        "main": [
        "dist/leaflet.js",
        "dist/leaflet.css"
        ]
    }
```

### Configurando leaflet ao projeto

1. index.css

```css
    #map { height: 400px; width: 100%; }
```

2. main.html

```html
    <div id="map"></div>
 ```

3. main.controller.js

```javascript

    // Caso tenha algum analisador de código
    var L = $window.L;

    var map = L.map('map').setView([51.505, -0.09], 13);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    L.marker([51.5, -0.09]).addTo(map)
        .bindPopup('A pretty CSS3 popup.<br> Easily customizable.')
        .openPopup();
```