var zoomIn = document.getElementById("map-size").value;
var listen = document.getElementById("map-size").onclick;
var ar = [
    {
        name: "place1",
        address: "205 E Guenther St, San Antonio, TX 78204"
    },
    {
        name: "place2",
        address: "510 S Alamo St #104, San Antonio, TX 78205"
    },
    {
        name: "place3",
        address: "155 E Commerce St, San Antonio, TX 78205"
    }
];
mapboxgl.accessToken = mapboxToken;
var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/dark-v9',
    zoom: zoomIn,
    center: [-98.4916, 29.4252]
});
ar.forEach(function (value) {
    var results;
    geocode(value.address, mapboxToken).then(function(result) {
        results = result;
        var popup = new mapboxgl.Popup()
            .setText(value.name)
            .addTo(map);
        var marker = new mapboxgl.Marker()
            .setLngLat(results)
            .addTo(map)
            .setPopup(popup);
    });
});