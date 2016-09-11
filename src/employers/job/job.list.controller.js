(function() {
    'use strict';

    angular
        .module('app')
        .controller('EJobListController', EJobListController);

    EJobListController.$inject = ['toastr', 'jobFactory'];

    /* @ngInject */
    function EJobListController(toastr, jobFactory) {
        var vm = this;
        vm.jobs = [];

        activate();

        function activate() {
            jobFactory.getJobList().then(
                function(data) {
                    vm.jobs = data;
                }
            );
        }
    }
})();
