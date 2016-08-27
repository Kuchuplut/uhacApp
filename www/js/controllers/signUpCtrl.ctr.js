(function(){
	'use strict';

	angular
		.module('app')
		.controller('signupCtrl', signupCtrl);

		function signupCtrl($scope, $stateParams, Account){
			var vm = this;
			vm.details = {};

				vm.signUp = function(details){
				console.log(details);
				console.log("Hello signup!");
				var account 			=	new Account(details);
				account.$save(function(data){

					//show success message
					//redirect to login

				}, function(response){
					//show error message
				});
			}
		}
})();