(function() {
    'use strict';

    angular
        .module('mangroos.tilesHeader')
        .directive('tilesHeader', tilesHeader);

    tilesHeader.inject = [''];
    function tilesHeader() {
        // Usage:
        //
        // Creates:
        //
        var directive = {
            bindToController: true,
            templateUrl: 'app/components/tiles-header/tiles-header.html',
            controller: TilesController,
            controllerAs: 'tiles',
            link: link,
            restrict: 'E',
            scope: {
                info: '<'
            }
        };
        return directive;
        
        function link(scope, element, attrs) {
        }
    }
    /* @ngInject */
    function TilesController () {
        
    }
})();