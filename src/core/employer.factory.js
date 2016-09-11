(function() {
    'use strict';

    angular
        .module('app')
        .factory('employerFactory', employerFactory);

    employerFactory.$inject = ['$http', '$q'];

    /* @ngInject */
    function employerFactory($http, $q) {
        var service = {
            func: func
        };
        return service;

        ////////////////

        function func() {
        }
    }
})();