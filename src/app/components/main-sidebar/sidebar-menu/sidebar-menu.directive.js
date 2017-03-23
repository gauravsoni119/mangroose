(function() {
    'use strict';

    angular
        .module('mangroosHub')
        .directive('sidebarMenu', sidebarMenu);

    sidebarMenu.inject = [''];
    function sidebarMenu() {
        // Usage:
        //
        // Creates:
        //
        var directive = {
            bindToController: true,
            templateUrl: 'app/components/main-sidebar/sidebar-menu/sidebar-menu.html',
            controller: SideBarMenuController,
            controllerAs: 'sidebarMenu',
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
    function SideBarMenuController () {
        
    }
})();
