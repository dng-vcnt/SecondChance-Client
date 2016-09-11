(function() {
    'use strict';

    angular
        .module('app')
        .factory('jobFactory', jobFactory);

    jobFactory.$inject = ['$http', '$q', 'apiUrl'];

    /* @ngInject */
    function jobFactory($http, $q, apiUrl) {
        var service = {
            getJobList: getJobList,
            addJob: addJob,
            updateJob: updateJob,
            deleteJob: deleteJob
        };
        var jobUrl = apiUrl + 'jobs/';

        return service;

        function getJobList() {
            var defer = $q.defer();
            $http.get(jobUrl).then (
                function(response) {
                    defer.resolve(response.data);
                },
                function(error) {
                    defer.reject(error);
                }
            );
            return defer.promise;
        }

        function addJob(job) {
            var defer = $q.defer();
            job.employerId = 1;

            $http.post(jobUrl, job).then (
                function(response) {
                    defer.resolve(response.data);
                },
                function(error) {
                    defer.reject(error);
                }
            );
            return defer.promise;
        }

        function updateJob(job) {
            var defer = $q.defer();

            $http.put(jobUrl, job).then (
                function(response) {
                    defer.resolve(response.data);
                },
                function(error) {
                    defer.reject(error);
                }
            );
            return defer.promise;
        }

        function deleteJob(job) {
            var defer = $q.defer();
            $http.delete(jobUrl).then (
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
