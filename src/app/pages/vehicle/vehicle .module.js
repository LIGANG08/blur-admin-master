/**
 * @author a.demeshko
 * created on 1/12/16
 */
(function () {
    'use strict';

    angular.module('BlurAdmin.pages.vehicle', [])
        .config(routeConfig);

    /** @ngInject */
    function routeConfig($stateProvider) {
        $stateProvider
            .state('vehicle', {
                url: '/vehicle',
                templateUrl: 'app/pages/vehicle/vehicle.html',
                title: '车辆管理',
                sidebarMeta: {
                    icon: 'ion-ios-pulse',
                    order: 50
                },
            });
    }
})();