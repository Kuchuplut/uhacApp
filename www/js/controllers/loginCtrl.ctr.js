(function(){
	'use strict';

	angular
		.module('app')
		.controller('loginCtrl', loginCtrl);

		function loginCtrl($scope, $stateParams){
			var vm = this;

			vm.alert = function(){
				alert("Hello");
				console.log("adsf");
			}
		}
})();