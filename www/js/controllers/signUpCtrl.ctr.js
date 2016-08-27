(function(){
	'use strict';

	angular
		.module('app')
		.controller('signupCtrl', signupCtrl);

		function signupCtrl($scope, $stateParams, Account, $ionicPopup){
			var vm = this;
			vm.details = {};

			vm.signUp = function(details){
			console.log(details);
			console.log("Hello signup!");
			var account 			=	new Account(details);
			account.$save(function(data){
				showAlert();
				//show success message
				//redirect to login

			}, function(response){
				//show error message
			});
		}

		$scope.showAlert = function() {
		  var alertPopup = $ionicPopup.alert({
		    title: 'Data Registered!',
		    template: 'Thank you for signing up!'
		  });

		  alertPopup.then(function(res) {
		    console.log('Thank you for not eating my delicious ice cream cone');
		    $scope.go('/homePage');
		  });
		 }

		 $scope.go = function ( path ) {
		   $location.path( path );
		 };
	}
})();