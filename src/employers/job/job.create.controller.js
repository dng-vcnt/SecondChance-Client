(function() {
    'use strict';

    angular
        .module('app')
        .controller('EJobCreateController', EJobCreateController);

    EJobCreateController.$inject = ['toastr', '$state', 'jobFactory', 'employerFactory'];

    /* @ngInject */
    function EJobCreateController(toastr, $state, jobFactory, employerFactory) {
        var vm = this;
        vm.job = {};
        vm.companies = [];
        vm.submitJob = submitJob;

        activate();

        ////////////////

        function activate() {
            employerFactory.getCompany().then(
                function(data) {
                    vm.companies = data;
                },
                function(error) {
                    // handle error
                }
            );
        }

        function submitJob() {
            jobFactory.addJob(vm.job).then(
                function(data) {
                    vm.job = {};
                    $state.go('^.list')
                },
                function(error) {
                    // handle error
                }
            )
        }
    }
})();
