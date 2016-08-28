angular.module('app.routes', ['ionicUIRouter'])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    
  

      .state('tabsController.accounts', {
    url: '/homePage',
    views: {
      'tab4': {
        templateUrl: 'templates/accounts.html',
        controller: 'accountsCtrl as vm'
      }
    }
  })

  .state('tabsController.eBanking', {
    url: '/eBanking',
    views: {
      'tab2': {
        templateUrl: 'templates/eBanking.html',
        controller: 'eBankingCtrl as vm'
      }
    }
  })

  .state('tabsController.promos', {
    url: '/promos',
    views: {
      'tab3': {
        templateUrl: 'templates/promos.html',
        controller: 'promosCtrl as vm'
      }
    }
  })

  .state('tabsController', {
    url: '/homeTab',
    templateUrl: 'templates/tabsController.html',
    abstract:true
  })

  .state('login', {
    url: '/login',
    templateUrl: 'templates/login.html',
    controller: 'loginCtrl as vm'
  })

  .state('signup', {
    url: '/signUp',
    templateUrl: 'templates/signup.html',
    controller: 'signupCtrl as vm'
  })

  /* 
    The IonicUIRouter.js UI-Router Modification is being used for this route.
    To navigate to this route, do NOT use a URL. Instead use one of the following:
      1) Using the ui-sref HTML attribute:
        ui-sref='tabsController.financialManager'
      2) Using $state.go programatically:
        $state.go('tabsController.financialManager');
    This allows your app to figure out which Tab to open this page in on the fly.
    If you're setting a Tabs default page or modifying the .otherwise for your app and
    must use a URL, use one of the following:
      /homeTab/tab4/financeMan
      /homeTab/tab5/financeMan
  */
  .state('tabsController.financialManager', {
    url: '/financeMan',
    views: {
      'tab4': {
        templateUrl: 'templates/financialManager.html',
        controller: 'financialManagerCtrl as vm'
      },
      'tab5': {
        templateUrl: 'templates/financialManager.html',
        controller: 'financialManagerCtrl as vm'
      }
    }
  })

  .state('tabsController.pastTransactions', {
    url: '/viewTransactions',
    views: {
      'tab2': {
        templateUrl: 'templates/pastTransactions.html',
        controller: 'pastTransactionsCtrl as vm'
      }
    }
  })

  .state('myAccount', {
    url: '/myAccount',
    templateUrl: 'templates/myAccount.html',
    controller: 'myAccountCtrl as vm'
  })

  .state('createGoal', {
    url: '/createGoal',
    templateUrl: 'templates/setGoalsModal.html',
    controller: 'financialManagerCtrl as vm'
  })

  /* 
    The IonicUIRouter.js UI-Router Modification is being used for this route.
    To navigate to this route, do NOT use a URL. Instead use one of the following:
      1) Using the ui-sref HTML attribute:
        ui-sref='tabsController.goalStatics'
      2) Using $state.go programatically:
        $state.go('tabsController.goalStatics');
    This allows your app to figure out which Tab to open this page in on the fly.
    If you're setting a Tabs default page or modifying the .otherwise for your app and
    must use a URL, use one of the following:
      /homeTab/tab4/goalStats
      /homeTab/tab5/goalStats
  */
  .state('tabsController.goalStatics', {
    url: '/goalStats',
    views: {
      'tab4': {
        templateUrl: 'templates/goalStatics.html',
        controller: 'goalStaticsCtrl as vm'
      },
      'tab5': {
        templateUrl: 'templates/goalStatics.html',
        controller: 'goalStaticsCtrl as vm'
      }
    }
  })

  /* 
    The IonicUIRouter.js UI-Router Modification is being used for this route.
    To navigate to this route, do NOT use a URL. Instead use one of the following:
      1) Using the ui-sref HTML attribute:
        ui-sref='tabsController.expenseStats'
      2) Using $state.go programatically:
        $state.go('tabsController.expenseStats');
    This allows your app to figure out which Tab to open this page in on the fly.
    If you're setting a Tabs default page or modifying the .otherwise for your app and
    must use a URL, use one of the following:
      /homeTab/tab4/expenseStats
      /homeTab/tab5/expenseStats
  */
  .state('tabsController.expenseStats', {
    url: '/expenseStats',
    views: {
      'tab4': {
        templateUrl: 'templates/expenseStats.html',
        controller: 'expenseStatsCtrl as vm'
      },
      'tab5': {
        templateUrl: 'templates/expenseStats.html',
        controller: 'expenseStatsCtrl as vm'
      }
    }
  })

$urlRouterProvider.otherwise('/login')

  

});