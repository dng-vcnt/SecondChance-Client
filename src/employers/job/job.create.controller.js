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

        activate();

        ////////////////

        function activate() {
        }
    }
})();