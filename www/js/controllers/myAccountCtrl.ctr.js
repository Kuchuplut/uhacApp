(function(){
	'use strict';

	angular
		.module('app')
		.controller('myAccountCtrl', myAccountCtrl);

		function myAccountCtrl($scope, $stateParams){
			var vm = this;

			vm.alert = function(){
				alert("Hello");
				console.log("adsf");
			}
		}
})();