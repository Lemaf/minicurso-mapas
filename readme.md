### Adicionando um marcador customizado ao mapa

1. Instalando plugin
    - Documentações
        - https://github.com/Leaflet/Leaflet.fullscreen
        - https://www.npmjs.com/package/leaflet-fullscreen
    - Instalação
        - bower install leaflet-fullscreen --save

2. index.html
```javascript
    // head
    <link rel="stylesheet" media="screen" href="../bower_components/Leaflet.fullscreen/dist/leaflet.fullscreen.css">
    // body
    <script src="../bower_components/Leaflet.fullscreen/dist/Leaflet.fullscreen.min.js" type="text/javascript" charset="utf-8"></script>
```
2. main.controller.js

```javascript

    map.addControl(new L.Control.Fullscreen({
      position: 'topright',
      title: {
        'false': 'Ativar modo de tela cheia',
        'true': 'Desativar modo de tela cheia'
      }
    }));
```
