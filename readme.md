### Adicionando um marcador customizado ao mapa

1. main.controller.js

```javascript

    var marker = L.marker([51.5, -0.09]).addTo(map);

    marker.bindTooltip("Tooltip direto no marcador", {sticky: true}).openTooltip();

    var tooltip = L.tooltip({
        direction: 'center',
        permanent: true,
        interactive: true,
        noWrap: true,
        opacity: 0.9
    });
    tooltip.setContent("Tooltip no mapa");
    tooltip.setLatLng(new L.LatLng(51.505, -0.15));
    tooltip.addTo(map);
```