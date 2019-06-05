 ymaps.ready(init);    
        function init(){ 
            var map = new ymaps.Map("map", {
                center: [59.94, 30.32],
                zoom: 12,
                behaviors: ['drag']
            }), 
        
         myPlacemark1 = new ymaps.Placemark([59.915, 30.317], {
            hintContent: 'Мы всегда Вам рады!',
            balloonContent: 'Московский проспект д. 2/27.' 
        }, {
            iconLayout: 'default#image',
            iconImageHref: './img/marker.svg',
            iconImageSize: [46, 57],
            iconImageOffset: [-23, -104],
            
        }),

        myPlacemark2 = new ymaps.Placemark([59.94, 30.32], {
            hintContent: 'У нас всегда вкусно!',
            balloonContent: 'Набережная реки Мойки д.22А.' 
        }, {
            iconLayout: 'default#image', 
            iconImageHref: './img/marker.svg',
            iconImageSize: [46, 57],
            iconImageOffset: [-23, -23],
            
        }),

         myPlacemark3 = new ymaps.Placemark([59.961, 30.415], {
            hintContent: 'Свежее, чем здесь продуктов Вам не найти!',
            balloonContent: 'ул. Крюкова д.1 (вход со двора)' 
        }, {
            iconLayout: 'default#image',
            iconImageHref: './img/marker.svg',
            iconImageSize: [46, 57],
            iconImageOffset: [0, -57],
            
        })

    map.geoObjects.add(myPlacemark1)
        .add(myPlacemark2)
        .add(myPlacemark3);
}