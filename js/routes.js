angular.module('app.routes', ['ionicUIRouter'])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    
  

      .state('tabsController.qualityControl', {
    url: '/qc',
    views: {
      'tab1': {
        templateUrl: 'templates/qualityControl.html',
        controller: 'qualityControlCtrl'
      }
    }
  })

  .state('faultsTabDefaultPage', {
    url: '/page3',
    templateUrl: 'templates/faultsTabDefaultPage.html',
    controller: 'faultsTabDefaultPageCtrl'
  })

  .state('tabsController.reportsTabDefaultPage', {
    url: '/page4',
    views: {
      'tab3': {
        templateUrl: 'templates/reportsTabDefaultPage.html',
        controller: 'reportsTabDefaultPageCtrl'
      }
    }
  })

  .state('tabsController', {
    url: '/page1',
    templateUrl: 'templates/tabsController.html',
    abstract:true
  })

  .state('tabsController.bM1Received', {
    url: '/page5',
    views: {
      'tab1': {
        templateUrl: 'templates/bM1Received.html',
        controller: 'bM1ReceivedCtrl'
      }
    }
  })

  .state('tabsController.bM01', {
    url: '/page6',
    views: {
      'tab1': {
        templateUrl: 'templates/bM01.html',
        controller: 'bM01Ctrl'
      }
    }
  })

  .state('tabsController.iNJ01', {
    url: '/page7',
    views: {
      'tab1': {
        templateUrl: 'templates/iNJ01.html',
        controller: 'iNJ01Ctrl'
      }
    }
  })

  .state('tabsController.bM01FaultDetails', {
    url: '/page8',
    views: {
      'tab1': {
        templateUrl: 'templates/bM01FaultDetails.html',
        controller: 'bM01FaultDetailsCtrl'
      }
    }
  })

  .state('tabsController.bM01DefectDetails', {
    url: '/page11',
    views: {
      'tab1': {
        templateUrl: 'templates/bM01DefectDetails.html',
        controller: 'bM01DefectDetailsCtrl'
      }
    }
  })

  .state('tabsController.bM01Faults', {
    url: '/page9',
    views: {
      'tab1': {
        templateUrl: 'templates/bM01Faults.html',
        controller: 'bM01FaultsCtrl'
      }
    }
  })

  .state('tabsController.bM01Defects', {
    url: '/page10',
    views: {
      'tab1': {
        templateUrl: 'templates/bM01Defects.html',
        controller: 'bM01DefectsCtrl'
      }
    }
  })

  .state('tabsController.reportDetails', {
    url: '/page12',
    views: {
      'tab3': {
        templateUrl: 'templates/reportDetails.html',
        controller: 'reportDetailsCtrl'
      }
    }
  })

  /* 
    The IonicUIRouter.js UI-Router Modification is being used for this route.
    To navigate to this route, do NOT use a URL. Instead use one of the following:
      1) Using the ui-sref HTML attribute:
        ui-sref='tabsController.bM01Details'
      2) Using $state.go programatically:
        $state.go('tabsController.bM01Details');
    This allows your app to figure out which Tab to open this page in on the fly.
    If you're setting a Tabs default page or modifying the .otherwise for your app and
    must use a URL, use one of the following:
      /page1/tab3/page13
      /page1/tab1/page13
  */
  .state('tabsController.bM01Details', {
    url: '/page13',
    views: {
      'tab3': {
        templateUrl: 'templates/bM01Details.html',
        controller: 'bM01DetailsCtrl'
      },
      'tab1': {
        templateUrl: 'templates/bM01Details.html',
        controller: 'bM01DetailsCtrl'
      }
    }
  })

$urlRouterProvider.otherwise('/page1/qc')

  

});