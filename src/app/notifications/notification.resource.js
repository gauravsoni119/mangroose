(function () {
    'use strict';

    angular
        .module('mangroosHub')
        .factory('NotificationResource', NotificationResource);

    NotificationResource.inject = ['$resource'];
    function NotificationResource($resource) {
        var service = {
            emailNotification: emailNotification,
            notification: notification,
            taskNotification:taskNotification,
        };

        return service;

        ////////////////
        function emailNotification() {
            return $resource('app/notifications/emails/email-notification.json', {}, {
                get: {
                    method: 'GET',
                    transformResponse: function (res) {
                        return angular.fromJson(res);
                    }
                }
            });
        }

        function notification() {
            return $resource('app/notifications/notification.json', {}, {
                get: {
                    method: 'GET',
                    transformResponse: function (res) {
                        return angular.fromJson(res);
                    }
                }
            });
        }

        function taskNotification() {
            return $resource('app/notifications/tasks/task-notification.json', {}, {
                get: {
                    method: 'GET',
                    transformResponse: function (res) {
                        return angular.fromJson(res);
                    }
                }
            });
        }
    }
})();
