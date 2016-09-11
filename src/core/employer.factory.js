(function() {
    'use strict';

    angular
        .module('app')
        .factory('employerFactory', employerFactory);

    employerFactory.$inject = ['$http', '$q', 'apiUrl'];

    /* @ngInject */
    function employerFactory($http, $q, apiUrl) {
        var service = {
            addCompany: addCompany,
            getCompany: getCompany,
            updateCompany: updateCompany,
            deleteCompany: deleteCompany
        };
        return service;

        ////////////////

        function addCompany(company) {
            var defer = $q.defer();
            $http.post(apiUrl, company).then (
                function(response) {
                    defer.resolve(response.data);
                },
                function(error) {
                    defer.reject(error);
                }
            );
            return defer.promise;
        }

        function deleteCompany(company) {
            var defer = $q.defer();
            $http.delete(apiUrl /*companyId*/).then (
                function(response) {
                    defer.resolve(response.data);
                },
                function(error) {
                    defer.reject(error);
                }
            );
            return defer.promise;
        }

        function getCompany() {
            var defer = $q.defer();
            $http.get(apiUrl).then (
                function(response) {
                    defer.resolve(response.data);
                },
                function(error) {
                    defer.reject(error);
                }
            );
            return defer.promise;
        }

        function updateCompany(company) {
            var defer = $q.defer();
            $http.put(apiUrl, company).then (
                function(response) {
                    defer.resolve(response.data);
                },
                function(error) {
                    defer.reject(error);
                }
            );
            return defer.promise;
        }
    }
})();