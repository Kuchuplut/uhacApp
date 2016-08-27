(function(){
	'use strict';

	angular
		.module('app')
		.controller('expenseStatsCtrl', expenseStatsCtrl);

		function expenseStatsCtrl($scope, $stateParams){
			var vm = this;

			vm.alert = function(){
				alert("Hello");
				console.log("adsf");
			}
		}
})();