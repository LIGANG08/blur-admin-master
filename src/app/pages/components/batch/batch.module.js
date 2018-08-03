(function () {
    'use strict';

    angular.module('BlurAdmin.pages.components.batch', [])
        .config(routeConfig);

    /** @ngInject */
    function routeConfig($stateProvider) {
        $stateProvider
            .state('components.batch', {
                url: '/batch',
                templateUrl: 'app/pages/components/batch/batch.html',
                title: '审批代理',
                sidebarMeta: {
                    icon: 'ion-ios-pulse',
                    order: 40
                },
            });
    }
})();