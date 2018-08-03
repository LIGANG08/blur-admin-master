/**
 * @author v.lugovsky
 * created on 16.12.2015
 */
(function () {
    'use strict';

    angular.module('BlurAdmin.pages.maps', [
        // 'BlurAdmin.pages.maps.google-maps.',
        'BlurAdmin.pages.maps.leaflet',
        // 'BlurAdmin.pages.maps.map-bubbles',
        // // 'BlurAdmin.pages.maps.map-lines',
    ])
        .config(routeConfig);

    /** @ngInject */
    function routeConfig($stateProvider) {
        $stateProvider
            .state('maps', {
                url: '/maps',
                templateUrl: '<ui-view  autoscroll="true" autoscroll-body-top></ui-view>',
                abstract: true,
                title: '决策分析',
                sidebarMeta: {
                    icon: 'ion-ios-location-outline',
                    order: 30,
                },
            })
            // .state('maps.gmap', {
            //     url: '/gmap',
            //     templateUrl: 'app/pages/maps/google-maps/google-maps.html',
            //     controller: 'GmapPageCtrl',
            //     title: '报表查询',
            //     sidebarMeta: {
            //         order: 0,
            //     },
            // })
            // .state('maps.leaflet', {
            //     url: '/leaflet',
            //     templateUrl: 'app/pages/maps/leaflet/leaflet.html',
            //     controller: 'LeafletPageCtrl',
            //     title: '系统分析',
            //     sidebarMeta: {
            //         order: 100,
            //     },
            // })
            // .state('maps.bubble', {
            //     url: '/bubble',
            //     templateUrl: 'app/pages/maps/map-bubbles/map-bubbles.html',
            //     controller: 'MapBubblePageCtrl',
            //     title: 'Bubble Maps',
            //     sidebarMeta: {
            //         order: 200,
            //     },
            // })
            // .state('maps.line', {
            //     url: '/line',
            //     templateUrl: 'app/pages/maps/map-lines/map-lines.html',
            //     controller: 'MapLinesPageCtrl',
            //     title: 'Line Maps',
            //     sidebarMeta: {
            //         order: 300,
            //     },
            // });
    }
})();
