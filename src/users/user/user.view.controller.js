(function() {
    'use strict';

    angular
        .module('app')
        .controller('UUserViewController', UUserViewController);

    UUserViewController.$inject = ['jobFactory'];

    /* @ngInject */
    function UUserViewController(jobFactory) {
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