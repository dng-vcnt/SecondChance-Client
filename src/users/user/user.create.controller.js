(function() {
    'use strict';

    angular
        .module('app')
        .controller('UUserCreateController', UUserCreateController);

    UUserCreateController.$inject = ['userFactory', 'toastr'];

    /* @ngInject */
    function UUserCreateController(userFactory, toastr) {
        var vm = this;
        vm.user = {};
        vm.submitUser = submitUser;

        activate();

        function activate() {
        }

        function submitUser() {
            userFactory.addUser(vm.user).then(
                function(data) {
                    toastr.success('Successfully created profile!');
                    vm.user = {};
                }
            );
        }
    }
})();
