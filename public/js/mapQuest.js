function initMap() {
	// add your code here
	L.mapquest.key = 'nw2sWaDll9iBXYXmvnJ1USHfrS7dDCeS';

	var map = L.mapquest.map('map', {
		center: [32.8986895, -117.2359121],
		layers: L.mapquest.tileLayer('map'),
		zoom: 12,
		zoomControl: false
	});

	L.marker([32.8986895, -117.2359121]).addTo(map);
}