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
	return $resource('/api/contacto/:id', {id: '@_id'}, {
		update: { method: 'PUT'},
		get: { method: 'GET', isArray: false},
		show: { method: 'GET'}
	})
}]);

app.factory('Proyecto', ['$resource', function($resource){
	return $resource('projects.json/:id', {id: '@id'}, {
		update: { method: 'PUT'},
		get: { method: 'GET', isArray: false},
		show: { method: 'GET'}
	})
}]);


// ---------- APIDENDROS

app.filter('trustUrl', function ($sce) {
    return function(url) {
      return $sce.trustAsResourceUrl(url);
    };
});

app.factory('Ave', ['$resource', function($resource){
	return $resource('api/aves/:id', {id: '@_id'}, {
		update: { method: 'PUT'},
		get: { method: 'GET', isArray: false},
		show: { method: 'GET'}
	})
}]);