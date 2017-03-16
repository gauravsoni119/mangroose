(function() {
    'use strict';

    angular
        .module('mangroosHub')
        .directive('userDropdown', userDropdown);

    userDropdown.inject = [];
    function userDropdown() {
        // Usage:
        //
        // Creates:
        //
        var directive = {
            bindToController: true,
            templateUrl: 'app/components/navbar/user-dropdown/user-dropdown.html',
            controller: UserDropdownController,
            controllerAs: 'userDropdown',
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
    function UserDropdownController () {
        console.log('user dropdown directive init');
    }
})();