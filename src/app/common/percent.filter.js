(function() {
'use strict';

    angular
        .module('mangroosHub')
        .filter('percent', percent);

    function percent() {
        return percentFilter;

        ////////////////

        function percentFilter(input) {
            return input + '%';
        }
    }
})();
