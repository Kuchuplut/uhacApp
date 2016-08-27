(function(){
	'use strict';

	angular
		.module('app')
		.controller('promosCtrl', promosCtrl);

		function promosCtrl($scope, $stateParams){
			var vm = this;

			vm.alert = function(){
				alert("Hello");
				console.log("adsf");
			}
		}
})();