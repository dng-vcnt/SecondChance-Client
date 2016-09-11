(function() {
    'use strict';

    angular
        .module('app')
        .controller('EJobCreateController', EJobCreateController);

    EJobCreateController.$inject = ['toastr'];

    /* @ngInject */
    function EJobCreateController(toastr) {
        var vm = this;
        vm.title = 'EJobCreateController';

        // variables
        vm.positionTitle;
        vm.description;
        vm.city;
        vm.state;
        vm.telephone;
        vm.email;
        vm.site;

        // functions

        activate();

        ////////////////

        function activate() {
        }
    }
})();