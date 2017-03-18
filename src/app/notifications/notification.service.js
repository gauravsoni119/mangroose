(function () {
    'use strict';

    angular
        .module('mangroosHub')
        .service('NotificationService', NotificationService);

    NotificationService.inject = ['$q', 'NotificationResource'];
    function NotificationService($q, NotificationResource) {
        this.getEmailNotifications = getEmailNotifications;
        this.getNotifications = getNotifications;
        this.getTaskNotifications = getTaskNotifications;

        ////////////////

        function getEmailNotifications() {
            var deferred = $q.defer();
            NotificationResource.emailNotification().get().$promise.then(function (res) {
                deferred.resolve(res);
            }, function (error) {
                deferred.reject(error);
            });
            return deferred.promise;
        }

        function getNotifications() {
            var deferred = $q.defer();
            NotificationResource.notification().get().$promise.then(function (res) {
                deferred.resolve(res);
            }, function (error) {
                deferred.reject(error);
            });
            return deferred.promise;
        }

        function getTaskNotifications() {
            var deferred = $q.defer();
            NotificationResource.taskNotification().get().$promise.then(function (res) {
                deferred.resolve(res);
            }, function (error) {
                deferred.reject(error);
            });
            return deferred.promise;
        }
    }
})();
