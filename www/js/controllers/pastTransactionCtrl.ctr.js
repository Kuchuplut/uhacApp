(function(){
	'use strict';

	angular
		.module('app')
		.controller('pastTransactionsCtrl', pastTransactionsCtrl);

		function pastTransactionsCtrl($scope, $stateParams){
			var vm = this;

			vm.alert = function(){
				alert("Hello");
				console.log("adsf");
			}
		}
})();