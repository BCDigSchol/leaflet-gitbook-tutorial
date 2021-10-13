var mapOptions = {
 center: [42.336004, -71.169212], //set center Lat/Long of your area of interest
 zoom: 16 , //set initial zoom level
 maxZoom : 24,  //set max zoom level
 tap: false,
 }

//Creates map object according to map options
var map = new L.map('map', mapOptions);
//Example of an externally called basemap
var Esri_WorldImagery = L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', {
			attribution: 'Tiles &copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community'});
Esri_WorldImagery.addTo(map);

var bcLibrary= L.marker( [42.336004, -71.169212] ).addTo(map);
//adds marker at designated lat/long

var libraryPolygon = L.polygon([
    [42.336477, -71.169550],
    [42.336569, -71.169126],
    [42.335788, -71.168826],
    [42.335728, -71.169314]
]).addTo(map);

//with the external js holding your data, only this line of code needs to be added to add your data to the map
L.geoJSON(bcKMLTest, {
    onEachFeature: popUp
}).addTo(map);

//add pop up box to original BC library marker
bcLibrary.bindPopup("<b>I'm the Boston College Library</b>");

//if your features come with various attributes already attached to them,
//this function will create your popup box based on those features!

function popUp(feature, layer) {
    var out = [];
		if (feature.properties){
		     out.push("The name of location is is: " + feature.properties.Name);
		     out.push("The description of the location is:" + feature.properties.description);
		     out.push("Have a nice day!");
		}
		layer.bindPopup(out.join("<br />"));
}
