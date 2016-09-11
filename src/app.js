(function() {
    'use strict';

    angular
        .module('app', ['ui.router', 'toastr'])
        .value('apiUrl', 'http://localhost:50546/api/')  
        .config(appConfig);

    appConfig.$inject = ['$urlRouterProvider', '$stateProvider']

    function appConfig($urlRouterProvider, $stateProvider) {
          
        $urlRouterProvider.otherwise('/employers/company/create');           

        $stateProvider 
        .state('users', {           
            url: '/users',
            abstract: true,
            templateUrl: '/navbar/user.navbar.html' 
        })
            .state('users.job', {           
                url: '/job',
                abstract: true,
                template: '<div ui-view></div>'
            })
                .state('users.job.list', {
                    url: '/list',
                    controller: 'JobListController as jobList',
                    templateUrl: '/users/job/job.list.html'
                })
            .state('users.user', {           
                url: '/user',
                abstract: true,
                template: '<div ui-view></div>'
            })

        .state('employers', {           
            url: '/employers',
            abstract: true,
            templateUrl: '/navbar/company.navbar.html' 
        })
            .state('employers.company', {           
                url: '/company',
                abstract: true,
                template: '<div ui-view></div>'
            })
                .state('employers.company.create', {
                    url: '/create',
                    controller: 'CompanyCreateController as companyCreate',
                    templateUrl: '/employers/company/company.create.html'
                })
                .state('employers.company.view', {
                    url: '/view',
                    controller: 'CompanyViewController as companyView',
                    templateUrl: '/employers/company/company.view.html'
                })     
            .state('employers.job', {           
                url: '/job',
                abstract: true,
                template: '<div ui-view></div>'
            })
                .state('employers.job.list', {
                    url: '/list',
                    controller: 'JobListController as JobList',
                    templateUrl: '/employers/job/job.list.html'
                })
                .state('employers.job.view', {
                    url: '/view',
                    controller: 'JobViewController as jobView',
                    templateUrl: '/employers/job/job.view.html'
                })
                .state('employers.job.create', {
                    url: '/create',
                    controller: 'JobCreateController as jobCreate',
                    templateUrl: '/employers/job/job.create.html'
                });
    }
})();
