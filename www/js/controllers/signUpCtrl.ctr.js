(function(){
	'use strict';

	angular
		.module('app')
		.controller('signupCtrl', signupCtrl);

		function signupCtrl($scope, $stateParams){
			var vm = this;
			vm.details = {};

				vm.signUp = function(details){
				console.log(details);
				console.log("Hello signup!");
			}
		}
})();