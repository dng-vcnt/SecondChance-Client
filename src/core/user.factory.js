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
        var usersUrl = apiUrl + 'users';
        return service;


        ////////////////

        function getUsers() {
            var defer = $q.defer();
            $http.get(usersUrl).then(
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
            $http.post(usersUrl, user).then (
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
            $http.delete(usersUrl /*userId*/).then (
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
            $http.put(usersUrl, user).then (
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
