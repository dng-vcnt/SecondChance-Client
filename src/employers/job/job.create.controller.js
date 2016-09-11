(function() {
    'use strict';

    angular
        .module('app')
        .controller('JobCreateController', JobCreateController);

    JobCreateController.$inject = ['toastr'];

    /* @ngInject */
    function JobCreateController(toastr) {
        var vm = this;
        vm.title = 'JobCreateController';

        activate();

        ////////////////

        function activate() {
        }
    }
})();