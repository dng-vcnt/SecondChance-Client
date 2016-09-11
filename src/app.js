(function() {
    'use strict';

    angular
        .module('app', ['ui.router', 'toastr'])
        .value('apiUrl', 'http://localhost:50546/api/')
        .config(appConfig);

    appConfig.$inject = ['$urlRouterProvider', '$stateProvider']

    function appConfig($urlRouterProvider, $stateProvider) {
          
        $urlRouterProvider.otherwise('/employers/company/view');           

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
                    url: '/view?companyId',
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
                })
            .state('employers.user', {           
                url: '/user',
                abstract: true,
                template: '<div ui-view></div>'
            })
                .state('employers.user.list', {
                    url: '/list',
                    controller: 'EUserListController as eUserList',
                    templateUrl: 'employers/user/user.list.html'
                })
                .state('employers.user.view', {
                    url: '/view',
                    controller: 'EUserViewController as eUserView',
                    templateUrl: 'employers/user/user.view.html'
                });;
    }
})();
