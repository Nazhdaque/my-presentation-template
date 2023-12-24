ymaps.ready(init);
function init() {
	const myMap = new ymaps.Map(
		"ymap",
		{
			center: [55.823738, 37.412635],
			zoom: 11,
		},
		{ searchControlProvider: "yandex#search" }
	);

	const address_1 = new ymaps.Placemark(
		[55.805918, 37.544201],
		{
			iconContent: "Головной офис",
			balloonContentHeader: "Lorem Printum",
			balloonContentBody: [
				"<address>",
				"Штаб-квартира компании располагается по адресу:",
				"<br/>",
				"125319, Москва, Кочновский проезд, дом 4, корпус 2",
				"<br/>",
				"</address>",
			].join(""),
			balloonContentFooter: "Метка на карте указывает прямо на вход в офис!",
			hintContent: "Кочновский проезд, 4к2",
		},
		{ preset: "islands#redStretchyIcon" }
	);

	const address_2 = new ymaps.GeoObject(
		{
			geometry: {
				type: "Point",
				coordinates: [55.835519, 37.324639],
			},
			properties: {
				iconContent: "Доп. офис",
				hintContent: "Первомайская улица, 16",
			},
		},
		{ preset: "islands#blueStretchyIcon" }
	);

	myMap.geoObjects.add(address_1).add(address_2);
}
