(function() {
    'use strict';

    angular
        .module('app')
        .controller('JobListController', JobListController);

    JobListController.$inject = ['jobFactory'];

    /* @ngInject */
    function JobListController(jobFactory) {
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
