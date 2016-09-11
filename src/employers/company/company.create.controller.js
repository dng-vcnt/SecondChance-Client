(function() {
    'use strict';

    angular
        .module('app')
        .controller('CompanyCreateController', CompanyCreateController);

    CompanyCreateController.$inject = ['employerFactory', 'toastr'];

    /* @ngInject */
    function CompanyCreateController(employerFactory, toastr) {
        var vm = this;
        vm.title = 'CompanyCreateController';

        activate();

        ////////////////

        function activate() {
        }
    }
})();