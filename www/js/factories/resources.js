var apiUrl 			=	'http://localhost:8000/api/finapp/';
angular.module('app')
	.factory('Account', function($resource){
		return $resource(apiUrl+'v1/accounts/:id', {
			id 			: 		'@id'
		}, {
			update 		: 	{
				method 	: 	'PUT',
				isArray	: 	false
			}
		});
	})
	.factory('BankAccount', function($resource){
		return $resource(apiUrl+'v1/accounts/:accountId/bank-accounts/:bankAccountId', {
			accountId 			: 	'@accountId',
			bankAccountId 		: 	'@bankAccountId'
		},{
			update		: 	{
				method 	: 	'PUT',
				isArray	: 	false
			}
		});
	})
	.factory('Category', function($resource){
		return $resource(apiUrl+'v1/categories', {});
	})
	.factory('Biller', function($resource){
		return $resource(apiUrl+'v1/billers', {});
	});