(function(){
	'use strict';

	angular
		.module('app')
		.controller('accountsCtrl', accountsCtrl);

		function accountsCtrl($scope, $stateParams, $ionicPopup, $timeout, BankAccount){
			var vm = this;

			vm.showPopup = function() {
			  vm.data = {};

			  // An elaborate, custom popup
			  var myPopup = $ionicPopup.show({
			    template: '<input type="password" ng-model="vm.data.account">',
			    title: 'Enter Account Number',
			    scope: $scope,
			    buttons: [
			      { text: 'Cancel' },
			      {
			        text: '<b>Save</b>',
			        type: 'button-positive',
			        onTap: function(e) {
			          if (!vm.data.account) {
			            //don't allow the user to close unless he enters wifi password
			            e.preventDefault();
			          } else {
			            return vm.data.account;
			          }
			        }
			      }
			    ]
			  });

			  myPopup.then(function(res) {
			    console.log('Tapped!', res);
			  });

			  $timeout(function() {
			     myPopup.close(); //close the popup after 3 seconds for some reason
			  }, 5000);
			 };

			 vm.getBankAccountList = function(){
			 	vm.bankAccountList = []; // Enter bank list 	
			 };

		}
})();