(function() {
    'use strict';

    angular
        .module('app')
        .controller('EUserListController', EUserListController);

    EUserListController.$inject = ['toastr', 'userFactory'];

    /* @ngInject */
    function EUserListController(toastr, userFactory) {
        var vm = this;
        vm.users = [];

        activate();

        ////////////////

        function activate() {
            userFactory.getUsers().then(
                function(data){
                    vm.users = data;
                },
                function(error) {
                    // handle error
                }
            );
        }
    }
})();
