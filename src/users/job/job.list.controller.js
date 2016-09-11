(function() {
    'use strict';

    angular
        .module('app')
        .controller('UJobListController', UJobListController);

    UJobListController.$inject = ['jobFactory'];

    /* @ngInject */
    function UJobListController(jobFactory) {
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
