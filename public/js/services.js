var amateaServices = angular.module('amateaServices', []);

app.factory('Bosque', ['$resource', function($resource){
	return $resource('api/bosques/:id', {id: '@_id'}, {
		update: { method: 'PUT'},
		get: { method: 'GET', isArray: false},
	})
}]);

app.factory('Donacion', ['$resource', function($resource){
	return $resource('api/donaciones/:id', {id: '@_id'}, {
		update: { method: 'PUT'},
		get: { method: 'GET', isArray: false},
	})
}]);

app.factory('Noticia', ['$resource', function($resource){
	return $resource('api/noticias/:id', {id: '@_id'}, {
		update: { method: 'PUT'},
		get: { method: 'GET', isArray: false},
		show: { method: 'GET'}
	})
}]);

app.factory('Contacto', ['$resource', function($resource){
	return $resource('/services/contactoroute/:id', {id: '@_id'}, {
		update: { method: 'PUT'},
		get: { method: 'GET', isArray: false},
		show: { method: 'GET'}
	})
}]);

app.factory('Proyecto', ['$resource', function($resource){
	return $resource('api/proyectos/:id', {id: '@_id'}, {
		update: { method: 'PUT'},
		get: { method: 'GET', isArray: false},
		show: { method: 'GET'}
	})
}]);