// var apiUrl 			=	'http://localhost:8000/api/finapp/';
var apiUrl 			=	'http://192.168.43.194/uhac/public/index.php/api/finapp/';
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
	.factory('Transaction', function($resource){
		return $resource(apiUrl+'v1/accounts/:accountId/bank-accounts/:bankAccountId/transactions/:transactionId', {
			accountId 			: 	'@accountId',
			bankAccountId 		: 	'@bankAccountId',
			transactionId 		: 	'@transactionId'
		},{
			update 				: 	{
				method 			: 	'PUT',
				isArray 		: 	false,
				headers			: 	{'Content-Type':'application/x-www-form-urlencoded; charset=UTF-8'}
			}
		});
	})
	.factory('Category', function($resource){
		return $resource(apiUrl+'v1/categories/:id', {
			id 			: 	'@id'
		});
	})
	.factory('Biller', function($resource){
		return $resource(apiUrl+'v1/billers/:id', {
			id  		: 	'@id'
		});
	})
	.factory('Session', function($resource){
		return $resource(apiUrl+'v1/sessions/:id', {
			id 			: 	'@id'
		});
	});