### Adicionando um icon customizado ao mapa

1. main.controller.js

```javascript

    var myIcon = L.icon({
      iconUrl: 'https://image.flaticon.com/icons/svg/33/33622.svg',
      iconSize: [38, 95]
    });

    L.marker([51.505, -0.09], {icon: myIcon}).addTo(map);
```