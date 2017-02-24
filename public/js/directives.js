var amateaDirectives = angular.module('amateaDirectives', []);

	amateaDirectives.directive('amateaFooter', function() {
		return {
			restrict: 'E',
			templateUrl: '/partial/amatea-footer.html',
		};
	});

	amateaDirectives.directive('amateaHeader', function() {
		return {
			restrict: 'E',
			templateUrl: '/partial/amatea-header.html',
		};
	});

	amateaDirectives.directive('amateaToolbar', function() {
		return {
			restrict: 'E',
			templateUrl: '/partial/amatea-toolbar.html',
		};
	});

	amateaDirectives.directive('amateaVinculate', function() {
		return {
			restrict: 'E',
			templateUrl: '/partial/amatea-vinculate.html',
		};
	});

	amateaDirectives.directive('amateaContenido', function() {
		return {
			restrict: 'E',
			templateUrl: '/partial/contenido/amatea-contenido2.html',
		};
	});

	amateaDirectives.directive('amateaBosques', function() {
		return {
			restrict: 'E',
			templateUrl: '/partial/contenido/amatea-bosques.html',
		};
	});

	amateaDirectives.directive('amateaSomos', function() {
		return {
			restrict: 'E',
			templateUrl: '/partial/contenido/amatea-somoshuella.html',
		};
	});

	amateaDirectives.directive('amateaMarcas', function() {
		return {
			restrict: 'E',
			templateUrl: '/partial/contenido/amatea-marcas.html',
		};
	});

	amateaDirectives.directive('amateaNoticias', function() {
		return {
			restrict: 'E',
			templateUrl: '/partial/amatea-noticias.html',
		};
	});

	amateaDirectives.directive('adminToolbar', function() {
		return {
			restrict: 'E',
			templateUrl: '/partial/administracion/admin-toolbar.html',
		};
	});
