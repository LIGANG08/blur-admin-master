(function () {
    'use strict';

    angular.module('BlurAdmin.pages.users', [
        'ngResource',
        'ngMockE2E',
    ])
        .config(routeConfig);

    /** @ngInject */
    function routeConfig($stateProvider) {
        $stateProvider
            .state('users', {
                url: '/users',
                templateUrl: 'app/pages/users/users.html',
                title: '用户管理',
                controller:'uCtrl',
                sidebarMeta: {
                    icon: 'ion-ios-pulse',
                    order: 40
                },
            });
    }
})();