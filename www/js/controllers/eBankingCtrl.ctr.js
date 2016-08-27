(function(){
	'use strict';

	angular
		.module('app')
		.controller('eBankingCtrl', eBankingCtrl);

		function eBankingCtrl($scope, $stateParams, $ionicModal, Category, $filter){
			var vm = this;

			Category.get().$promise.then(function(data){
				vm.categories 			=	$filter('orderBy')(data.categories, 'str_category', false);
			});

			$ionicModal.fromTemplateUrl('templates/cashOnHandModal.html', {
			   scope: $scope,
			   animation: 'slide-in-up'
			 }).then(function(modal) {
			   $scope.modal = modal;
			 });
			 $scope.openModal = function() {
			   $scope.modal.show();
			 };
			 $scope.closeModal = function() {
			   $scope.modal.hide();
			 };
			 // Cleanup the modal when we're done with it!
			 $scope.$on('$destroy', function() {
			   $scope.modal.remove();
			 });
			 // Execute action on hide modal
			 $scope.$on('modal.hidden', function() {
			   // Execute action
			 });
			 // Execute action on remove modal
			 $scope.$on('modal.removed', function() {
			   // Execute action
			 });
		}
})();