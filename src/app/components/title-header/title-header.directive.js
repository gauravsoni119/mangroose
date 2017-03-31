(function() {
    'use strict';

    angular
        .module('mangroosHub')
        .directive('titleHeader', titleHeader);

    titleHeader.inject = [''];
    function titleHeader() {
        // Usage:
        //
        // Creates:
        //
        var directive = {
            bindToController: true,
            template: '<h1 class="page-header align-dashboard-header">{{titleHeader.title}}\
                <small ng-if="titleHeader.versionNumber">Version {{titleHeader.versionNumber}}</small>\
                </h1>',
            controller: TitleHeaderController,
            controllerAs: 'titleHeader',
            link: link,
            restrict: 'E',
            scope: {
                title: '@',
                versionNumber: '@'
            }
        };
        return directive;
        
        function link(scope, element, attrs) {
        }
    }
    /* @ngInject */
    function TitleHeaderController () {
        
    }
})();
