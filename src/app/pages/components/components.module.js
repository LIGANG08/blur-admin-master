(function () {
    'use strict';

    angular.module('BlurAdmin.pages.components', [
        'BlurAdmin.pages.components.mail',
        'BlurAdmin.pages.components.timeline',
        'BlurAdmin.pages.components.tree',
        'BlurAdmin.pages.components.role',
        'BlurAdmin.pages.components.batch',
        'BlurAdmin.pages.components.news',
    ])
        .config(routeConfig);

    /** @ngInject */
    function routeConfig($stateProvider) {
        $stateProvider
            .state('components', {
                url: '/components',
                template : '<ui-view  autoscroll="true" autoscroll-body-top></ui-view>',
                abstract: true,
                title: '我的工作台',
                sidebarMeta: {
                    icon: 'ion-android-home',
                    order: 0,
                },
            });
    }

})();
