### Adicionando um marcador customizado ao mapa

1. Instalando plugin
    - Documentações
        - https://github.com/leaflet-extras/leaflet-providers
        - https://www.npmjs.com/package/leaflet-providers
    - Instalação
        - bower install leaflet-providers --save

2. index.html
```javascript
    // body
    <script src="../bower_components/leaflet/dist/leaflet.js" type="text/javascript" charset="utf-8"></script>
    <script src="../bower_components/leaflet-providers/leaflet-providers.js" type="text/javascript" charset="utf-8"></script>
```
3. main.controller.js

```javascript

    L.tileLayer.provider('Stamen.Watercolor').addTo(map);
```
