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

        return service;

        function getJobList() {
            var defer = $q.defer();
            var jobs = [
                {
                    company: { name: "Origin Code Academy" },
                    position: "Software Developer",
                    location: "San Diego",
                    description: "Program things!"
                },
                {
                    company: { name: "McDonalds" },
                    position: "Chef",
                    location: "San Diego",
                    description: "Cook burgers and fries"
                }
            ];

            defer.resolve(jobs);

            return defer.promise;
        }

        function addJob() {

        }

        function updateJob() {

        }

        function deleteJob() {

        }
    }
})();
