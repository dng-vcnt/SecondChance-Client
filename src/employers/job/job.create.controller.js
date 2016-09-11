(function() {
    'use strict';

    angular
        .module('app')
        .controller('EJobCreateController', EJobCreateController);

    EJobCreateController.$inject = ['toastr', '$state', 'jobFactory'];

    /* @ngInject */
    function EJobCreateController(toastr, $state, jobFactory) {
        var vm = this;
        vm.job = {};
        vm.submitJob = submitJob;

        activate();

        ////////////////

        function activate() {
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
