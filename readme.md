### Adicionando um marcador customizado ao mapa

1. main.controller.js

```javascript

    var myIcon = L.icon({
      iconUrl: 'https://image.flaticon.com/icons/svg/33/33622.svg',
      iconSize: [38, 95]
    });

    var marker = L.marker([52.5, -0.09]).bindPopup('Sim, o homem de ferro morre. <img src="https://i.ytimg.com/vi/Ix-k-MKHXWo/hqdefault.jpg" style="width: 200px; heigth: 200px;">');

    L.setOptions(marker, {icon: myIcon})

    marker.addTo(map);
```