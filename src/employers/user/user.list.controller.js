(function() {
    'use strict';

    angular
        .module('app')
        .controller('EUserListController', EUserListController);

    EUserListController.$inject = ['toastr'];

    /* @ngInject */
    function EUserListController(toastr) {
        var vm = this;
        vm.title = 'EUserListController';

        activate();

        ////////////////

        function activate() {
        }
    }
})();