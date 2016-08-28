(function(){
	'use strict';

	angular
		.module('app')
		.controller('financialManagerCtrl', financialManagerCtrl);

		function financialManagerCtrl($scope, $stateParams,$ionicModal, Goal, Category, $filter, Session){
			var vm = this;
			var session 		=	null;
			$scope.items = [{
				title: "asdf",
				description: "Hahahaha"
			}];

			Category.get().$promise.then(function(data){

				$scope.categoryList			=	$filter('orderBy')(data.categories, 'str_category', false);

			});

			Goal.get().$promise.then(function(data){

				$scope.items 		=	$filter('orderBy')(data.goals, 'created_at', false);

			});

			
			 $scope.shouldShowDelete = false;
			 $scope.shouldShowReorder = false;
			 $scope.listCanSwipe = true

		$scope.alert = function(){
				alert("Hello");
				console.log("adsf");
			};

			$scope.share = function(item){

			};

			$scope.edit = function(item){
				
			};

			$scope.submitGoals 				=	function(details){

				Session.get({id: 123456789}).$promise.then(function(data){
					session 		=	data.account;
					details.accountId		=	session.int_account_id;
					var goal 		=	new Goal(details);
					goal.$save(function(data){

						$scope.items.push(data.goal);
						details 			=	null;
						//show success message

					}, function(response){
						//show error message
					});
				});

			};
		}
})();