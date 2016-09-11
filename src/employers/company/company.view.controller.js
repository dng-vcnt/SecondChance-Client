(function() {
    'use strict';

    angular
        .module('app')
        .controller('ECompanyViewController', ECompanyViewController);

    ECompanyViewController.$inject = ['employerFactory','$stateParams','toastr'];

    /* @ngInject */
    function ECompanyViewController(employerFactory, $stateParams, toastr) {
        var vm = this;
        vm.title = 'ECompanyViewController';

        // variables
        vm.company;

        // functions
        vm.getCompany = getCompany;


        activate();

        ////////////////

        function activate() {
            var companyId = $stateParams.companyId ? $stateParams.companyId : 1;
            getCompany(companyId);
        }

        function getCompany(companyId) {
            employerFactory.getCompanyById(companyId).then (
                function(data) {
                    vm.company = data;
                },
                function(error) {
                    toastr.error(error.status, error.statusText);
                    console.log(error);
                }
            );
        }

    }
})();
