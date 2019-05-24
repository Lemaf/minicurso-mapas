### Bounds

1. main.controller.js

```javascript

    L.Control.Watermark = L.Control.extend({
      onAdd: function(map) {
        var img = L.DomUtil.create('img');

        img.src = '../../assets/images/logo-lemaf.svg';
        img.style.width = '200px';

        return img;
      },

      onRemove: function(map) {
        // Nothing to do here
      }
    });

    L.control.watermark = function(opts) {
        return new L.Control.Watermark(opts);
    }

    L.control.watermark({ position: 'bottomleft' }).addTo(map);
```