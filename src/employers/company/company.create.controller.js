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

        // variables
        vm.company;

        // functions
        vm.saveCompany = saveCompany;

        activate();

        ////////////////

        function activate() {
        }

        function saveCompany(company) {
            employerFactory.addCompany(company).then (
                function(data) {
                    toastr.success("Successfully added company info");
                },
                function(error) {
                    toastr.error(error.status, error.statusText);
                    console.log(error);
                }
            );
        }
    }
})();