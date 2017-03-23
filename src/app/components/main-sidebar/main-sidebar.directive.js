(function() {
    'use strict';

    angular
        .module('mangroosHub')
        .directive('mainSideBar', mainSideBar);

    mainSideBar.inject = [''];
    function mainSideBar() {
        // Usage:
        //
        // Creates:
        //
        var directive = {
            bindToController: true,
            templateUrl: 'app/components/main-sidebar/main-sidebar.html',
            controller: MainSideBarController,
            controllerAs: 'mainSideBar',
            link: link,
            restrict: 'E',
            replace: true,
            scope: {
            }
        };
        return directive;
        
        function link(scope, element, attrs) {
        }
    }
    /* @ngInject */
    MainSideBarController.inject = ['$log'];
    function MainSideBarController ($log) {
        $log.info('Main side bar directive init');
    }
})();
