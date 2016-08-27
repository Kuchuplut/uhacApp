(function(){
	'use strict';

	angular
		.module('app')
		.controller('accountsCtrl', accountsCtrl);

		function accountsCtrl($scope, $stateParams){
			var vm = this;

			vm.alert = function(){
				alert("Hello");
				console.log("adsf");
			}
		}
})();