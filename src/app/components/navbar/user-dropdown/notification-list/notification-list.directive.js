(function() {
    'use strict';

    angular
        .module('mangroosHub')
        .directive('notificationList', notificationList);

    notificationList.inject = [''];
    function notificationList() {
        // Usage:
        //
        // Creates:
        //
        var directive = {
            bindToController: true,
            templateUrl: 'app/components/navbar/user-dropdown/notification-list/notification-list.html',
            controller: NotificationListController,
            controllerAs: 'notificationList',
            link: link,
            replace: true,
            restrict: 'E',
            scope: {
            }
        };
        return directive;
        
        function link(scope, element, attrs) {
        }
    }
    /* @ngInject */
    function NotificationListController () {
        
    }
})();