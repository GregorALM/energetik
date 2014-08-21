//@codekit-prepend "vendor/gmaps.js"

(function () {

	var app = {

		initialize: function () {
			this.initMap();
			this.setUpListeners();
		},

		setUpListeners: function () {
			$('#showContacts').on('click', app.showContacts);
			$('.close, #contacts ~ *').on('click', app.hideContacts);
			$('.scrollToMap').on('click', app.scrollToMap);
		},

		scrollToMap: function () {
			app.hideContacts();
			$('html, body').animate({
          scrollTop: $('#map').offset().top
      }, 1500);
		},

		hideContacts: function () {
			$('#contacts').fadeOut(300);
		},

		showContacts: function () {
			$('#contacts').fadeIn(300);
		},

		initMap: function () {
			var map = new GMaps({
				div: '#map',
				height: '495px',
				scrollwheel: false,
				lat: 59.973396,
				lng: 30.3398016
			});
			map.addMarker({
				lat: 59.973396,
				lng: 30.3398016,
				title: 'Б. Сампсониевский, 61',
				infoWindow: {
				  content: '<p>Б. Сампсониевский, 61</p>'
				}	
			});
		}
	};

	app.initialize();
}());
