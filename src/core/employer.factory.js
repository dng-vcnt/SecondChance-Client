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
            getCompanyById: getCompanyById,
            updateCompany: updateCompany,
            deleteCompany: deleteCompany
        };
        return service;

        ////////////////

        function getCompany() {
            var defer = $q.defer();
            $http.get(apiUrl + 'Employers').then (
                function(response) {
                    defer.resolve(response.data);
                },
                function(error) {
                    defer.reject(error);
                }
            );
            return defer.promise;
        }

        function getCompanyById(employerId) {
            var defer = $q.defer();
            $http.get(apiUrl + 'Employers/' + employerId).then (
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
            $http.put(apiUrl + 'Employers' + company.employerId, company).then (
                function(response) {
                    defer.resolve(response.data);
                },
                function(error) {
                    defer.reject(error);
                }
            );
            return defer.promise;
        }

        function addCompany(company) {
            var defer = $q.defer();
            $http.post(apiUrl + 'employers', company).then (
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
            $http.delete(apiUrl + 'Employers' + company.employerId).then (
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
