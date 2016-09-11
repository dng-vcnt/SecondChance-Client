(function() {
    'use strict';

    angular
        .module('app')
        .controller('ECompanyViewController', ECompanyViewController);

    ECompanyViewController.$inject = ['toastr'];

    /* @ngInject */
    function ECompanyViewController(toastr) {
        var vm = this;
        vm.title = 'ECompanyViewController';

        activate();

        ////////////////

        function activate() {
        }
    }
})();