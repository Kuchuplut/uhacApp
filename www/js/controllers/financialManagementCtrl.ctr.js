(function(){
	'use strict';

	angular
		.module('app')
		.controller('financialManagerCtrl', financialManagerCtrl);

		function financialManagerCtrl($scope, $stateParams){
			var vm = this;
			vm.items = [{
				title: "asdf",
				description: "Hahahaha"
			}];

			 $scope.shouldShowDelete = false;
			 $scope.shouldShowReorder = false;
			 $scope.listCanSwipe = true

			vm.alert = function(){
				alert("Hello");
				console.log("adsf");
			}

			vm.share = function(item){

			}

			vm.edit = function(item){
				
			}
		}
})();