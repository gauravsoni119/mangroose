(function() {
'use strict';

    angular
        .module('mangroosHub')
        .factory('SidebarMenuFactory', SidebarMenuFactory);

    SidebarMenuFactory.inject = ['$http', 'urls'];
    function SidebarMenuFactory($http, urls) {
        var service = {
            getSidebarMenu:getSidebarMenu
        };
        
        return service;

        ////////////////
        function getSidebarMenu() {
            return $http.get(urls.sidebar_menu);
        }
    }
})();