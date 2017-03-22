(function() {
    'use strict';

    angular
        .module('mangroosHub')
        .directive('userPanel', userPanel);

    userPanel.inject = [''];
    function userPanel() {
        // Usage:
        //
        // Creates:
        //
        var directive = {
            link: link,
            templateUrl: 'app/components/main-sidebar/user-panel/user-panel.html',
            restrict: 'E',
            scope: {
            }
        };
        return directive;
        
        function link(scope, element, attrs) {
        }
    }
})();
