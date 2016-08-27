(function(){
	'use strict';

	angular
		.module('app')
		.controller('goalStaticsCtrl', goalStaticsCtrl);

		function goalStaticsCtrl($scope, $stateParams){
			var vm = this;

			vm.alert = function(){
				alert("Hello");
				console.log("adsf");
			}
		}
})();