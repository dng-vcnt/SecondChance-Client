(function() {
    'use strict';

    angular
        .module('app')
        .controller('ECompanyCreateController', ECompanyCreateController);

    ECompanyCreateController.$inject = ['employerFactory', 'toastr'];

    /* @ngInject */
    function ECompanyCreateController(employerFactory, toastr) {
        var vm = this;
        vm.title = 'ECompanyCreateController';

        activate();

        ////////////////

        function activate() {
        }
    }
})();