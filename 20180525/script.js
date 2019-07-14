// initialize the map on the "map" div with a given center and zoom
var map = new L.Map('map', {
  zoom: 6,
  minZoom: 3,
});

// create a new tile layer
var tileUrl = 'http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
layer = new L.TileLayer(tileUrl,
{
    attribution: 'Maps © <a href=\"www.openstreetmap.org/copyright\">OpenStreetMap</a> contributors',
    maxZoom: 18
});

// add the layer to the map
map.addLayer(layer);

var londonParisRomeBerlinBucarest = [
[25.123134, 121.467310],
[25.123791, 121.464558],
[25.126206, 121.461366],
[25.129120, 121.459736],
[25.131335, 121.458362],
[25.132695, 121.459092],
[25.136774, 121.460208],
[25.138522, 121.459778],
[25.147768, 121.459607],
[25.150643, 121.459650],
[25.155732, 121.459435],
[25.157752, 121.458148],
[25.158645, 121.457590],
[25.159811, 121.454028],
[25.160549, 121.453298],
[25.161792, 121.452783],
[25.162724, 121.452182],
[25.163695, 121.451195],
[25.165365, 121.450251],
[25.166375, 121.448320],
[25.167579, 121.447076],
[25.169288, 121.447848],
[25.173133, 121.450723],
[25.173444, 121.447204],
[25.173896, 121.447038]

];

var carIcon = L.icon({
    iconUrl: './car.png',
    // shadowUrl: 'leaf-shadow.png',

    iconSize:     [38, 95], // size of the icon
    iconAnchor:   [22, 94], // point of the icon which will correspond to marker's location
    popupAnchor:  [-3, -76] // point from which the popup should open relative to the iconAnchor
});
// L.marker([51.5, -0.09], {icon: greenIcon}).addTo(map);

map.fitBounds(londonParisRomeBerlinBucarest);

var marker2 = L.Marker.movingMarker(londonParisRomeBerlinBucarest,
    [1000, 1000, 1000, 1000,1000, 1000, 1000, 1000,1000, 1000, 1000, 1000,1000, 1000, 1000, 1000,1000, 1000, 1000, 1000,1000, 1000, 1000, 1000],
    {autostart: true,icon: carIcon}).addTo(map);
L.polyline(londonParisRomeBerlinBucarest, {color: '#'}).addTo(map);


marker2.on('end', function() {
    marker2.bindPopup('<b>Welcome to TKU !</b>', {closeOnClick: false})
    .openPopup();
});
