//@codekit-prepend "vendor/gmaps.js"

(function () {

	var app = {

		initialize: function () {
			app.buildProjects(); //расположение баннеров и проектов
			app.initMap(); //установка карты
			app.setUpListeners();
		},

		// текущее состояние секции с проектами и баннерами

		settings: {
			currentColls: 6,
			currentLines: 4,
			displaced: 0,
			currentBanner: $(),
			currentBannerSettings: {},
			bannerType: {
				banner1: {
					collPos: 1,
					linePos: 1,
					width: 3,
					height: 2
				},
				banner2: {
					collPos: 3,
					linePos: 2,
					width: 3,
					height: 1
				},
				banner3: {
					collPos: 1,
					linePos: 2,
					width: 2,
					height: 1
				},
				banner4: {
					collPos: 4,
					linePos: 3,
					width: 2,
					height: 1
				}
			}
		},

		//Лиснеры

		setUpListeners: function () {
			$('#showContacts').click(app.showContacts);
			$('.close, #contacts ~ *').click(app.hideContacts);
			$('.scrollToMap').click(app.scrollToMap);
			$(window).resize(app.rebuildProjects); // перестройка сетки при ресайзе
			$('#more').click(app.moreProjects); //заказ еше пректов
		},

		//Первичное расположение баннеров и проектов

		buildProjects: function () {
			app.settings.currentColls = ($(window).width() < 1366) ? 5 : 6; //регулируем количество колонок

			app.settings.currentBanner = $('#projects > ul').children('#banner1, #banner2, #banner3, #banner4'); //берем баннер полученный от сервера

			if (app.settings.currentBanner.length === 0) {
				app.ajustProjects(); //контроль ровного количества проектов
				return;
			} else {
				app.settings.currentBannerSettings = app.settings.bannerType[app.settings.currentBanner.attr('id')]; //берем соответствующие настройки

				app.settings.currentBanner.width((app.settings.currentBannerSettings.width * 192) + 
					((app.settings.currentBannerSettings.width - 1) * 35)); //назначаем необходимую ширину баннера
				app.settings.currentBanner.height((app.settings.currentBannerSettings.height * 192) + 
					((app.settings.currentBannerSettings.height - 1) * 35)); //назначаем необходимую высоту баннера

				app.settings.displaced = app.settings.currentBannerSettings.width *
				 app.settings.currentBannerSettings.height - 1; //считаем сколько клеток вытесняет баннер

				app.replaceBanner(); //перестраиваем баннер в соответствии с настройками
				app.ajustProjects();
			}
		},

		// Перестановка баннера

		replaceBanner: function () {
			app.settings.currentBanner.detach(); // убераем баннер
			
			var bannerPos = ((app.settings.currentBannerSettings.linePos - 1) * app.settings.currentColls) +
			 app.settings.currentBannerSettings.collPos - 1; // вычисляем порядковую позицию в списке
		
			app.settings.currentBanner.insertBefore('#projects li:eq(' + bannerPos  + ')'); 
		},

		//контроль ровного количества ячеек

		ajustProjects: function () {
			var nowShow = $('#projects .show').length,
				needShow = app.settings.currentColls * app.settings.currentLines - app.settings.displaced;

			if (nowShow < needShow) {
				$('#projects li:lt(' + needShow + ')').addClass('show');
			} else {
				$('#projects .show:gt(' + (needShow - 1) + ')').removeClass('show');
			}

		},

		//перестройка(☭) при ресайзе

		rebuildProjects:function () {
			if ($(window).width() > 1366 && app.settings.currentColls === 5) {
				app.settings.currentColls = 6;
				app.replaceBanner();
				app.ajustProjects();
			}
			if ($(window).width() < 1366 && app.settings.currentColls === 6) {
				app.settings.currentColls = 5;
				app.replaceBanner();
				app.ajustProjects();
			}
		},

		// Прокрутка к карте

		scrollToMap: function () {
			app.hideContacts();
			$('html, body').animate({
          scrollTop: $('#map').offset().top
      }, 1500);
		},

		// Показ и закрытие секции с контактами

		hideContacts: function () {
			$('#contacts').fadeOut(300);
		},

		showContacts: function () {
			$('#contacts').fadeIn(300);
		},

		// Инициализация карты

		initMap: function () {
			var map = new GMaps({
				div: '#map',
				height: '495px',
				scrollwheel: false,
				lat: 59.973396,
				lng: 30.3398016
			}),
				infoWindow = new google.maps.InfoWindow({
			    content: '<p>Б. Сампсониевский, 61</p>'
			}),
				marker = map.addMarker({
				lat: 59.973396,
				lng: 30.3398016,
				title: 'Б. Сампсониевский, 61',
				icon: 'img/marker.png',
				infoWindow: infoWindow
			});
			infoWindow.open(map,marker);

		},

		// заказ дополнительных проектов с сервера

		moreProjects: function () {
			var needMax = app.settings.currentColls * 3,
				notShowed = $('#projects li').length - $('#projects .show').length; 
				console.log(needMax+' '+notShowed);

			$.ajax({
				url: '/quasi-joomla.php',
				type: 'post',
				dataType: 'html',
				data: {'need': needMax - notShowed + 1}, //1 нужно чтобы гарантировать что при увеличении ширины страницы ряды заполнятся полностью
				success: function (data) {
					console.log(data);
					subElmts = $(data);
					subElmts.appendTo('#projects ul');
					app.settings.currentLines += 3;
					app.ajustProjects();
					if (subElmts.length < needMax - notShowed + 1) {$('#more').attr({"disabled": "disabled"});}
				}
			});
		}
	};

	app.initialize();
}());
