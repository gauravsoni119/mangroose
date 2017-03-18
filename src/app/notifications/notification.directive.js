(function () {
    'use strict';

    angular
        .module('notificationModule')
        .directive('notificationList', notificationList);

    notificationList.inject = [''];
    function notificationList() {
        // Usage:
        //
        // Creates:
        //
        var directive = {
            bindToController: true,
            templateUrl: 'app/notifications/notifications-list.html',
            controller: NotificationListController,
            controllerAs: 'notificationList',
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
    NotificationListController.inject = ['NotificationService', '$log'];
    function NotificationListController(NotificationService, $log) {
        $log.info('Notifications list directive init');
        var vm = this;
        vm.totalNotifications = 0;
        vm.notifications = [];
        NotificationService.getNotifications().then(function (response) {
            $log.log(response);
            vm.totalNotifications = response.data.length;
            vm.notifications = response.data;
        },
            function (error) {
                $log.error('Error while getting data', error);
            })
    }
})();