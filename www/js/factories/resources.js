var apiUrl 			=	'http://localhost:8000/api/finapp/';
angular.module('app')

	.factory('Account', function($resource){
		return $resource(apiUrl+'v1/accounts/:id', {
			id 			: 		'@id'
		});
	})
	.factory('Category', function($resource){
		return $resource(apiUrl+'v1/categories', {});
	})
	factory('Biller', function($resource){
		return $resource(apiUrl+'v1/billers', {});
	});