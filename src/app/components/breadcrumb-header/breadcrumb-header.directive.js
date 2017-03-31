(function() {
    'use strict';

    angular
        .module('mangroosHub')
        .directive('breadcrumbHeader', breadcrumbHeader);

    breadcrumbHeader.inject = [''];
    function breadcrumbHeader() {
        // Usage:
        //
        // Creates:
        //
        var directive = {
            bindToController: true,
            templateUrl: 'app/components/breadcrumb-header/breadcrumb-header.html',
            controller: BreadCrumbController,
            controllerAs: 'BreadCrumbController',
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
    function BreadCrumbController () {
        
    }
})();