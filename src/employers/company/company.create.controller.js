(function() {
    'use strict';

    angular
        .module('app')
        .controller('ECompanyCreateController', ECompanyCreateController);

    ECompanyCreateController.$inject = ['employerFactory', 'toastr', '$state'];

    /* @ngInject */
    function ECompanyCreateController(employerFactory, toastr, $state) {
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
                    $state.go('^.view', {'companyId': data.employerId});
                },
                function(error) {
                    toastr.error(error.status, error.statusText);
                    console.log(error);
                }
            );
        }
    }
})();
