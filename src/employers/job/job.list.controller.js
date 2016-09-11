(function() {
    'use strict';

    angular
        .module('app')
        .controller('EJobListController', EJobListController);

    EJobListController.$inject = ['toastr'];

    /* @ngInject */
    function EJobListController(toastr) {
        var vm = this;
        vm.title = 'EJobListController';

        activate();

        ////////////////

        function activate() {
        }
    }
})();