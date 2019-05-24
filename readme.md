### Adicionando um marcador customizado ao mapa

1. main.controller.js

```javascript

    var popup = L.popup()
      .setLatLng([51.505, -0.09])
      .setContent('Olá, eu sou um exemplo de popup')
      .openOn(map);

    popup.openOn(map);
```