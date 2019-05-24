### Adicionando um DivIcon ao mapa

1. main.controller.js

```javascript

    L.tileLayer('http://car.semas.pa.gov.br/site/mosaicos/rapid-eye/{z}/{x}/{y}', {
      tms: true
    }).addTo(map);
```