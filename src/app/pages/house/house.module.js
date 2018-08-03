/**
 * @author a.demeshko
 * created on 1/12/16
 */
(function () {
    'use strict';

    angular.module('BlurAdmin.pages.house', [])
        .config(routeConfig);

    /** @ngInject */
    function routeConfig($stateProvider) {
        $stateProvider
            .state('house', {
                url: '/house',
                templateUrl: 'app/pages/house/house.html',
                title: '房屋管理',
                sidebarMeta: {
                    icon: 'ion-ios-pulse',
                    order: 50
                },
            });
    }
})();