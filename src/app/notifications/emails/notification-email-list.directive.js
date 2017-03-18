(function() {
    'use strict';

    angular
        .module('notificationModule')
        .directive('notificationEmailList', notificationEmailList);

    notificationEmailList.inject = [''];
    function notificationEmailList() {
        // Usage:
        //
        // Creates:
        //
        var directive = {
            bindToController: true,
            templateUrl: 'app/notifications/emails/emails-list.html',
            controller: NotificationEmailListController,
            controllerAs: 'notificationEmailList',
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
    NotificationEmailListController.inject = ['NotificationService', '$log'];
    function NotificationEmailListController (NotificationService, $log) {
        $log.info('NotificationEmailList directive init');
        var vm = this;
        vm.totalEmailNotifications = 0;
        vm.emailNotifications = [];
        NotificationService.getEmailNotifications().then(function(response) {
            $log.log(response);
            vm.totalEmailNotifications = response.data.length;
            vm.emailNotifications = response.data;
        },
        function(error) {
            $log.error('Error while getting data', error);
        })
    }
})();