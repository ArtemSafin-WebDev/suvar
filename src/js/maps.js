import { isMobile } from "./utilities";

export default function maps() {
    const elements = Array.from(document.querySelectorAll('.js-map'));

    

    elements.forEach(element => {
        ymaps.ready(initMap);
        function initMap() {

            console.log('Initializing map')
            const pointsMapData = window.pointsMapData;
            const center = window.center;
            const zoomLevel = window.zoomLevel;
            const mobileZoomLevel = window.mobileZoomLevel;
            if (!pointsMapData) {
                console.log('No map data');
                return;
            }

            console.log(pointsMapData, center)

            const pin = {
                iconLayout: 'default#image',
                iconImageHref: 'img/pin.svg',
                iconImageSize: [22, 30],
                iconImageOffset: [-11, -30]
            };

            const mapInstance = new ymaps.Map(element, {
                center: center,
                zoom: isMobile() ? (mobileZoomLevel ? mobileZoomLevel : 5) : (zoomLevel ? zoomLevel : 10),
                controls: []
            });

            mapInstance.behaviors.disable('scrollZoom');

            const zoomControl = new ymaps.control.ZoomControl({
                options: {
                    size: 'small',
                    position: {
                        right: 10,
                        bottom: 60
                    }
                }
            });
            mapInstance.controls.add(zoomControl);

            var objectManager = new ymaps.ObjectManager({
                geoObjectOpenBalloonOnClick: false,
                clusterize: false
            });
            mapInstance.geoObjects.add(objectManager);

            if (pointsMapData) {
                pointsMapData.forEach(function(item) {
                    var objectToAdd = {
                        id: item.coords.join('-'),
                        type: 'Feature',
                        geometry: {
                            type: 'Point',
                            coordinates: item.coords
                        },
                        options: {
                            ...pin,
                            balloonShadow: false,
                            hideIconOnBalloonOpen: false
                        }
                    };

                    objectManager.add(objectToAdd);
                });
            }
        }
    });
}
