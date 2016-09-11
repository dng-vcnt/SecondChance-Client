(function() {
    'use strict';

    angular
        .module('app')
        .factory('jobFactory', jobFactory);

    jobFactory.$inject = ['$http', '$q', 'apiUrl'];

    /* @ngInject */
    function jobFactory($http, $q, apiUrl) {
        var service = {
            getJobListings: getJobList,
            addJob: addJob,
            updateJob: updateJob,
            deleteJob: deleteJob
        };

        return service;

        function getJobList() {

        }

        function addJob() {

        }

        function updateJob() {

        }

        function deleteJob() {
            
        }
    }
})();
