let mapDG;

// Функция для отображения карты
DG.then(function() {
    mapDG = DG.map('map', {
        center: [56.48924492554364, 45.098705291748054],
        zoom: 13
    });
    /* drawGJS(processedGJS); */
});

// Функция для сброса карт(перезагрузка страницы)
function reload() {
    location.reload();
}
