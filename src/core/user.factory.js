(function() {
    'use strict';

    angular
        .module('app')
        .factory('userFactory', userFactory);

    userFactory.$inject = ['$http', '$q', 'apiUrl'];

    /* @ngInject */
    function userFactory($http, $q, apiUrl) {
        var service = {
            getUsers: getUsers,
            addUser: addUser,
            updateUser: updateUser,
            deleteUser: deleteUser
        };
        return service;

        ////////////////

        function getUsers() {
            var defer = $q.defer();
            $http.get(apiUrl + 'users').then(
                function(response) {
                    defer.resolve(response.data);
                },
                function(error) {
                    defer.reject(error);
                }
            );
            return defer.promise;
        }

        function addUser(user) {
            var defer = $q.defer();
            $http.post(apiUrl, user).then (
                function(response) {
                    defer.resolve(response.data);
                },
                function(error) {
                    defer.reject(error);
                }
            );
            return defer.promise;
        }

        function deleteUser(user) {
            var defer = $q.defer();
            $http.delete(apiUrl /*userId*/).then (
                function(response) {
                    defer.resolve(response.data);
                },
                function(error) {
                    defer.reject(error);
                }
            );
            return defer.promise;
        }

        function updateUser(user) {
            var defer = $q.defer();
            $http.put(apiUrl, user).then (
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
