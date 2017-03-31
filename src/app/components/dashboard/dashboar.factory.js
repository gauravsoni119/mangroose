(function() {
'use strict';

    angular
        .module('mangroos.dashboard')
        .factory('DashboardFactory', DashboardFactory);

    DashboardFactory.inject = ['$q', 'DashboardResource'];
    function DashboardFactory($q, DashboardResource) {
        var service = {
            getDashboarInfo:getDashboarInfo
        };
        
        return service;

        ////////////////
        function getDashboarInfo() {
            var defer = $q.defer();
            DashboardResource.dashboardInfo().get().$promise.then(function(res) {
                defer.resolve(res);
            },
            function(error) {
                defer.reject(error);
            });
            return defer.promise;
        }
    }
})();
