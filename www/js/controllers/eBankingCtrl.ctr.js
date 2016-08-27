(function(){
	'use strict';

	angular
		.module('app')
		.controller('eBankingCtrl', eBankingCtrl);

		function eBankingCtrl($scope, $stateParams){
			var vm = this;

			vm.alert = function(){
				alert("Hello");
				console.log("adsf");
			}
		}
})();