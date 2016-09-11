(function() {
    'use strict';

    angular
        .module('app')
        .controller('ECompanyViewController', ECompanyViewController);

    ECompanyViewController.$inject = ['employerFactory','toastr'];

    /* @ngInject */
    function ECompanyViewController(employerFactory, toastr) {
        var vm = this;
        vm.title = 'ECompanyViewController';

        // variables
        vm.company;

        // functions
        vm.getCompany = getCompany;


        activate();

        ////////////////

        function activate() {
            getCompany();
        }

        function getCompany() {
            employerFactory.getCompanyById(1).then (
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