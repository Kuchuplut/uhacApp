(function(){
	'use strict';

	angular
		.module('app')
		.controller('eBankingCtrl', eBankingCtrl);

		function eBankingCtrl($scope, $stateParams, $ionicModal, Category, $filter, $http, Session, BankAccount, Biller, Transaction){
			var vm = this;
			vm.categories = [];	
			var session 		=	null;

			Category.get().$promise.then(function(data){

				vm.categories 		= 	$filter('orderBy')(data.categories, 'str_category', false);

			});

			vm.bankAccountList = []; // Enter bank list 
		 	Session.get({id : 123456789}).$promise.then(function(data){
		 		session 		=	data.account;
		 		BankAccount.get({accountId : data.account.int_account_id}).$promise.then(function(dataBankAccount){
		 			vm.bankAccountList 		=	dataBankAccount.bank_accounts;
		 		});
		 	});

		 	vm.billerList = []; // Enter bank list 
	 		Biller.get().$promise.then(function(dataBiller){
	 			vm.billerList 		=	$filter('orderBy')(dataBiller.billers, 'str_biller', false);
	 		});

	 		vm.processExpense			=	function(details){
	 			var transactionData 	=	{
	 				accountId 			: 	session.int_account_id,
	 				bankAccountId 		: 	details.selectedAccount
	 			};
	 			var transaction 		=	new Transaction(transactionData);
	 			var boolCash 			=	false;
	 			angular.forEach(vm.bankAccountList, function(bankAccount){
	 				if(bankAccount.int_bank_account_id == details.selectedAccount){
	 					if (bankAccount.str_account_no == 'Cash'){
	 						boolCash = true;
	 					}//end if
	 				}//end if
	 			});
	 			if (boolCash){

	 				transaction.$save(function(transactionData){
	 					var expenseData 		=	{
	 						'int_bank_account_id' 		: 	details.selectedAccount,
	 						'int_bill_id'				: 	details.selectedBiller,
			 				'int_category_id'			: 	details.selectedCategory,
			 				'deci_value'				: 	details.amount,
			 				'source_currency'			: 	'php',
			 				'transactionType'			: 	2,
			 				'status'					: 	'S'
	 					};//end var
	 					console.log(transactionData);
	 					Transaction.update({
	 						accountId : session.int_account_id,
	 						bankAccountId : expenseData.int_bank_account_id,
	 						transactionId : transactionData.transaction.int_transaction_id,
	 						transactionType : 2,
	 						expenseData : expenseData
	 					}, expenseData).$promise.then(function(transactionData){
	 						console.log('SUCCESS!!!');
	 					});
	 				});

	 			}else{
		 			transaction.$save(function(data){
		 				var expenseData 		=	{
			 				'int_bank_account_id'		: 	details.selectedAccount,
			 				'int_bill_id'				: 	details.selectedBiller,
			 				'int_category_id'			: 	details.selectedCategory,
			 				'deci_value'				: 	details.amount,
			 				'source_currency'			: 	'php'
			 			};

			 			var bankData			=	{
			 				channel_id		: 	'UHACK_0039',
			 				transaction_id 	: 	data.transaction.int_transaction_id,
			 				source_currency	: 	'php',
			 				amount 			: 	details.amount,
			 				reference1 		: 	details.reference1,
			 				reference2 		: 	details.reference2,
			 				reference3 		: 	details.reference3
			 			};
			 			angular.forEach(vm.bankAccountList, function(bankAccount){
			 				if (bankAccount.int_bank_account_id == details.selectedAccount){
			 					bankData.source_account 		=	bankAccount.str_account_no
			 				}//end if
			 			});
			 			angular.forEach(vm.billerList, function(biller){
			 				if (biller.int_bill_id == details.selectedBiller){
			 					bankData.biller_id 				=	biller.str_biller;
			 				}//end if
			 			});
			 			$http({
			 				method : 'POST',
			 				url : 'https://api.us.apiconnect.ibmcloud.com/ubpapi-dev/sb/api/RESTs/payment',
			 				data : bankData,
			 				headers : {
			 					'accept'		: 'application/json',
			 					'content-type'	: 'application/json',
			 					'x-ibm-client-id' : '21f60fcb-aff1-4add-a07d-22a3ee3ae8fe',
			 					'x-ibm-client-secret' : 'M4nF3mG2wO1cN1aI1sX7qH4rU4sB0rH8iW4jU6mL2mR2qW5dI4'
			 				}}).then(function(bankApiData){
			 					console.log(bankApiData);
			 					expenseData.str_confirmation_no 		=	bankApiData.data.confirmation_no;
			 					expenseData.status 						=	bankApiData.data.status;
			 					console.log(expenseData);
			 					Transaction.update({
			 						accountId : session.int_account_id,
			 						bankAccountId : expenseData.int_bank_account_id,
			 						transactionId : bankData.transaction_id,
			 						transactionType : 2,
			 						expenseData : expenseData
			 					}, expenseData).$promise.then(function(transactionData){
			 						console.log('SUCCESS!!!');
			 					});

			 				}, function(data){
			 					console.log('ERROR');
			 				});
		 			});
				}//end else
	 			
	 		}

		}
})();