(function() {
    'use strict';

    angular
        .module('mangroosHub')
        .directive('searchBar', searchBar);

    searchBar.inject = [];
    function searchBar() {
        // Usage:
        //
        // Creates:
        //
        var directive = {
            bindToController: true,
            controller: SearchBarController,
            templateUrl: 'app/components/searchbar/searchbar.html',
            controllerAs: 'searchBar',
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
    function SearchBarController () {
        console.log('search bar directive init');
    }
})();