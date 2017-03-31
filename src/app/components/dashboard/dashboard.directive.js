(function () {
    'use strict';

    angular
        .module('mangroos.dashboard')
        .directive('adminDashboard', adminDashboard);

    adminDashboard.inject = [''];
    function adminDashboard() {
        // Usage:
        //
        // Creates:
        //
        var directive = {
            bindToController: true,
            templateUrl: 'app/components/dashboard/dashboard.html',
            controller: DashboardController,
            controllerAs: 'adminDashboard',
            link: link,
            restrict: 'E',
            scope: {
            }
        };
        return directive;

        function link(scope, element, attrs) {
        }
    }
    /* @ngInject */
    DashboardController.inject = ['DashboardFactory', '$log']
    function DashboardController(DashboardFactory, $log) {
        var vm = this;
        vm.dashboardInfo = {};
        DashboardFactory.getDashboarInfo().then(function (res) {
            vm.dashboardInfo = res.data;
            console.log(vm.dashboardInfo);
        },
            function (error) {
                $log.error(error);
            });
    }
})();
