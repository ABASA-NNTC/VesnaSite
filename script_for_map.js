let mapDG;

// Функция для отображения карты
DG.then(function() {
    mapDG = DG.map('map', {
        center: [56.48924492554364, 44.019436870349246],
        zoom: 13
    });

    DG.geoJson(data, {
        style: function (feature) {
            return {
                stroke: true,
                fill: true,
                color: feature.properties.stroke,
                fillColor: feature.properties.fill,
                fillOpacity: feature.properties["fill-opacity"],
            };
        }
    }
    ).addTo(mapDG);

});

// Функция для сброса карт(перезагрузка страницы)
function reload() {
    location.reload();
}
