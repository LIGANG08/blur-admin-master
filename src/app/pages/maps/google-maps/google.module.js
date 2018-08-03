(function () {
    'use strict';

    angular.module('BlurAdmin.pages.maps.google-maps', [])
        .config(routeConfig);

    /** @ngInject */
    function routeConfig($stateProvider) {
        $stateProvider
            .state('maps.google-maps', {
                url: '/maps',
                templateUrl: 'app/pages/maps/google-maps/google-maps.html',
                title: '决策分析',
                sidebarMeta: {
                    icon: 'ion-ios-pulse',
                    order: 50
                },
            });
    }
})();