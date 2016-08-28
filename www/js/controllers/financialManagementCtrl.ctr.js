(function(){
	'use strict';

	angular
		.module('app')
		.controller('financialManagerCtrl', financialManagerCtrl);

		function financialManagerCtrl($scope, $stateParams,$ionicModal){
			var vm = this;
			$scope.items = [{
				title: "asdf",
				description: "Hahahaha"
			}];

			
			 $scope.shouldShowDelete = false;
			 $scope.shouldShowReorder = false;
			 $scope.listCanSwipe = true

		$scope.alert = function(){
				alert("Hello");
				console.log("adsf");
			}

			$scope.share = function(item){

			}

			$scope.edit = function(item){
				
			}
		}
})();