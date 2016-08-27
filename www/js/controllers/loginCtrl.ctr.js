(function(){
	'use strict';

	angular
		.module('app')
		.controller('loginCtrl', loginCtrl);

		function loginCtrl($scope, $stateParams){
			var vm = this;
			document.addEventListener("deviceready", onDeviceReady, false);
			function onDeviceReady() {
			    console.log(device.cordova);
			    console.log("What thee fuck");
			}
		}
})();