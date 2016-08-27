(function(){
	'use strict';

	angular
		.module('app')
		.controller('signupCtrl', signupCtrl);

		function signupCtrl($scope, $stateParams){
			var vm = this;

			vm.alert = function(){
				alert("Hello");
				console.log("adsf");
			}
		}
})();