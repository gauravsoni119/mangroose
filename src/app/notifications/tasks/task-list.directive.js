(function () {
    'use strict';

    angular
        .module('notificationModule')
        .directive('notificationTaskList', notificationTaskList);

    notificationTaskList.inject = [''];
    function notificationTaskList() {
        // Usage:
        //
        // Creates:
        //
        var directive = {
            bindToController: true,
            templateUrl: 'app/notifications/tasks/tasks-list.html',
            controller: NofificationTaskListController,
            controllerAs: 'notificationTaskList',
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
    NofificationTaskListController.inject = ['NotificationService', '$log'];
    function NofificationTaskListController(NotificationService, $log) {
        $log.info('Task list directive init');
        var vm = this;
        vm.totaltaskNotifications = 0;
        vm.taskNotifications = [];
        NotificationService.getTaskNotifications().then(function (response) {
            $log.log(response);
            vm.totaltaskNotifications = response.data.length;
            vm.taskNotifications = response.data;
        },
            function (error) {
                $log.error('Error while getting data', error);
            })
    }
})();