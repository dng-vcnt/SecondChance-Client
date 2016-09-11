(function() {
    'use strict';

    angular
        .module('app')
        .controller('UUserCreateController', UUserCreateController);

    UUserCreateController.$inject = ['jobFactory'];

    /* @ngInject */
    function UUserCreateController(jobFactory) {
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