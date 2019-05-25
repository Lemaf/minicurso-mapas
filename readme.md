### Adicionando um DivIcon ao mapa

1. main.controller.js

```javascript

    var myIcon = L.divIcon({className: 'my-div-icon'});
    L.marker([-3.6567033, -64.0763379], {icon: myIcon}).addTo(map);
```

1. index.css

```css

  .my-div-icon {
    position: absolute;
    top: 40%;
    left: 50%;
    margin-left: 115px;

    border-radius: 50%;
    border: 10px solid #000;
    width: 8px;
    height: 8px;
  }

  .my-div-icon::after {
    position: absolute;
    content: '';
    width: 0px;
    height: 0px;
    bottom: -29px;
    left: -10px;
    border: 10px solid transparent;
    border-top: 17px solid #000;
  }
```
