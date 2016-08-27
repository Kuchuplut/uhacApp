(function(){
	'use strict';

	angular
		.module('app')
		.controller('financialManagerCtrl', financialManagerCtrl);

		function financialManagerCtrl($scope, $stateParams){
			var vm = this;

			vm.alert = function(){
				alert("Hello");
				console.log("adsf");
			}
		}
})();