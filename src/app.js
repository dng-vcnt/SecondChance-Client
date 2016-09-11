(function() {
    'use strict';

    angular
        .module('app', ['ui.router', 'toastr'])
        .value('apiUrl', 'http://localhost:50546/api/')
        .config(appConfig);

    appConfig.$inject = ['$urlRouterProvider', '$stateProvider']

    function appConfig($urlRouterProvider, $stateProvider) {
          
        $urlRouterProvider.otherwise('/jobs');           

        $stateProvider 
        .state('users', {           
            url: '/users',
            abstract: true,
            template: '<div ui-view></div>'
        })
            .state('users.job', {           
                url: '/job',
                abstract: true,
                template: '<div ui-view></div>'
            })
                .state('users.job.list', {
                    url: '-list',
                    controller: 'JobListController as jobList',
                    templateUrl: 'users/job/job.list.html'
                })
            .state('users.user', {           
                url: '/user',
                abstract: true,
                template: '<div ui-view></div>'
            })

        .state('employers', {           
            url: '/employers',
            abstract: true,
            template: '<div ui-view></div>'
        })
            .state('employers.company', {           
                url: '/company',
                abstract: true,
                template: '<div ui-view></div>'
            })
            .state('employers.job', {           
                url: '/job',
                abstract: true,
                template: '<div ui-view></div>'
            })
                .state('employers.job.list', {
                    url: '/list',
                    controller: 'JobListController as JobList',
                    templateUrl: 'employers/job/job.list.html'
                })
                .state('employers.job.view', {
                    url: '/view',
                    controller: 'JobViewController as jobView',
                    templateUrl: 'employers/job/job.view.html'
                })
                .state('employers.job.create', {
                    url: '/create',
                    controller: 'JobCreateController as jobCreate',
                    templateUrl: 'employers/job/job.create.html'
                });
    }
})();
