(function() {
    'use strict';

    angular
        .module('app', ['ui.router', 'toastr'])
        .value('apiUrl', 'http://localhost:50546/api/')  .config(appConfig);

    appConfig.$inject = ['$urlRouterProvider', '$stateProvider']

    function appConfig($urlRouterProvider, $stateProvider) {
          
        $urlRouterProvider.otherwise('/jobs');           

        $stateProvider   
        .state('jobs', {           
            url: '/jobs',
            abstract: true,
            template: '<div ui-view></div>'
        })
            .state('project.list', {
                url: '/list',
                controller: 'ProjectListController as projectList',
                templateUrl: 'app/project/project.list.html'
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
        });
    }
})();
