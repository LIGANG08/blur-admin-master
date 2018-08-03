(function () {
    'use strict';

    angular.module('BlurAdmin.pages.maps.leaflet', [])
        .config(routeConfig);

    /** @ngInject */
    function routeConfig($stateProvider) {
        $stateProvider
            .state('maps.leaflet', {
                url: '/maps',
                templateUrl: 'app/pages/maps/leaflet.html',
                title: '报表查询',
                sidebarMeta: {
                    icon: 'ion-ios-pulse',
                    order: 50
                },
            });
    }
})();