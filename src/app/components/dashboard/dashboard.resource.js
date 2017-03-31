(function () {
    'use strict';

    angular
        .module('mangroos.dashboard')
        .factory('DashboardResource', DashboardResource);

    DashboardResource.inject = ['$resource'];
    function DashboardResource($resource) {
        var service = {
            dashboardInfo: dashboardInfo
        };

        return service;

        ////////////////
        function dashboardInfo() {
            return $resource('app/components/dashboard/dashboard.json', {}, {
                get: {
                    method: 'GET',
                    transformResponse: function (res) {
                        return angular.fromJson(res);
                    }
                }
            })
        }
    }
})();