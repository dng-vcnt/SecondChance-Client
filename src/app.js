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
            templateUrl: 'navbar/user.navbar.html'
        })
            .state('users.job', {           
                url: '/job',
                abstract: true,
                template: '<div ui-view></div>'
            })
                .state('users.job.detail', {
                    url: '/detail',
                    controller: 'UJobDetailController as uJobDetail',
                    templateUrl: 'users/job/job.detail.html'
                .state('users.job.list', {
                    url: '/list',
                    controller: 'UJobListController as uJobList',
                    templateUrl: 'users/job/job.list.html'
                })


            .state('users.user', {           
                url: '/user',
                abstract: true,
                template: '<div ui-view></div>'
            })
                .state('users.user.create', {
                        url: '/create',
                        controller: 'UUserCreateController as uUserCreate',
                        templateUrl: 'users/user/user.create.html'
                    })
                .state('users.user.view', {
                        url: '/view',
                        controller: 'UUserViewController as uUserView',
                        templateUrl: 'users/user/user.view.html'
                    })

        .state('employers', {           
            url: '/employers',
            abstract: true,
            templateUrl: 'navbar/company.navbar.html'
        })
            .state('employers.company', {           
                url: '/company',
                abstract: true,
                template: '<div ui-view></div>'
            })
                .state('employers.company.create', {
                    url: '/create',
                    controller: 'ECompanyCreateController as eCompanyCreate',
                    templateUrl: 'employers/company/company.create.html'
                })
                .state('employers.company.view', {
                    url: '/view',
                    controller: 'ECompanyViewController as eCompanyView',
                    templateUrl: 'employers/company/company.view.html'
                })
            .state('employers.job', {           
                url: '/job',
                abstract: true,
                template: '<div ui-view></div>'
            })
                .state('employers.job.list', {
                    url: '/list',
                    controller: 'EJobListController as eJobList',
                    templateUrl: 'employers/job/job.list.html'
                })
                .state('employers.job.create', {
                    url: '/create',
                    controller: 'EJobCreateController as eJobCreate',
                    templateUrl: 'employers/job/job.create.html'
                });
    }
})();
