(function() {
	'use strict';
	
	angular
		.module('app', ['ui.router', 'toastr'])
		.value('apiUrl', 'http://localhost:64882/api/')
    .config(appConfig);

	appConfig.$inject = ['$urlRouterProvider', '$stateProvider']

	function appConfig($urlRouterProvider, $stateProvider) {

    	$urlRouterProvider.otherwise('/jobs');
           
      $stateProvider
      	.state('jobs', {
              url: '/jobs',
              templateUrl: '/jobs/jobs.html',
              controller: 'JobsController as jobs'
        })
				.state('employers', {
              url: '/employers',
              templateUrl: '/employers/employers.html',
              controller: 'EmployersController as employers'
        })
				.state('felons', {
              url: '/felons',
              templateUrl: '/felons/felons.html',
              controller: 'FelonsController as felons'
        })
  

      };
})();