(function () {
    'use strict';

    angular.module('BlurAdmin.pages.maps.map-lines', [])
        .config(routeConfig);

    /** @ngInject */
    function routeConfig($stateProvider) {
        $stateProvider
            .state('maps', {
                url: '/maps',
                templateUrl: 'app/pages/maps/map-lines/map-lines.html',
                title: '决策分析',
                sidebarMeta: {
                    icon: 'ion-ios-pulse',
                    order: 50
                },
            });
    }
})();