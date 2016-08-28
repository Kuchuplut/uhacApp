 (function(){
	'use strict';

	angular
		.module('app')
		.controller('goalStaticsCtrl', goalStaticsCtrl);

		function goalStaticsCtrl($scope, $stateParams, Session, $filter, TransactionReport){
			var vm = this;

			vm.shouldShowDelete = false;
			vm.shouldShowReorder = false;
			vm.listCanSwipe = true;
			Session.get({id : 123456789}).$promise.then(function(data){

				TransactionReport.get({accountId : data.int_account_id}).$promise.then(function(trData){

					vm.goalList 		=	trData.account_transaction_details;

				});

			});

			

		}
})();