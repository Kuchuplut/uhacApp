 (function(){
	'use strict';

	angular
		.module('app')
		.controller('goalStaticsCtrl', goalStaticsCtrl);

		function goalStaticsCtrl( $stateParams){
			var vm = this;
			vm.shouldShowDelete = false;
			vm.shouldShowReorder = false;
			vm.listCanSwipe = true;
		}
})();