(function(){
	'use strict';

	angular
		.module('app')
		.controller('accountsCtrl', accountsCtrl);

		function accountsCtrl($scope, $stateParams, $ionicPopup, $timeout, BankAccount, Session){
			var vm = this;

			vm.showPopup = function() {
			  $scope.data = {};

			  // An elaborate, custom popup
			  var myPopup = $ionicPopup.show({
			    template: '<input type="text" ng-model="data.str_account_no">',
  			    title: 'Enter Account Number',
  			    scope: $scope,
  			    buttons: [
			      { text: 'Cancel' },
			      {
			        text: '<b>Save</b>',
			        type: 'button-positive',
			        onTap: function(e) {
			          if (!$scope.data.str_account_no) {
  			            //don't allow the user to close unless he enters wifi password
  			            e.preventDefault();
  			          } else {
			            return $scope.data.str_account_no;
 			            console.log($scope.data.str_account_no);
			          }
			        }
			      }
			    ]
			  });

			  myPopup.then(function(res) {
			    console.log('Tapped!', res);
			    var session 			=	null;
 			    Session.get({id : 123456789}).$promise.then(function(data){
 			    	session 		=	data.account;
 			    	var dataToStore		=	{
 			    		accountId 			: 	session.int_account_id,
 			    		str_account_no		: 	res
 			    	};
 			    	console.log(dataToStore);
 			    	var bankAccount 		=	new BankAccount(dataToStore);
 			    	bankAccount.$save(function(bankData){
 			    		//show success message
 			    		vm.bankAccountList.push(bankData.bank_account);
 			    		console.log('Success!');
 			    	}, function(response){
 			    		//show error message
 			    	});
 			    });
			  });

			 };

			 vm.getBankAccountList = function(){
			 	vm.bankAccountList = []; // Enter bank list 
			 	Session.get({id : 123456789}).$promise.then(function(data){
			 		BankAccount.get({accountId : data.account.int_account_id}).$promise.then(function(dataBankAccount){
			 			vm.bankAccountList 		=	dataBankAccount.bank_accounts;
			 		});
			 	});
			 };

			 vm.getBankAccountList();

		}
})();